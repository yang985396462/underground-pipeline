# 地下管线测绘 APP

专业的地下管线测绘数据管理和 App 官网

## 项目结构

```
underground-pipeline/
├── frontend/          # 前端官网和管理后台
│   ├── src/
│   │   ├── pages/    # 页面组件
│   │   ├── components/ # 公共组件
│   │   └── App.tsx
│   └── package.json
├── backend/          # 后端 API 服务
│   ├── routes/       # API 路由
│   ├── models/       # 数据模型
│   ├── middleware/   # 认证中间件
│   ├── uploads/      # 文件上传目录
│   └── server.js
└── package.json
```

## 功能特性

### 官网页面
- ✅ 首页 - APP 介绍和功能展示
- ✅ 关于我们 - 公司简介和核心优势
- ✅ 联系方式 - 在线咨询表单
- ✅ 用户登录/注册

### 管理后台
- ✅ 数据概览 - 用户和数据统计
- ✅ 用户管理 - 用户列表和状态控制
- ✅ 数据管理 - 管线数据导入导出
- ✅ 文件管理 - 文件上传下载

### 后端 API
- ✅ 用户认证（JWT）
- ✅ 文件上传下载
- ✅ 数据管理
- ✅ SQLite 数据库

## 快速开始

### 安装依赖

```bash
# 安装所有依赖
npm run install-all

# 或分别安装
cd frontend && npm install
cd ../backend && npm install
```

### 开发模式

```bash
# 同时启动前后端
npm run dev

# 或分别启动
npm run dev:frontend  # 前端 (http://localhost:5173)
npm run dev:backend   # 后端 (http://localhost:3001)
```

### 生产构建

```bash
# 构建前端
npm run build:frontend

# 启动后端
npm start:backend
```

## API 文档

### 认证接口

```
POST /api/auth/register - 用户注册
POST /api/auth/login - 用户登录
```

### 用户接口

```
GET /api/users - 获取用户列表
GET /api/users/me - 获取当前用户
PATCH /api/users/:id/status - 更新用户状态
DELETE /api/users/:id - 删除用户
```

### 数据接口

```
GET /api/data - 获取管线数据列表
GET /api/data/:id - 获取单个数据
POST /api/data - 创建数据记录
PATCH /api/data/:id/status - 更新数据状态
DELETE /api/data/:id - 删除数据
```

### 文件接口

```
POST /api/files - 上传文件
GET /api/files - 获取文件列表
GET /api/files/:id/download - 下载文件
DELETE /api/files/:id - 删除文件
```

## 技术栈

**前端**
- React 18 + TypeScript
- Vite
- React Bootstrap
- React Router

**后端**
- Node.js + Express
- JWT 认证
- SQLite 数据库
- Multer 文件上传

## 部署到 GitHub

1. 创建新的 GitHub 仓库

2. 初始化 git 并推送

```bash
cd /workspace/underground-pipeline
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/underground-pipeline.git
git push -u origin main
```

3. 启用 GitHub Pages（可选）

对于前端静态部署，可以使用 GitHub Pages：
- 进入仓库 Settings > Pages
- 选择 main 分支和 /dist 目录
- 保存后获取访问地址

## 开发环境要求

- Node.js >= 18
- npm >= 9

## License

ISC
