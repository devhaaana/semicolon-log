---
title: tver-downloader
description: Python implementation for recording TVer programs outside of Japan.
tags: [python, tver, ffmpeg]
author: devhaaana
image: /tver-downloader/banner.svg
date: 2025-03-14
---
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE "License")
[![Release version](https://img.shields.io/github/release/devhaaana/tver-downloader.svg?label=Download&style=for-the-badge)](#release-files "Release Files")
[![Commits](https://img.shields.io/github/commit-activity/y/devhaaana/tver-downloader.svg?label=commits&style=for-the-badge)](https://github.com/devhaaana/tver-downloader/commits "Commit History")
[![Last Commit](https://img.shields.io/github/last-commit/devhaaana/tver-downloader.svg?label=&style=for-the-badge&display_timestamp=committer)](https://github.com/devhaaana/tver-downloader/pulse/monthly "Last Commit")

`tver-downloader` can record the [tver.jp](https://tver.jp/) programs outside of Japan.

## Index

- [Index](#index)
- [Architecture](#architecture)
- [Warning](#warning)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
- [Release Files](#release-files)

## Architecture

```
tver-downloader
├─ LICENSE
├─ README.md
├─ documents
│  ├─ README-JP.md
│  └─ README-KR.md
├─ images
│  ├─ banner.svg
│  └─ sample
│     └─ base-ui.png
├─ main.py
├─ requirements.txt
├─ tver.py
└─ utils.py
```

## Warning

**Please do not use this project for commercial use. Only for your personal, non-commercial use.**

## Technologies

- `Python` : 3.12
- `FFmpeg`

## Getting Started

### Installation

- You can install it **locally:**

  ```bash
  $ git clone https://github.com/devhaaana/tver-downloader.git
  $ cd tver-downloader
  ```
- Make sure you have **Python** installed on your system. Then, install the **required packages** by running the following command:

  ```bash
  $ conda create -n tver_env python=3.12
  $ conda activate tver_env
  $ pip install -r requirements.txt
  ```

### Usage

```bash
$ python main.py
```

![base-ui](../assets/images/archives/tver-downloader/base-ui.png)

## Release Files

| File                                                                                                      | Description                                                                 |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| [tver-downloader-1.0.0.zip](https://github.com/devhaaana/tver-downloader/archive/refs/tags/v1.0.0.zip)       | A*ZIP* file containing the full source code of tver-downloader v1.0.0.    |
| [tver-downloader-1.0.0.tar.gz](https://github.com/devhaaana/tver-downloader/archive/refs/tags/v1.0.0.tar.gz) | A*TAR.GZ* file containing the full source code of tver-downloader v1.0.0. |

<br />
