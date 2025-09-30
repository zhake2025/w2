# React 应用 PWA 扩展（跨平台安装与离线可用）

## Core Features

- 浏览器与桌面可安装体验（含 iOS A2HS 支持）

- 离线可用：HTML Shell + 静态资源缓存

- 动态数据在线优先并排除 /api/* 缓存

- SPA 路由与离线回退

- 跨平台图标与 iOS 元数据完整支持

- 轻量升级提示与刷新更新

- 与 Capacitor/Tauri 共存（仅 Web 构建启用 PWA）

## Tech Stack

{
  "Web": {
    "arch": "react",
    "component": null
  },
  "iOS": "A2HS + apple-touch-icon + iOS Safari 元数据兼容（验证暂缓）",
  "Android": "PWA 安装与离线缓存（Chrome/Edge/Firefox）"
}

## Design

轻提示脚本在 SW 更新时提示刷新；环境变量控制在原生构建关闭 PWA，确保共存体验。

## Plan

Note: 

- [ ] is holding
- [/] is doing
- [X] is done

---

[X] 实现可安装体验：统一安装入口与浏览器安装提示，提供安装状态与失败降级文案

[X] 离线可用：缓存 HTML Shell 与 静态资源，离线时展示可用页面与友好提示

[X] 跨平台图标与元数据：完善 manifest、apple-touch-icon 与 iOS 专属 meta

[X] 路由与回退：支持 SPA 导航与离线回退至应用首页，提供基础 404 提示

[X] 数据获取策略：动态数据在线优先，严格不缓存 /api/*，失败时显示重试与占位

[X] 更新与版本提示：检测新版本并通过 Snackbar/Toast 引导刷新

[X] 共存策略开关：仅在 Web 构建启用 PWA，不影响 Capacitor/Tauri 使用体验
