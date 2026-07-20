---
layout: ../../layouts/DocLayout.astro
title: 测试与 CI
---

<p class="page-meta">开发</p>

# 测试与 CI

## provider-core

- CI：`.github/workflows/ci.yml`（black + pytest 冒烟）
- 测试：`tests/provider-core/`

## 插件

每个 `Provider-*` 独立仓含 `tests/test_plugin.py` manifest 冒烟；平台 adapter 需至少一个 MVP 测试。

## 本地 overlay 验证

```bash
python .claude/scripts/overlay_plugins_to_self.py --dry-run
```

审阅每一行后再 `--apply`。
