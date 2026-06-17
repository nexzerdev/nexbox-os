---
sidebar_position: 2
title: Verify the download
---

# Verify the download

After downloading, verify the ISO has not been corrupted or tampered with.

## Verify SHA-256 checksum

On Linux or macOS:

```bash
sha256sum nexbox-os-2026.1-live-amd64.iso
```

On Windows (PowerShell):

```powershell
Get-FileHash -Algorithm SHA256 nexbox-os-2026.1-live-amd64.iso
```

The output must match the published checksum:

```
54701f37040af78d9ff5623d1eaac8181e42ada4b45148231fdac73754539698
```

:::warning
**If the checksum does not match, re-download the ISO.** Do not boot a checksum-mismatch image.
:::

## Verify GPG signature

*Coming soon.* When available, the Nexzer signing key and verification instructions will be published on this page.
