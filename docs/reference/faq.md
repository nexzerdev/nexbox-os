---
sidebar_position: 3
title: Frequently asked questions
---

# Frequently asked questions

## Is Nexbox just rebranded Kali?

No. Nexbox is built on Kali's package base but ships a different curated tool set, a different on-demand install tool (`nexbox-tools`), Nexzer branding throughout, and Claude Code preinstalled. The user experience is distinct from stock Kali.

## Is Nexbox free?

Yes. Nexbox OS is free and open. Kali is free, and the tools we add are themselves free / open-source. The only commercial product mentioned in Nexbox documentation is Burp Suite Professional, and Nexbox does not bundle it.

## Can I use Nexbox for professional pentesting work?

Yes, for authorised engagements. By using Nexbox you agree to operate within applicable laws and the engagement scope you have authorisation for.

## Does Nexbox support ARM (Raspberry Pi etc.)?

Not yet. v2026.1 is amd64 only. ARM support is on the roadmap.

## Will my Kali tutorials work on Nexbox?

Yes. Nexbox shares Kali's package base, command-line tools, and file system layout. The user account name may differ (`nexbox` instead of `kali`), but sudo and paths under `/usr/share` are identical.

## Does Nexbox include the full Kali tool catalogue?

By default, no. Use `nexbox-tools` to install whichever tool categories you need, or run `nexbox-tools install --all` to install everything.

## How big is the install?

Base ISO: 3.8 GB download. Base install on disk: ~10 GB. With all 15 packs: ~18–20 GB. Plus your own files and workspace data.
