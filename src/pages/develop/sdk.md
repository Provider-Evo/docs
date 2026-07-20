---
layout: ../../layouts/DocLayout.astro
title: SDK 与契约
---

<p class="page-meta">开发</p>

# SDK 与契约

## PyPI 包

| 包 | 角色 |
|----|------|
| `provider-guide` | provider-core 核心（包名，非 provider-core） |
| `provider-sdk` | 插件契约与加载器（>=0.3.2） |
| `echotools` | 共享基础设施（>=2.3.0） |

## 插件契约

平台适配器实现 `provider-sdk` 定义的 adapter 接口；manifest 由 SDK 校验。

## 配置

仅 `config/main_config.toml`；模板 `template/template_config.toml`。
