---
layout: ../../layouts/DocLayout.astro
title: 市场与安装
---

<p class="page-meta">插件 · 用户</p>

# 市场与安装

## WebUI 安装

WebUI → 插件 → 输入 Git URL 安装，或从市场列表一键安装。

## 手动安装

克隆插件仓库到 `provider-core/plugins/Provider-*`，确保含 `_manifest.json`。

## 市场索引

默认源：[plugin-repo](https://github.com/Provider-Evo/plugin-repo) 的 `plugins.json` 与 `plugin_details.json`。每个 `Provider-*` 为独立 Git 仓库，索引仅含 id 与仓库 URL。

## 安全

- `accounts.py` 不得提交到 Git；运行时使用 `persist/{platform}/accounts.json`
- Coplan `config.toml` 含管理员密钥，仅保留 `config.toml.example` 在仓库中
