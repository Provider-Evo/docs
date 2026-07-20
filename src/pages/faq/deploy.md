---
layout: ../../layouts/DocLayout.astro
title: 部署与启动
---

<p class="page-meta">常见问题</p>

# 部署与启动

## 端口被占用

`main_config.toml` 中 `startup_force_kill_port = true` 可在启动时释放端口（Windows 需注意权限）。

## 服务无法访问

确认进程监听 `0.0.0.0:1337` 或配置的 `host`/`port`；防火墙放行入站。

## fast_restart

默认启用快速进程重启；配置项见 `template/template_config.toml` 中 `fast_restart`。

## 依赖版本

确保 `provider-sdk>=0.3.2` 与 `echotools>=2.3.0` 与 lockfile 一致。
