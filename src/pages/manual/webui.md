---
layout: ../../layouts/DocLayout.astro
title: WebUI 概览
---

<p class="page-meta">用户手册 · 入门</p>

# WebUI 概览

内置 WebUI 与本文档站共用同一套设计令牌（`--accent`、`--panel`、`--border` 等）。

## 主要面板

| 面板 | 功能 |
|------|------|
| 插件 | 市场安装、启用/禁用、配置 schema |
| 统计 | 请求日志、调度与用量 |
| 终端 | 多标签 SSH / 本地 shell |
| 配置 | `main_config.toml` 可视化编辑 |

## 主题

WebUI 与文档站均读取 `localStorage` 键 `provider.webui.settings` 中的 `theme`（`light` / `dark` / `auto`），切换一处即可在另一处同步。

## API

WebUI 与 OpenAI/Anthropic 兼容 API 共用同一进程，默认端口 **1337**。
