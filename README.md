<div align="center">

![Light-Theme](./assets/images/sample/base-ui-light.png)
![Dark-Theme](./assets/images/sample/base-ui-dark.png)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE "License")
[![Commits](https://img.shields.io/github/commit-activity/y/devhaaana/semicolon-log.svg?label=commits&style=for-the-badge)](https://github.com/devhaaana/radipy/commits "Commit History")
[![Last Commit](https://img.shields.io/github/last-commit/devhaaana/semicolon-log.svg?label=&style=for-the-badge&display_timestamp=committer)](https://github.com/devhaaana/radipy/pulse/monthly "Last Commit")

</div>

### 태그 추가하기

- `_tags` 디렉토리에 사용할 새 태그 생성:

```yaml
---
title: 웹 사이트에서 표시될 이름
identifier: post에서 사용될 식별자 (소문자, 띄어쓰기 대신 하이픈 사용)
description: 태그 페이지에 표시될 설명
---
```

### 아카이브 추가하기

`_archives` 디렉토리에 `제목.md` 파일 생성:

```yaml
---
title: 웹사이트에서 표시될 프로젝트 이름
description: 프로젝트 설명
tags: [앞서 작성한 태그의 identifier, 여러개 가능]
author: 작성자의 이름
image: <assets/images/archives/>내에 위치한 이미지 파일의 이름(확장자 포함)
date: 프로젝트 시행 날짜(yyyy-mm-dd)
---
프로젝트 내용
```

### 포스트 추가하기

```yaml
---
title: 웹사이트에서 표시될 이름
tags: [앞서 작성한 태그의 identifier, 여러개 가능]
author: 작성자의 이름
date: 작성 날짜 (yyyy-mm-dd)
---
포스트 내용
```

### 포트폴리오 추가하기

- `_data/portfolio.yml` 파일에 아래의 구문 추가:

```yaml
- title: 웹사이트에서 표시될 이름
  description: 이름 하단에 들어갈 설명
  image: <assets/images/portfolio/>내에 위치한 이미지 파일의 이름(확장자 포함)
```

### TIL 추가하기

`_til` 디렉토리에 `yyyy-mm-dd-제목.md` 파일 생성:

```yaml
---
title: 웹사이트에서 표시될 이름
tags: [앞서 작성한 태그의 identifier, 여러개 가능]
author: 작성자의 이름
date: 작성 날짜 (yyyy-mm-dd)
---
공부한 내용
```

### TECHLOG 추가하기

`_techlog` 디렉토리에 `yyyy-mm-dd-제목.md` 파일 생성:

```yaml
---
title: 웹사이트에서 표시될 이름
description: 이름 하단에 들어갈 설명
tags: [앞서 작성한 태그의 identifier, 여러개 가능]
image: <assets/images/techlog/>내에 위치한 이미지 파일의 이름(확장자 포함)
author: 작성자의 이름
date: 작성 날짜 (yyyy-mm-dd)
---
공부한 내용
```
