---
sidebar_position: 5
title: Customising your install
---

# Customising your install

## Desktop wallpaper

Nexbox ships six wallpapers at `/usr/share/backgrounds/nexbox/`. Right-click the desktop and choose **Desktop Settings** to switch.

## Change hostname

```bash
sudo hostnamectl set-hostname <your-new-hostname>
```

## Set default terminal

```bash
sudo update-alternatives --config x-terminal-emulator
```

## Extend the tool catalog

The catalog is plain Bash at `/etc/nexbox/catalog.sh`. Add a new pack:

```bash
sudo nano /etc/nexbox/catalog.sh

# Add an entry following the existing pack pattern:
PACKS[mypack]="My custom pack"
PACK_DESC[mypack]="What this pack does"
PACK_SIZE[mypack]="~XXX MB"
PACK_APTS[mypack]="package1 package2 package3"
PACK_PIPX[mypack]="pip-package1 pip-package2"
```

The new pack is immediately available:

```bash
nexbox-tools install --pack mypack
```
