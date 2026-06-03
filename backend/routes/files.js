const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const { authenticate } = require('../middleware/auth');
const { fileModel } = require('../models/database');

// 上传文件（需要认证）
router.post('/', authenticate, (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: '未上传文件' });
    }
    
    const fileData = {
      name: req.file.filename,
      original_name: req.file.originalname,
      size: req.file.size,
      mime_type: req.file.mimetype,
      file_path: req.file.path,
      user_id: req.user.id
    };
    
    const result = fileModel.create(fileData);
    
    res.status(201).json({
      message: '文件上传成功',
      id: result.lastInsertRowid,
      file: {
        name: req.file.filename,
        originalName: req.file.originalname,
        size: req.file.size
      }
    });
  } catch (error) {
    console.error('上传文件错误:', error);
    res.status(500).json({ error: '上传文件失败' });
  }
});

// 获取所有文件（需要认证）
router.get('/', authenticate, (req, res) => {
  try {
    const files = fileModel.findAll();
    res.json({ files });
  } catch (error) {
    console.error('获取文件列表错误:', error);
    res.status(500).json({ error: '获取文件列表失败' });
  }
});

// 下载文件（需要认证）
router.get('/:id/download', authenticate, (req, res) => {
  try {
    const { id } = req.params;
    const file = fileModel.findById(id);
    
    if (!file) {
      return res.status(404).json({ error: '文件不存在' });
    }
    
    // 增加下载次数
    fileModel.incrementDownloads(id);
    
    const filePath = path.join(__dirname, '..', file.file_path);
    
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: '文件不存在' });
    }
    
    res.download(filePath, file.original_name);
  } catch (error) {
    console.error('下载文件错误:', error);
    res.status(500).json({ error: '下载文件失败' });
  }
});

// 删除文件（需要认证）
router.delete('/:id', authenticate, (req, res) => {
  try {
    const { id } = req.params;
    const file = fileModel.findById(id);
    
    if (!file) {
      return res.status(404).json({ error: '文件不存在' });
    }
    
    // 删除物理文件
    const filePath = path.join(__dirname, '..', file.file_path);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
    
    // 删除数据库记录
    fileModel.delete(id);
    
    res.json({ message: '文件已删除' });
  } catch (error) {
    console.error('删除文件错误:', error);
    res.status(500).json({ error: '删除文件失败' });
  }
});

module.exports = router;
