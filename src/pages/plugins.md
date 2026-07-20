---
layout: ../layouts/Base.astro
title: 插件
---

# 插件

## 安装

WebUI → 插件 → Git URL 安装，或手动克隆到 `plugins/`。

启用插件需存在 `_manifest.json`；禁用则重命名为 `_manifest.json.disabled`。

## 市场

默认源：`nichengfuben/plugin-repo` 的 `plugins.json` 与 `plugin_details.json`。

每个 `Provider-*` 为独立 Git 仓库；市场索引不含源码，仅 id 与仓库 URL。

## 插件类型

| 类型 | 说明 |
|------|------|
| `platform` | 上游平台适配器（如 Qwen、Ollama） |
| `fncall` | 工具调用协议（XML、ANTML 等） |
| `webui` | WebUI 增强主题与静态资源 |
| `coplan` | CodingPlan 策略组与市场 |

## 安全

- `accounts.py` 不得提交到 Git；运行时使用 `persist/{platform}/accounts.json`
- Coplan `config.toml` 含管理员密钥，仅保留 `config.toml.example` 在仓库中

## 开发者

在 Provider-Evo 编排工作区开发插件：

1. 在 `provider-plugin/Provider-*` 编辑源码（**不要**直接改 `provider-core/plugins/`）
2. 验证加载后执行 overlay 同步到 `provider-core/plugins/`

规范文档位于编排仓 `docs-src/provider-guide-references/`：

| 文档 | 范围 |
|------|------|
| `plugin-guide.md` | 所有插件类型（manifest、生命周期、路由、工作流） |
| `platform-plugin-guide.md` | `platform` 适配器实现层 |
| `plugins/overview.md` | 运行时加载与管理 API 概览 |

Workflow 与防覆写见同目录 `agents-project-conventions.md`。

## 独立仓库

每个 `Provider-*` 插件为独立 Git 仓库，含 `.github/workflows/ci.yml`。
