const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { userModel } = require('../models/database');
const { JWT_SECRET } = require('../middleware/auth');

// 用户注册
router.post('/register', (req, res) => {
  try {
    const { name, email, password, company, phone } = req.body;
    
    // 验证必填字段
    if (!name || !email || !password) {
      return res.status(400).json({ error: '姓名、邮箱和密码为必填项' });
    }
    
    // 检查邮箱是否已存在
    const existingUser = userModel.findByEmail(email);
    if (existingUser) {
      return res.status(400).json({ error: '该邮箱已被注册' });
    }
    
    // 创建用户
    const result = userModel.create({
      name,
      email,
      password,
      company,
      phone
    });
    
    // 生成 token
    const token = jwt.sign(
      { id: result.lastInsertRowid, email, name },
      JWT_SECRET,
      { expiresIn: '7d' }
    );
    
    res.status(201).json({
      message: '注册成功',
      token,
      user: {
        id: result.lastInsertRowid,
        name,
        email
      }
    });
  } catch (error) {
    console.error('注册错误:', error);
    res.status(500).json({ error: '注册失败' });
  }
});

// 用户登录
router.post('/login', (req, res) => {
  try {
    const { email, password } = req.body;
    
    // 验证必填字段
    if (!email || !password) {
      return res.status(400).json({ error: '邮箱和密码为必填项' });
    }
    
    // 查找用户
    const user = userModel.findByEmail(email);
    if (!user) {
      return res.status(401).json({ error: '邮箱或密码错误' });
    }
    
    // 验证密码
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: '邮箱或密码错误' });
    }
    
    // 检查用户状态
    if (user.status !== 'active') {
      return res.status(403).json({ error: '账号已被禁用' });
    }
    
    // 生成 token
    const token = jwt.sign(
      { id: user.id, email: user.email, name: user.name },
      JWT_SECRET,
      { expiresIn: '7d' }
    );
    
    res.json({
      message: '登录成功',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        company: user.company
      }
    });
  } catch (error) {
    console.error('登录错误:', error);
    res.status(500).json({ error: '登录失败' });
  }
});

module.exports = router;
