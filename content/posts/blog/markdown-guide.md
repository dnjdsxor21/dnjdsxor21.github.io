+++
title = "[Blog] Markdown Syntax 마크다운 가이드"
categories = ["Blog"]
tags = ["Blog", "Markdown"] 
date = '2024-12-12'
draft = false
weight = 1
+++

## Introduction
> Markdown is a lightweight markup language that you can use to add formatting elements to plaintext documents.

Markdown은 문서를 작성하는 하나의 언어입니다.<br>

`github`,`notion`,`tistory`, `velog` 등등 다양한 서비스에서 지원하기 때문에 편리하게 작성이 가능합니다.


## LEVEL 1 :pushpin:

## 헤더 (Headers)

```markdown
# h1
## h2
### h3
#### h4
##### h5
###### h6
```

# h1
## h2
### h3
#### h4
##### h5
###### h6

헤더는 '#' 기호를 사용하여 표시합니다. '#'의 개수에 따라 h1부터 h6까지 다양한 크기의 헤더를 만들 수 있습니다. **h1은 가장 큰 헤더이며, h6로 갈수록 크기가 작아집니다.**

## 줄바꿈 (Line Breaks)

```markdown
첫 번째 줄입니다.
두 번째 줄입니다.  

세 번째 줄입니다.<br>

네 번째 줄입니다.
```

마크다운에서 줄바꿈을 하려면 문장 끝에서  
1. 스페이스를 두 번 입력하거나
2. `<br>`를 입력합니다.

## 인용구 (Quotes)

```markdown
> 이것은 인용구입니다.
>> 중첩된 인용구도 가능합니다.
```

> 이것은 인용구입니다.
>> 중첩된 인용구도 가능합니다.

'>' 기호를 사용하여 인용구를 만들 수 있습니다. '>'를 중첩하여 사용하면 인용구 안에 인용구를 넣을 수 있습니다.

## 목록 (Lists)

```markdown
- 순서 없는 목록 1
- 순서 없는 목록 2
  - 중첩된 목록

1. 순서 있는 목록 1
2. 순서 있는 목록 2
   1. 중첩된 순서 목록
```

- 순서 없는 목록 1
- 순서 없는 목록 2
  - 중첩된 목록

1. 순서 있는 목록 1
2. 순서 있는 목록 2
   1. 중첩된 순서 목록

'-', '+', '*'를 사용하여 순서 없는 목록을, 숫자와 점을 사용하여 순서 있는 목록을 만들 수 있습니다. 들여쓰기를 통해 중첩된 목록을 만들 수 있습니다.

## 텍스트 강조 (Text Emphasis)

```markdown
*이탤릭체*
**볼드체**
***이탤릭 볼드체***
~~취소선~~
```

`*` 또는 `_`를 사용하여 *이탤릭체*를,  
`**` 또는 `__`를 사용하여 **볼드체**를 만들 수 있습니다.  
`***`를 사용하면 ***이탤릭 볼드체***가 됩니다.  
`~~`를 사용하면 ~~취소선~~을 그을 수 있습니다.

## 수평선 (Horizontal Rule)

```markdown
---
***
___
```

'-', '*', '_' 중 하나를 3개 이상 연속해서 사용하면 수평선을 만들 수 있습니다. 이는 문단을 구분하거나 섹션을 나누는 데 유용합니다.

---

## LEVEL 2 :pushpin:

## 코드 (Code)

### 코드 블록 (Code Block)

```markdown
\```python
  def hello_world():
      print("Hello, World!")
\```
```

코드 블록은 **백틱(`) 세 개**로 시작하고 끝냅니다. 언어를 지정하면 문법 강조가 적용됩니다.

### 인라인 코드 (Inline Code)

```markdown
이것은 `인라인 코드` 예시입니다.
```

인라인 코드는 **백틱(`) 한 개**로 감싸 표현합니다. 문장 중간에 코드를 넣을 때 사용합니다.

## 링크 (Links)

```markdown
[GitHub](https://github.com)
[마크다운 가이드](https://www.markdownguide.org/basic-syntax/)

[markdown-guide]: https://www.markdownguide.org
```

