# 发版路线

| 版本 | 状态 | 说明 |
|------|------|------|
| **2.2.0-alpha** | 已发布 | 插件运行时、Fncall/Webui/Coplan、27 平台插件 |
| **2.2.0-beta** | 当前 | provider-docs GitHub Pages、插件市场 Provider-Evo Org |
| **2.2.0** | 计划中 | Zen 合并定稿、性能与 bug 修复 |

## PyPI

- `echotools>=2.0.0`
- `provider-sdk>=0.3.0`
- `provider-guide==2.2.0-beta`（包名 `provider-guide`，即 Provider-V2 核心）

## GitHub

- 组织：<https://github.com/Provider-Evo>
- 核心仓：<https://github.com/Provider-Evo/provider-v2>
- 插件市场：<https://github.com/Provider-Evo/plugin-repo>

## Issue 邮件通知

在 `provider-docs` 仓库 Settings → Secrets 配置：

- `SMTP_USERNAME` — 发件 Outlook 账号
- `SMTP_PASSWORD` — 应用密码

新 Issue 将通知 `nichegnfuben@outlook.com`。
