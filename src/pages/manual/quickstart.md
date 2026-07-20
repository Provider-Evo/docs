---
layout: ../../layouts/DocLayout.astro
title: 快速开始
description: Provider-Evo 安装与启动
---

<p class="page-meta">用户手册 · 入门</p>

# 快速开始

Provider-Evo（provider-core）是统一 AI 模型网关，通过插件适配各上游平台。

## 环境要求

- Python 3.8+
- Windows / Linux（生产环境推荐 Linux）

## 安装

```bash
cd provider-core
pip install -r requirements.txt
# 或显式指定 PyPI 契约包：
# pip install provider-guide>=2.2.293 echotools>=2.3.0 provider-sdk>=0.3.2
```

## 启动

```bash
python main.py
```

默认监听 `http://127.0.0.1:1337/`。健康检查：`GET /health`。

## WebUI

浏览器打开根路径 `/`，侧栏进入「插件」面板，可安装、启用、配置插件。

## 下一步

- [工作区结构](workspace/)
- [插件概览](../../plugins/)
- [开发指南](../../develop/)
