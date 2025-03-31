---
title: Git commit 취소 및 되돌리기
description: 왜 그런 날 있잖아요. commit 잘못한 날.
tags: [알쓸코잡]
image: /알쓸코잡/banner-white.png
author: devhaaana
date: 2025-03-25
---
## 갑자기 commit 취소?

종종 에러가 존재하는 코드나 다른 파일을 commit 하는 실수가 있다.

(다른 repo에 올려야 하는 파일을 commit 한다던가..)

그런 경우 commit을 삭제해야 한다.

## reset

`reset` 명령어는 commit 기록 자체가 삭제되기 때문에 복구할 수 없다.

신중하게 사용할 것.

### Commit 내역 확인

```bash
git log
```

### Commit 삭제

#### 원하는 commit으로 되돌리기

```bash
git reset [--option] [돌아갈 commit hash]
```

- Option
  - `hard`: 돌아간 commit 이후의 history를 전부 삭제한다. (history가 완전히 삭제되기 때문에 복구할 수 없다. 신중하게 사용할 것)
  - `mixed` (default): 돌아간 commit 이후의 history를 stage 영역에서 삭제한다.
  - `soft`: 돌아간 commit 이후의 history를 stage 영역에 유지한다.

#### 최근 한 개의 commit 삭제

```bash
git reset [--option] HEAD^
```

#### 여러 개의 commit 삭제

```bash
git reset [--option] HEAD~[개수]
```

### 변경 사항 원격 저장소에 반영하기

```bash
git push origin [branch 이름]
```

- `push` 할 때 오류가 발생할 수 있다. 강제로 push 한다.

  사실 `-f`는 함부로 사용하면 안된다. 협업 repo의 경우 다른 개발자의 작업을 날릴 수 있다.

```bash
git push -f origin [branch 이름]
```

## revert

`revert` 명령어는 revert한 기록도 commit history에 남는다.

### Commit log 확인

```bash
git log
```

### Commit 되돌리기

```bash
git revert [--option] [돌아갈 commit hash]
```
