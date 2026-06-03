const express = require('express');
const router = express.Router();
const { authenticate } = require('../middleware/auth');
const { pipelineDataModel } = require('../models/database');

// 获取所有管线数据（需要认证）
router.get('/', authenticate, (req, res) => {
  try {
    const data = pipelineDataModel.findAll();
    res.json({ data });
  } catch (error) {
    console.error('获取数据列表错误:', error);
    res.status(500).json({ error: '获取数据列表失败' });
  }
});

// 获取单个数据记录（需要认证）
router.get('/:id', authenticate, (req, res) => {
  try {
    const { id } = req.params;
    const record = pipelineDataModel.findById(id);
    
    if (!record) {
      return res.status(404).json({ error: '数据记录不存在' });
    }
    
    res.json({ data: record });
  } catch (error) {
    console.error('获取数据记录错误:', error);
    res.status(500).json({ error: '获取数据记录失败' });
  }
});

// 创建数据记录（需要认证）
router.post('/', authenticate, (req, res) => {
  try {
    const { name, type, points, file_path } = req.body;
    
    if (!name || !type) {
      return res.status(400).json({ error: '名称和类型为必填项' });
    }
    
    const result = pipelineDataModel.create({
      name,
      type,
      points: points || 0,
      user_id: req.user.id,
      status: 'pending',
      file_path: file_path || null
    });
    
    res.status(201).json({
      message: '数据记录创建成功',
      id: result.lastInsertRowid
    });
  } catch (error) {
    console.error('创建数据记录错误:', error);
    res.status(500).json({ error: '创建数据记录失败' });
  }
});

// 更新数据状态（需要认证）
router.patch('/:id/status', authenticate, (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    if (!['pending', 'approved', 'rejected'].includes(status)) {
      return res.status(400).json({ error: '无效的状态值' });
    }
    
    pipelineDataModel.updateStatus(id, status);
    res.json({ message: '数据状态已更新' });
  } catch (error) {
    console.error('更新数据状态错误:', error);
    res.status(500).json({ error: '更新数据状态失败' });
  }
});

// 删除数据记录（需要认证）
router.delete('/:id', authenticate, (req, res) => {
  try {
    const { id } = req.params;
    pipelineDataModel.delete(id);
    res.json({ message: '数据记录已删除' });
  } catch (error) {
    console.error('删除数据记录错误:', error);
    res.status(500).json({ error: '删除数据记录失败' });
  }
});

module.exports = router;
