---
layout: ../../layouts/DocLayout.astro
title: Manifest 规范
---

<p class="page-meta">插件 · 开发者</p>

# Manifest 规范

`_manifest.json` 为插件元数据真源，示例字段：

| 字段 | 说明 |
|------|------|
| `id` | 全局唯一插件 id |
| `version` | 语义化版本 |
| `plugin_type` | `platform` / `fncall` / `webui` / `coplan` |
| `dependencies` | 其他插件或 PyPI 包依赖 |

入口模块 `plugin.py` 必须提供 `create_plugin()` 工厂函数。

禁用插件时重命名 manifest 为 `_manifest.json.disabled`，运行时不会加载。
