#!/bin/bash

# 地下管线测绘 APP 启动脚本

echo "🚀 地下管线测绘 APP"
echo "==================="
echo ""

# 检查 Node.js
if ! command -v node &> /dev/null; then
    echo "❌ 错误：未找到 Node.js"
    echo "请先安装 Node.js (https://nodejs.org/)"
    exit 1
fi

echo "✅ Node.js 版本：$(node -v)"
echo "✅ npm 版本：$(npm -v)"
echo ""

# 检查依赖
if [ ! -d "frontend/node_modules" ]; then
    echo "📦 安装前端依赖..."
    cd frontend && npm install && cd ..
fi

if [ ! -d "backend/node_modules" ]; then
    echo "📦 安装后端依赖..."
    cd backend && npm install && cd ..
fi

# 创建数据目录
mkdir -p backend/uploads backend/data

echo ""
echo "🎯 启动服务..."
echo ""

# 启动后端
cd backend
npm start &
BACKEND_PID=$!
cd ..

echo "⏳ 等待后端启动..."
sleep 3

# 启动前端
cd frontend
npm run dev -- --host 0.0.0.0 &
FRONTEND_PID=$!
cd ..

echo ""
echo "✅ 服务已启动!"
echo ""
echo "📱 前端地址：http://localhost:5173"
echo "🔧 后端地址：http://localhost:3001"
echo "📊 管理后台：http://localhost:5173/admin/dashboard"
echo ""
echo "按 Ctrl+C 停止服务"
echo ""

# 等待中断信号
trap "kill $BACKEND_PID $FRONTEND_PID 2>/dev/null" EXIT
wait
