# 部署到 GitHub Pages（项目页 zhake2025/w1）

## Core Features

- 自动构建并发布到 GitHub Pages（无 gh-pages 推送记录）

- SPA 路由支持（404.html）

- Vite base 适配项目路径 /w1/

- 忽略 .codebuddy 与 .ai_workspace 文件

## Tech Stack

{
  "Web": {
    "arch": "react",
    "component": null
  }
}

## Design

无需 gh-pages 分支；Actions 直接部署 Pages Artifact，提交记录仅保留用户推送。

## Plan

Note: 

- [ ] is holding
- [/] is doing
- [X] is done

---

[X] 设置 Vite base 为 /w1/

[X] 创建 GitHub Actions Pages 工作流

[X] 添加 .gitignore 排除本地元数据

[X] 在仓库 Settings → Pages 启用 GitHub Actions 作为来源

[ ] 推送 main 以触发部署
