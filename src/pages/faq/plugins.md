---
layout: ../../layouts/DocLayout.astro
title: 插件排错
---

<p class="page-meta">常见问题</p>

# 插件排错

## 插件未加载

1. 检查 `_manifest.json` 是否存在且 JSON 合法
2. WebUI → 插件 → 查看失败原因
3. API：`GET /v1/admin/plugins/status`

## 修改未生效

确认编辑的是 `provider-plugin/` 而非 overlay 副本；修改后需 overlay 或触发热重载。

## accounts.py

不得提交到 Git；运行时使用 `persist/{platform}/accounts.json`。

## overlay 覆盖了本地修改

在 `provider-core/plugins/` 的手改会被下次 overlay 覆盖；始终在 `provider-plugin/` 改源码。
