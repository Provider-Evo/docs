---
layout: ../layouts/Base.astro
title: Provider-Evo 文档
---

# Provider-Evo 文档

Provider-Evo 是 provider-v2 的插件化演进版本。

## 快速开始

```bash
pip install -r requirements.txt
# 或显式指定 PyPI 契约包：
# pip install provider-guide>=2.2.293 echotools>=2.3.0 provider-sdk>=0.3.3
python main.py
```

WebUI 插件面板：`http://127.0.0.1:1337/` → 侧栏「插件」。

## 插件类型

| 类型 | 说明 |
|------|------|
| platform | 平台适配器 |
| fncall | 扩展工具协议 |
| webui | WebUI 风格增强 |
| coplan | CodingPlan / 策略组 |

## 本地目录

- 核心网关：`provider-core`（本仓库同级 `provider-core`）
- 插件：`plugins/Provider-*`
- 市场索引：`plugin-repo/plugins.json` + `plugin_details.json`
- SDK：`provider-sdk`
- 协议基座：`echotools`（仅 entml）

## 热重载

修改 `plugins/` 下文件后，FileWatcher 会触发单插件 `on_unload` → 清模块缓存 → `on_load`。

发版历史见 [发版](release/)（以 **dev** 分支 `2.2.xxx` 为准；当前 **2.2.297**，`main` 合并后追平）。
