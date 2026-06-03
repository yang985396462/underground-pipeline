require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const multer = require('multer');

// 导入路由
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const dataRoutes = require('./routes/data');
const fileRoutes = require('./routes/files');

const app = express();
const PORT = process.env.PORT || 3001;

// 中间件
app.use(cors());
app.use(express.json());

// 静态文件目录
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/data', express.static(path.join(__dirname, 'data')));

// 文件上传配置
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// 路由
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/data', dataRoutes);
app.use('/api/files', upload.single('file'), fileRoutes);

// 健康检查
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// 错误处理
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
