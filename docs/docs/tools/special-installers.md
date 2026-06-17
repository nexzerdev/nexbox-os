---
sidebar_position: 3
title: Single-tool special installers
---

# Single-tool special installers

For tools that need a custom installation method (third-party repos, AppImages, npm), Nexbox provides single-name installers.

| Command | Installs | Notes |
|---|---|---|
| `nexbox-tools install docker` | Docker CE | From Docker's official repo. Log out after install for group to take effect. |
| `nexbox-tools install caido` | Caido web proxy | Modern Burp Suite alternative. Installed to `/opt/caido`. |
| `nexbox-tools install vscode` | VS Code | From Microsoft's official repo. |
| `nexbox-tools install obsidian` | Obsidian | Latest AppImage to `/opt/obsidian`. |
| `nexbox-tools install claude-code` | Claude Code | Preinstalled in v2026.1. Use to reinstall if needed. |
| `nexbox-tools install golang-go` | Go toolchain | Required for Stratus Red Team, custom kerbrute builds. |
| `nexbox-tools install build-essential` | gcc, make, headers | Required when compiling exploits from source. |
