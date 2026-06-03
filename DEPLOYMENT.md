# 部署到 GitHub 指南

## 前提条件

1. 已安装 Node.js 18+
2. 已注册 GitHub 账号

## 快速部署步骤

### 1. 创建 GitHub 仓库

访问 https://github.com/new 创建一个新的空仓库，例如：
- 仓库名：`underground-pipeline`
- 描述：地下管线测绘 APP
- 保持仓库为**公开**或**私有**（根据你的需求）

### 2. 推送代码到 GitHub

在项目根目录执行以下命令：

```bash
# 进入项目目录
cd /workspace/underground-pipeline

# 添加远程仓库（替换 YOUR_USERNAME 为你的 GitHub 用户名）
git remote add origin https://github.com/YOUR_USERNAME/underground-pipeline.git

# 推送到 GitHub
git push -u origin main
```

如果遇到权限问题，可以使用 SSH 方式：

```bash
git remote add origin git@github.com:YOUR_USERNAME/underground-pipeline.git
git push -u origin main
```

### 3. 等待 GitHub Actions 构建

推送后，GitHub 会自动触发 CI/CD 流程：

1. 访问你的仓库页面
2. 点击 "Actions" 标签
3. 查看构建进度
4. 等待构建完成（通常 2-5 分钟）

### 4. 启用 GitHub Pages（可选）

如果想通过 GitHub Pages 访问前端静态页面：

1. 进入仓库 Settings > Pages
2. 在 "Build and deployment" 部分：
   - Source: Deploy from a branch
   - Branch: 选择 `gh-pages`
   - Folder: `/ (root)`
3. 点击 Save

等待几分钟后，你的网站将在以下地址可用：
```
https://YOUR_USERNAME.github.io/underground-pipeline/
```

## 本地运行开发环境

### 安装依赖

```bash
# 前端
cd frontend
npm install

# 后端
cd backend
npm install
```

### 启动服务

**方式一：使用启动脚本**

```bash
./start.sh
```

**方式二：分别启动**

```bash
# 终端 1 - 启动后端
cd backend
npm start

# 终端 2 - 启动前端
cd frontend
npm run dev
```

访问地址：
- 前端：http://localhost:5173
- 后端：http://localhost:3001
- 管理后台：http://localhost:5173/admin/dashboard

### 生产构建

```bash
# 构建前端
cd frontend
npm run build
# 输出到 frontend/dist/

# 启动后端（生产环境）
cd backend
NODE_ENV=production npm start
```

## 常见问题

### 1. Git 推送失败

**错误**: `remote: Repository not found`

**解决**: 检查仓库地址是否正确：
```bash
git remote -v
# 如果错误，删除并重新添加
git remote remove origin
git remote add origin <正确的地址>
```

### 2. GitHub Actions 构建失败

**检查**:
- 确认 package.json 中 scripts 配置正确
- 查看 Actions 日志了解具体错误
- 尝试在本地运行 `npm run build`

### 3. 无法访问管理后台

**解决**:
- 确认后端服务已启动
- 检查浏览器控制台是否有错误
- 确认代理配置正确（`frontend/vite.config.ts`）

### 4. 文件上传失败

**检查**:
- `backend/uploads/` 目录是否有写权限
- 检查文件大小限制（默认 100MB）
- 查看后端日志

## API 测试

使用 curl 或 Postman 测试后端 API：

```bash
# 健康检查
curl http://localhost:3001/api/health

# 用户注册
curl -X POST http://localhost:3001/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "测试用户",
    "email": "test@example.com",
    "password": "123456",
    "company": "某某公司",
    "phone": "13800138000"
  }'

# 用户登录
curl -X POST http://localhost:3001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "123456"
  }'
```

## 自定义配置

### 修改端口

**前端**: 编辑 `frontend/vite.config.ts`
```typescript
server: {
  port: 3000,  // 修改前端端口
}
```

**后端**: 编辑 `backend/.env`
```
PORT=3001  # 修改后端端口
```

### 修改 JWT密钥

编辑 `backend/.env`:
```
JWT_SECRET=your-new-secret-key-here
```

## 下一步

1. 自定义首页内容和样式
2. 添加实际的 API 调用逻辑
3. 数据库迁移到 MySQL/PostgreSQL
4. 添加单元测试
5. 配置 CI/CD自动测试

## 技术支持

如遇问题，请查阅：
- [Node.js 文档](https://nodejs.org/docs/)
- [React 文档](https://react.dev/)
- [Express 文档](https://expressjs.com/)
- [GitHub Actions 文档](https://docs.github.com/en/actions)
