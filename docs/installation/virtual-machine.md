---
sidebar_position: 5
title: Run in a virtual machine
---

# Run Nexbox in a virtual machine

Nexbox runs cleanly inside VirtualBox, VMware, QEMU/KVM, and Hyper-V.

## Quick setup: VirtualBox

1. Create a new VM: Type Linux, Version Debian 64-bit, RAM 4096 MB, Disk 40 GB+.
2. Settings → Processor: 2+ vCPU. Display → Video Memory: 128 MB.
3. Storage: attach the Nexbox ISO to the optical drive.
4. Start the VM. Choose live boot or Install from the Nexbox boot menu.

## Quick setup: QEMU

```bash
sudo apt install -y qemu-system-x86 qemu-utils ovmf

qemu-system-x86_64 -m 4096 -smp 2 -enable-kvm \
  -cdrom nexbox-os-2026.1-live-amd64.iso \
  -boot d -vga virtio
```
