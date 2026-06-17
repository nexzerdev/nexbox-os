---
sidebar_position: 1
title: Installing tools (nexbox-tools)
---

# Installing additional tools with nexbox-tools

`nexbox-tools` is a single command that installs whole tool categories ("packs") or individual tools on demand.

## Interactive menu (easiest)

```bash
nexbox-tools
```

Opens a checklist of available packs. Use SPACE to toggle, ENTER to confirm.

## Common commands

```bash
# Show help
nexbox-tools --help

# Install a single pack
nexbox-tools install --pack web

# Install several packs at once
nexbox-tools install --pack web,wireless,ad-extended

# Install everything (7-10 GB download)
nexbox-tools install --all

# Install a single apt package
nexbox-tools install gobuster

# Install a special target (custom installer)
nexbox-tools install docker
nexbox-tools install caido
nexbox-tools install vscode

# List available packs
nexbox-tools list-packs

# Show pack contents
nexbox-tools info web

# Search by keyword
nexbox-tools search bloodhound
```
