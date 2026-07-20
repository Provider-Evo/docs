# docs

Provider-Evo 官方文档站点（Astro + GitHub Pages）。布局参考 [麦麦文档](https://docs.mai-mai.org/) 信息架构，视觉与交互对齐 Provider WebUI 设计令牌。

GitHub 仓库：<https://github.com/Provider-Evo/docs>（编排工作区本地目录仍为 `provider-docs/`）。

## 站点结构

| 分区 | 路径 | 说明 |
|------|------|------|
| 首页 | `/docs/` | Hero、特性卡片、粒子背景 |
| 使用手册 | `/docs/manual/` | 快速开始、工作区、WebUI |
| 插件 | `/docs/plugins/` | 概览、市场、开发、清单 |
| 开发 | `/docs/develop/` | SDK、测试 |
| 发版 | `/docs/release/` | 版本与变更 |
| FAQ | `/docs/faq/` | 部署、插件常见问题 |

顶栏导航、侧栏分组、页内 TOC、主题切换与全文搜索由 `public/docs.js` 在客户端驱动；主题键与 WebUI 共用 `localStorage['provider.webui.settings'].theme`。

## 本地预览

```bash
npm ci
npm run dev
```

默认开发地址：<http://localhost:4321/docs/>

## GitHub Pages

`main` 分支推送后由 `.github/workflows/pages.yml` 自动部署（`npm run build` → `dist/`）。

站点地址：<https://provider-evo.github.io/docs/>

## Issue 邮件

配置仓库 Secrets：`SMTP_USERNAME`、`SMTP_PASSWORD`（Outlook 应用密码）。  
详见站内 [发版历史](https://provider-evo.github.io/docs/release/) 一节。
