---
sidebar_position: 6
title: Updating Nexbox
---

# Updating Nexbox

Nexbox tracks Kali's rolling repositories.

## Update everything

```bash
sudo apt update
sudo apt full-upgrade -y
```

## Update nexbox-tools only

```bash
nexbox-tools update
```

## Major version upgrades

Major version upgrades are released as fresh ISOs. Download the new image and boot it. For installed systems, the rolling apt upgrade covers most changes. Periodic clean reinstalls are recommended once per year for the cleanest state.
