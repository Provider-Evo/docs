# provider-docs

Provider-Evo 官方文档站点。

## 本地预览（MkDocs）

```bash
pip install mkdocs-material
mkdocs serve
```

## GitHub Pages

`main` 分支推送后由 `.github/workflows/pages.yml` 自动部署。

站点地址：<https://provider-evo.github.io/provider-docs/>

## Issue 邮件

配置仓库 Secrets：`SMTP_USERNAME`、`SMTP_PASSWORD`（Outlook 应用密码）。  
详见 [docs/release.md](docs/release.md)。
