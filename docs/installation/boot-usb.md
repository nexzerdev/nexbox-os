---
sidebar_position: 3
title: Boot from USB (live mode)
---

# Boot Nexbox from a USB stick

Live mode lets you boot Nexbox into a working desktop without installing anything on your computer. Everything runs from RAM. Reboot to return to your original OS unchanged.

## Option 1: Ventoy (recommended)

Ventoy lets you store multiple ISOs on a single USB stick and pick which one to boot.

1. Install Ventoy on a USB stick from **ventoy.net**. This formats the USB stick.
2. Copy `nexbox-os-2026.1-live-amd64.iso` onto the Ventoy partition (drag and drop).
3. Plug the USB stick into the target machine.
4. Reboot, enter the boot menu (F12, F9, F10, F2, or Esc depending on manufacturer).
5. Select the USB stick. Ventoy lists every ISO. Select `nexbox-os-2026.1-live-amd64.iso`.
6. Pick **Boot in normal mode**. (GRUB2 mode does not work with live ISOs.)
7. Pick **Live Nexbox (amd64)** from the Nexbox boot menu.

## Option 2: Write ISO directly with dd

:::warning
**This wipes the USB stick entirely.** Triple-check the target device with `lsblk` before running.
:::

```bash
sudo dd bs=4M if=nexbox-os-2026.1-live-amd64.iso of=/dev/sdX status=progress oflag=sync
```

## Option 3: Rufus (Windows)

1. Download Rufus from **rufus.ie**.
2. Select your USB stick and the Nexbox ISO.
3. Partition scheme: GPT for UEFI, MBR for older BIOS machines.
4. Start. Choose **ISO Image mode** when prompted.
