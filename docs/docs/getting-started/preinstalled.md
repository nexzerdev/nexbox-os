---
sidebar_position: 3
title: What is preinstalled
---

# What is preinstalled

The Nexbox base image keeps things slim. Everything beyond this is installed on demand through `nexbox-tools`.

## Core operating system

- Linux kernel (latest Kali kernel at build time)
- Xfce desktop environment with Nexbox branding
- LightDM display manager (Nexbox themed)
- Plymouth boot splash (Nexbox)

## Top 10 offensive tools

- Nmap, Metasploit Framework, Burp Suite Community
- Wireshark, Aircrack-ng
- John the Ripper, Hydra
- sqlmap, Nikto, dirb

## Modern offensive baseline

- **Active Directory / Windows:** NetExec, Evil-WinRM, Impacket scripts, Certipy-AD
- **Web reconnaissance:** Feroxbuster, Nuclei, ffuf, Gobuster
- **Tunneling and pivoting:** Ligolo-ng, Chisel
- **C2:** Sliver

## Productivity and dev essentials

- Python 3, pip, pipx, virtualenv
- Node.js, npm, Git, curl, wget
- Vim, Nano, Tmux, jq, xclip, net-tools, dnsutils
- Flameshot (screenshots)

## AI development assistant

:::note
**Claude Code** by Anthropic is preinstalled at `/usr/bin/claude`. Run `claude` to start. Sign in with your Anthropic account on first use.
:::
