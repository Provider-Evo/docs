---
layout: ../layouts/Base.astro
title: 发版历史
---

# 发版历史

依据 `provider-core` **`dev` 分支** `release:` / `bump:` 提交与 `config/main_config.toml` 整理。

## 版本规则

- 格式：**`2.2.xxx`**（三位补丁号），运行时真源为 `config/main_config.toml` 的 `server.version`
- **`dev` 为准**：新版本先在 `dev` 迭代；验证后合并到 `main`，`main` 与 `dev` 共用同一套版本号，通常**落后数个补丁**
- **不使用 `-alpha` / `-beta` 后缀**；`main` 上遗留的 `v2.2.0-alpha` 等 git tag 为早期标记，不再作为命名规范

## 当前版本

| 分支 | 版本 | 说明 |
|------|------|------|
| **dev** | **2.2.297** | 活跃开发 HEAD |
| main | 低于 dev | 稳定线，待合并 dev 后追平 |

## 里程碑（dev）

| 版本 | 说明 |
|------|------|
| **2.2.270** | 插件生态落地：容错加载、29 个插件脚手架、opencode/zen 合并为 zen、WebUI 插件面板、插件市场 |
| **2.2.274** | 插件生态迭代 |
| **2.2.275** | 移除 legacy `src/platforms` 双轨代码、i18n 修复 |
| **2.2.276** | 插件生态发版 |
| **2.2.297** | 当前：MaiBot 式插件热重载、`fast_restart`、provider-sdk 0.3.2、生命周期与 TabBar 重构、CI lint 门禁 |

## 分支策略

| 分支 | 定位 |
|------|------|
| `dev` | 版本真源与日常开发；`release:` / `bump:` 提交落在此线 |
| `main` | 稳定发布；从 `dev` 合并，版本号同步但通常滞后 |
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
