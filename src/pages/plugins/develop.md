---
layout: ../../layouts/DocLayout.astro
title: 插件开发工作流
---

<p class="page-meta">插件 · 开发者</p>

# 插件开发工作流

## 源码真源

在 `provider-plugin/Provider-*` 编辑，**不要**直接改 `provider-core/plugins/`。

## 推荐流程

1. 在 `provider-plugin/` 修改 adapter / util 代码
2. 本地加载验证（`python main.py`）
3. `overlay_plugins_to_self.py --dry-run` 审阅 diff
4. overlay 同步到 `provider-core/plugins/`
5. 更新 `docs-src/plugins/` 镜像文档

## 规范文档

编排仓 `docs-src/provider-guide-references/`：

| 文档 | 范围 |
|------|------|
| `plugin-guide.md` | manifest、生命周期、路由 |
| `platform-plugin-guide.md` | platform 适配器实现 |
| `agents-project-conventions.md` | 防覆写与 overlay 规则 |

## 独立仓库

每个插件含 `.github/workflows/ci.yml`，安装 `provider-sdk>=0.3.2` 后跑 pytest。
