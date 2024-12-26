+++
date = '2024-12-13T00:15:04+09:00'
draft = false
title = 'Github 블로그 with Hugo #1'
subtitle = 'hugo 설치와 세팅'
categories = ['blog']
tags = ['hugo','github']
series = ['gitblog']
thumbnail = '/img/posts/hugo-logo-square.png'
weight = 1
+++

![hugo-logo](/img/posts/hugo-logo-square.png)

> 애플 실리콘(M1) + Homebrew + vscode를 사용하여 진행했습니다.
>> paper 테마에 tailwind로 커스터마이징 했습니다.

## 1. Hugo를 선택한 이유

[Hugo](https://gohugo.io/) [^1]는 강력하고 빠른 정적 사이트 생성기로, 블로그 제작에 탁월한 선택입니다. **Go 언어**로 작성되어 빠른 빌드 속도를 자랑하며, 다양한 테마와 플러그인을 지원합니다.

**Hugo vs Jekyll 비교**

| 특징 | Hugo | Jekyll |
|------|------|--------|
| 프로그래밍 언어 | Go | Ruby |
| 빌드 속도 | 매우 빠름 | 상대적으로 느림 |
| 한글 레퍼런스 | 적음 | 많음 |
| 커뮤니티 | 성장 중 | 큰 커뮤니티 |
| 테마 | 다양함 | 매우 다양함 |

Hugo는 Jekyll에 비해 빌드 속도가 훨씬 빠르며, 문서화(Documentation)가 잘 되어있습니다.

## 2. Prerequisite

1. Git 설치
```bash
brew install git    # homebrew로 설치
git --version       # 설치 확인
```

2. Hugo 설치
```bash
brew install hugo   # 설치
hugo version        # 설치 확인
```
3. 원하는 Hugo 테마 선택(https://themes.gohugo.io/) [^2]  
> **저는 ['paper' 테마](https://github.com/nanxiaobei/hugo-paper) [^3]를 선택했습니다.(심플한 디자인, tailwind 기반)**  

***Windows설치법: <https://gohugo.io/installation/windows/>***

## 3. Github 레포지토리 생성

1. [Github](https://github.com)에 로그인
2. 새 레포지토리 생성 (이름: `username.github.io`)  
**`username`은 본인의 Github ID 입니다.**
3. 공개 설정 선택(public)

## 4. Hugo 프로젝트 생성

터미널에서 다음 명령어 실행:

```bash
hugo new site my-blog
cd my-blog
```

![hugo-new-site](/img/posts/hugo-new-site.png)

<details>
<summary>(option) `README.md`를 생성하고 소개글을 작성합니다.</summary>

> 아무말이나 작성해도 좋습니다.
</details>
<details>
<summary>(option) `.gitignore`를 생성하고 내용을 작성합니다.</summary>

> [hugo community](https://discourse.gohugo.io/t/the-best-gitignore-for-hugo/20283)를 참고했습니다.
```markdown
# .gitignore

# Generated files by hugo
/resources/_gen/
/assets/jsconfig.json
hugo_stats.json

# Executable may be added to repository
hugo.exe
hugo.darwin
hugo.linux

# Temporary lock file while building
/.hugo_build.lock

.DS_Store
node_modules
dist
tmp
```
</details>


## 5. Github 레포지토리와 연결

```bash
git init
git remote add origin https://github.com/username/username.github.io.git

git add .
git commit -m 'feat: create hugo new site'
git push -u origin main
```

## 6. 테마 불러오기 (submodule)

```bash
git submodule add https://github.com/nanxiaobei/hugo-paper themes/paper
```
`paper`테마를 submodule로 불러와서 `themes/paper/`로 저장합니다.

![hugo-submodule-theme](/img/posts/hugo-submodule-theme.png)

## 7. Configuration 설정

`hugo.toml` 파일을 열고 기본 설정 수정:

```toml
baseURL = "https://username.github.io/"
languageCode = "ko-KR"
title = "My Hugo Blog"
theme = "paper"  # theme-name
```

## 8. Post 작성해보기

```bash
hugo new posts/my-first-post.md
```

`content/` 폴더가 생성되었습니다.  
모든 게시글은 'content/' 폴더에서 작성합니다.  
생성된 마크다운 파일을 편집하여 내용 작성해봅니다.

![hugo-first-post](/img/posts/hugo-first-post.png)

제일 윗부분을 ['front-matter'](https://gohugo.io/content-management/front-matter/) [^4]라고 하며, 게시글의 메타데이터를 설정합니다.

- `date` : 글 작성 날짜
- `draft` : 초안 작성 중일 때 `true`, 배포를 원할때 `false`
- `title` : 글 제목

## 9. Github Actions 워크플로우 설정

- [x] ***[Hosting-on-github](https://gohugo.io/hosting-and-deployment/hosting-on-github/#procedure) [^5]의 Step5, Step6을 참고***하여 따라합니다.

1. [Step5](https://gohugo.io/hosting-and-deployment/hosting-on-github/#procedure) - hugo.yaml 생성
```bash
mkdir -p .github/workflows && touch .github/workflows/hugo.yaml
```
2. [Step6](https://gohugo.io/hosting-and-deployment/hosting-on-github/#procedure) - 내용 추가 & 저장  
*`HUGO_VERSION`를 최신 버전(0.140.0)으로 변경했습니다.*


## 10. 빌드와 테스트

1. Hugo로 사이트 빌드:

```bash
hugo
```
지금까지 수정한 모든 내용을 반영하여 `public/` 폴더를 생성합니다.  
`public/` : 블로그를 생성 할 때 참고하는 최종 결과물입니다.

2. Local환경에서 서버 실행:
```bash
hugo server -D
```
- `-D` 커맨드: draft를 포함하여 서버를 실행합니다.
- <http://localhost:1313/> 에서 블로그를 확인합니다.
- `Ctrl+C` 로 서버를 종료합니다.

***서버 실행 화면***

![hugo-server-first](/img/posts/hugo-server-first.png)


## 11. 배포
1. 배포를 원하는 게시글은 `draft = false`로 설정
2. 생성된 `public` 폴더의 내용을 Github에 푸시:

```bash
hugo
git add .
git commit -m "feat: my first post"
git push
```

이제 `https://username.github.io`에서 블로그를 확인할 수 있습니다.


이해가 되지 않는 부분은 [HUGO Documentation](https://gohugo.io/getting-started/quick-start/) [^6]를 확인해주세요.


[^1]: https://gohugo.io/
[^2]: https://themes.gohugo.io/
[^3]: https://github.com/nanxiaobei/hugo-paper
[^4]: https://gohugo.io/content-management/front-matter/
[^5]: https://gohugo.io/hosting-and-deployment/hosting-on-github/#procedure
[^6]: https://gohugo.io/getting-started/quick-start/