---
layout: ../../layouts/DocLayout.astro
title: 开发指南
---

<p class="page-meta">开发</p>

# 开发指南

## 分支策略

| 分支 | 用途 |
|------|------|
| `dev` | 日常开发，版本真源 |
| `main` | 稳定发布，从 dev 合并 |

禁止直接向 `main` 提交；PR 目标为 `dev`。

## 代码规范

- Python 3.8 兼容：不用 f-string（用 `.format()` / `%`）
- 日志：`loguru`，不用 `print()`
- 服务端：纯 aiohttp，非 ASGI

## 质量门禁

```bash
python achecker.py
pytest tests/provider-core -q
```

## 文档镜像

修改 `provider-core/src/` 后同步 `docs-src/` 对应 `INDEX.md` 与模块文档。