[마크다운 가이드](https://www.markdownguide.org/basic-syntax/)

대괄호 안에 링크 텍스트를, 소괄호 안에 URL을 넣어 링크를 만듭니다.  
참조 링크를 사용하면 문서 끝에 URL을 모아둘 수 있습니다.

## 이미지 (Image)

```markdown
![대체 텍스트](https://example.com/image.jpg)
![로고][logo]

[logo]: https://example.com/logo.png
```

링크 문법 앞에 느낌표(!)를 붙여 이미지를 삽입합니다. 대체 텍스트는 이미지를 표시할 수 없을 때 나타납니다.

## 이모지 (Emoji)

```markdown
:smile: 안녕하세요!  
:heart: Hugo로 블로그를 만들어보세요.  
:rocket: 시작하기  
```

:smile: 안녕하세요!  
:heart: Hugo로 블로그를 만들어보세요.  
:rocket: 시작하기  

Hugo는 기본적으로 이모지를 지원합니다. 별도의 플러그인 설치 없이 이모지를 사용할 수 있습니다.
Hugo에서 이모지를 활성화하려면 config.toml 파일에 다음 설정을 추가하세요:

```markdown
enableEmoji = true
```

이 설정을 추가하면 마크다운 파일에서 :emoji_name: 형식으로 이모지를 사용할 수 있습니다.

[***>> 더 많은 이모지 보기 <<***](https://gist.github.com/rxaviers/7360908)


## HTML

```markdown
마크다운에서 <strong>HTML</strong>을 직접 사용할 수 있습니다.

<table>
  <tr>
    <th>열 1</th>
    <th>열 2</th>
  </tr>
  <tr>
    <td>행 1, 열 1</td>
    <td>행 1, 열 2</td>
  </tr>
</table>
```

마크다운은 HTML을 지원하므로, 복잡한 구조나 마크다운으로 표현하기 어려운 요소는 HTML로 직접 작성할 수 있습니다.

## LEVEL 3 :pushpin:

## 테이블 (Tables)

```markdown
| 제목 1 | 제목 2 | 제목 3 |
|--------|--------|--------|
| 내용 1 | 내용 2 | 내용 3 |
| 행 2   | 열 2   | 열 3   |
```

| 제목 1 | 제목 2 | 제목 3 |
|--------|--------|--------|
| 내용 1 | 내용 2 | 내용 3 |
| 행 2   | 열 2   | 열 3   |

테이블은 정보를 구조화하여 표현할 때 유용합니다. 열을 구분할 때는 파이프(|)를 사용하고, 헤더와 내용을 구분할 때는 대시(-)를 사용합니다.

## 작업 목록 (Task Lists)

```markdown
- [x] 완료된 작업
- [ ] 미완료 작업
- [ ] 또 다른 작업
```

- [x] 완료된 작업
- [ ] 미완료 작업
- [ ] 또 다른 작업

작업 목록은 할 일 목록이나 프로젝트 진행 상황을 표시할 때 유용합니다. 대괄호 안에 x를 넣으면 완료된 작업으로 표시됩니다.

## 각주 (Footnotes)

```markdown
여기에 각주가 필요합니다.[^1]

[^1]: 이것이 각주의 내용입니다.
```

여기에 각주가 필요합니다.[^1]

[^1]: 이것이 각주의 내용입니다.

각주는 본문의 추가 설명이나 참조를 페이지 하단에 표시할 때 사용합니다. 본문에서 각주를 참조하고, 문서 하단에 각주의 내용을 작성합니다.

## 접기/펼치기 (Details)

```markdown
<details>
<summary>더 보기</summary>

여기에 숨겨진 내용을 작성합니다.
</details>
```

<details>
<summary>더 보기</summary>

여기에 숨겨진 내용을 작성합니다.
</details>

긴 내용을 숨기거나 선택적으로 보여줄 때 유용합니다. HTML의 `<details>` 태그를 이용합니다.

## 수식

KaTex를 사용합니다.


## Reference
- [Markdown guide](https://www.markdownguide.org/basic-syntax/)
- [Markdown tables generator](https://www.tablesgenerator.com/markdown_tables)
