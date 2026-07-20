---
layout: ../../layouts/DocLayout.astro
title: 工作区结构
---

<p class="page-meta">用户手册 · 入门</p>

# 工作区结构

Provider-Evo 编排仓（monorepo 工作区）包含多个独立子树：

| 目录 | 角色 |
|------|------|
| `provider-core/` | 运行时网关（独立 git 仓） |
| `provider-plugin/` | 插件源码真源（无 git，各插件独立仓） |
| `plugin-repo/` | 市场索引 `plugins.json` / `plugin_details.json` |
| `docs-src/` | Agent 向技术文档镜像 |
| `provider-docs/` | 本用户文档站（GitHub `Provider-Evo/docs`） |

## 插件部署副本

`provider-core/plugins/` 为 overlay 部署副本，**禁止**在此修改 adapter 业务逻辑。编辑入口是 `provider-plugin/Provider-*`。

## 配置真源

仅本地 `provider-core/config/main_config.toml`（模板见 `template/template_config.toml`；`config/` **不提交**）。不使用 `.env`。

## 版本号

`server.version`（当前 dev **2.2.298**）以仓库内 `template/template_config.toml` / `pyproject.toml` 为准；本地 `config/main_config.toml` 运行时读取但不提交。
