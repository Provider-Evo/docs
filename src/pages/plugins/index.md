---
layout: ../../layouts/DocLayout.astro
title: 插件概览
---

<p class="page-meta">插件 · 用户</p>

# 插件概览

## 插件类型

| 类型 | 说明 |
|------|------|
| `platform` | 上游平台适配器（如 Qwen、Ollama） |
| `fncall` | 工具调用协议（XML、ANTML 等） |
| `webui` | WebUI 增强主题与静态资源 |
| `coplan` | CodingPlan 策略组与市场 |

## 启用与禁用

- 启用：目录内存在 `_manifest.json`
- 禁用：重命名为 `_manifest.json.disabled`

## 容错加载

单插件加载失败仅记录日志，不阻断其他插件；启动末尾输出 `loaded=N failed=M inactive=K` 汇总。

## 热重载

修改 `plugins/` 下文件后，FileWatcher 触发单插件 `on_unload` → 清模块缓存 → `on_load`。
