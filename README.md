# Signin Risk Manager | 云端签到风险管理系统

> A multi-language cloud-based sign-in & risk scoring system with CI testing and Docker deployment support.  
> 基于多语言模块构建的签到风险评分系统，支持持续集成与 Docker 云部署。

## 📦 Features

- 多语言模块开发：Node.js / Java / Python
- 风险评分算法整合与 Web 展示
- 持续集成（CI）测试：GitHub Actions
- Docker 容器化部署 & Google Cloud 云上线

## 🔧 Tech Stack

- Backend Modules: Node.js / Python / Java
- Frontend: HTML/CSS, JavaScript
- CI: GitHub Actions
- Deployment: Docker, Google Cloud
- Other: Git, Nginx

## 🚀 Run Locally (简化示例)

```bash
# 启动前端页面
cd frontend
npm install
npm run start

# 后端模块分别运行（按说明）
cd backend-node/
node app.js

# 若使用 Docker
docker-compose up
```
Google Cloud demo 已过期，如需重新部署请手动配置 key 与容器。

## 📁 Structure
```bash
signin-risk-system/
├── frontend/
├── backend-node/
├── backend-java/
├── backend-python/
├── .github/workflows/  # CI config
├── docker-compose.yml
```

## 🧠 Contributor Role
- 前端页面搭建 + Node模块调试
- CI流程对接 + 云部署协助

## 📄 License
MIT License · For coursework demonstration only.
