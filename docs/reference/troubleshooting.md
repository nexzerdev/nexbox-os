---
sidebar_position: 2
title: Troubleshooting
---

# Troubleshooting

## Black screen after Plymouth splash

From the boot menu, pick **Live Nexbox (failsafe)** instead of the default option.

## Wi-Fi does not work

Connect via Ethernet first, then install firmware:

```bash
sudo apt update
sudo apt install -y firmware-linux firmware-iwlwifi firmware-realtek
```

## Ventoy boots but Nexbox ISO will not start

- Always pick **Boot in normal mode** in Ventoy, not GRUB2 mode.
- Verify the SHA-256 of the ISO on the USB stick. A mismatch means the USB write failed.

## Terminal will not open after install

Switch to a virtual TTY with Ctrl+Alt+F2, log in, and run:

```bash
sudo apt install -y xfce4-terminal
```

## `claude` says authentication required

Claude Code is preinstalled but each user signs in with their own Anthropic account. Run `claude` and follow the on-screen prompt.

## A pack installation fails with apt errors

Run `sudo apt update` first. If a single package fails (often renamed or temporarily removed from the Kali repo), the rest of the pack still installs. Check **pkg.kali.org** for renames.
