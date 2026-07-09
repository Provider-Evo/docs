# 插件系统

## 目录结构

每个插件包含 `_manifest.json`、`plugin.py`，平台插件另有 `accounts.py`（不提交 GitHub）。

## 默认启用平台

`chatmoe`, `edgetts`, `gtts`, `ollama`, `openaifm`, `qwen`, `zen`

## Zen 平台

`USE_PROXY_POOL=True` 使用 opencode 代理池；`False` 使用 API Key。

## 管理 API

- `GET /v1/admin/plugins`
- `GET /v1/admin/plugins/status`
- `POST /v1/admin/plugins/install`

## Coplan

- `GET /v1/coplan/status`
- `GET /coplan` 管理界面
