---
layout: ../../layouts/DocLayout.astro
title: 版本规则
---

<p class="page-meta">版本</p>

# 版本规则与分支策略

## 版本规则

- 格式：**`2.2.xxx`**（三位补丁号）
- **可提交真源**：`pyproject.toml`、`template/template_config.toml` 的 `server.version` / `version`
- **本地运行时**：`config/main_config.toml`（`config/` gitignore，不提交；由模板生成）
- **`dev` 为准**：新版本先在 `dev` 迭代；验证后合并到 `main`，`main` 与 `dev` 共用同一套版本号，通常**落后数个补丁**
- **不使用 `-alpha` / `-beta` 后缀**；`main` 上遗留的 `v2.2.0-alpha` 等 git tag 为早期标记，不再作为命名规范

## 分支策略

| 分支 | 定位 |
|------|------|
| `dev` | 版本真源与日常开发 |
| `main` | 稳定发布；从 `dev` 合并，版本号同步但通常滞后 |
| `classical` | 重构前冻结快照 |

## PyPI

- `echotools>=2.3.0`
- `provider-sdk>=0.3.2`
- `provider-guide>=2.2.293`
