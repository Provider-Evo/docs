# 插件

## 安装

WebUI → 插件 → Git URL 安装，或手动克隆到 `plugins/`。

## 市场

默认源：`nichengfuben/plugin-repo` 的 `plugins.json` 与 `plugin_details.json`。

## 安全

- `accounts.py` 不得提交到 Git
- Coplan `config.toml` 含管理员密钥，仅保留 `config.toml.example` 在仓库中

## 独立仓库

每个 `Provider-*` 插件为独立 Git 仓库，含 `.github/workflows/ci.yml`。
