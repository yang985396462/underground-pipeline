const express = require('express');
const router = express.Router();
const { authenticate } = require('../middleware/auth');
const { userModel } = require('../models/database');

// 获取所有用户（需要认证）
router.get('/', authenticate, (req, res) => {
  try {
    const users = userModel.findAll();
    res.json({ users });
  } catch (error) {
    console.error('获取用户列表错误:', error);
    res.status(500).json({ error: '获取用户列表失败' });
  }
});

// 获取当前用户信息（需要认证）
router.get('/me', authenticate, (req, res) => {
  try {
    const user = userModel.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ error: '用户不存在' });
    }
    res.json({ user });
  } catch (error) {
    console.error('获取用户信息错误:', error);
    res.status(500).json({ error: '获取用户信息失败' });
  }
});

// 更新用户状态（需要认证）
router.patch('/:id/status', authenticate, (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    if (!['active', 'disabled'].includes(status)) {
      return res.status(400).json({ error: '无效的状态值' });
    }
    
    userModel.updateStatus(id, status);
    res.json({ message: '用户状态已更新' });
  } catch (error) {
    console.error('更新用户状态错误:', error);
    res.status(500).json({ error: '更新用户状态失败' });
  }
});

// 删除用户（需要认证）
router.delete('/:id', authenticate, (req, res) => {
  try {
    const { id } = req.params;
    userModel.delete(id);
    res.json({ message: '用户已删除' });
  } catch (error) {
    console.error('删除用户错误:', error);
    res.status(500).json({ error: '删除用户失败' });
  }
});

module.exports = router;
