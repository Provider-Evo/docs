---
layout: ../layouts/Base.astro
title: 发版历史
---

# 发版历史

依据 `provider-core` 仓库 git tag 与 `release:` 提交整理（非计划路线图）。

## 当前版本

**2.2.297** — `dev` 分支 HEAD，`config/main_config.toml` 中 `server.version` 为唯一运行时版本真源。

`main` 上最后一个 git tag 为 **v2.2.0**（2026-07-09）。此后新功能在 `dev` 上以 **2.2.xxx** 补丁号持续迭代，尚未打新 tag。

## Git 标签（main）

| 标签 | 日期 | 对应提交说明 |
|------|------|----------------|
| **v2.2.0-alpha** | 2026-07-09 | 插件容错加载、WebUI 插件管理 API、Webui/Coplan util 骨架 |
| **v2.2.0-beta** | 2026-07-09 | 移除 legacy `src/platforms` 双轨代码、i18n 修复 |
| **v2.2.0** | 2026-07-09 | `dev` 合并 `main`，首个稳定 tag |

## dev 线 release 提交

| 版本 | 说明 |
|------|------|
| **2.2.270** | 29 个插件脚手架、opencode 与 zen 合并为统一 zen 平台、WebUI 插件面板、插件市场 |
| **2.2.274** | 插件生态迭代 |
| **2.2.275** | legacy platforms 清理与 i18n（beta 主题的后继发版） |
| **2.2.276** | 插件生态发版 |
| **2.2.297** | 当前：MaiBot 式插件热重载、`fast_restart`、provider-sdk 0.3.2、服务生命周期与 TabBar 重构、CI lint 门禁 |

## 分支策略

| 分支 | 定位 |
|------|------|
| `main` | 稳定发布，tag 止于 v2.2.0 |
| `dev` | 活跃开发，当前 2.2.297 |
| `classical` | 重构前冻结快照（tag `archive/classical-frozen`） |

## PyPI

- `echotools>=2.3.0`
- `provider-sdk>=0.3.2`
- `provider-guide>=2.2.293`（包名 `provider-guide`，即 Provider-V2 / provider-core 核心）

## GitHub

- 组织：<https://github.com/Provider-Evo>
- 核心仓：<https://github.com/Provider-Evo/provider-core>
- 文档站：<https://provider-evo.github.io/docs/>
- 文档仓：<https://github.com/Provider-Evo/docs>
- 插件市场：<https://github.com/Provider-Evo/plugin-repo>

## Issue 邮件通知

在 `docs` 仓库 Settings → Secrets 配置 `SMTP_USERNAME`、`SMTP_PASSWORD`（Outlook 应用密码）。新 Issue 通知 `nichegnfuben@outlook.com`。
