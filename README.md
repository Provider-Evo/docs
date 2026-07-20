# provider-docs

Provider-Evo 官方文档站点（Astro + GitHub Pages）。

## 本地预览

```bash
npm ci
npm run dev
```

默认开发地址：<http://localhost:4321/provider-docs/>

## GitHub Pages

`main` 分支推送后由 `.github/workflows/pages.yml` 自动部署（`npm run build` → `dist/`）。

站点地址：<https://provider-evo.github.io/provider-docs/>

## Issue 邮件

配置仓库 Secrets：`SMTP_USERNAME`、`SMTP_PASSWORD`（Outlook 应用密码）。  
详见站内 [发版路线](https://provider-evo.github.io/provider-docs/docs/release/) 一节。
