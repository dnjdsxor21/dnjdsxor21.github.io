---
title:  "[Github Markdown] 깃허브 마크다운 문법"
excerpt: ""

categories:
  - Blog
tags:
  - [github, blog, markdown, latex]

toc: true
toc_sticky: true
toc_label: "Contents"
 
date: 2023-04-07
last_modified_at: 2023-04-07
---
## What is Markdown
> Markdown is a lightweight markup language that you can use to add formatting elements to plaintext documents.  

<small>
Markdown은 문서를 작성하는 하나의 언어입니다.<br>
`github`,`notion`,`tistory` 등등 다양한 페이지에서 지원하기 때문에 편리하게 작성이 가능합니다.<br>
~~네이버 블로그를 못쓰겠는 이유~~</smalL>

### Caution
<small>
:key: jekyll 블로그에서 작동하지 않는 문법들이 있다. <br>
`이모지`와 `수식작성` 기능은 자주 쓰기 때문에, 따로 Plug-in을 추가해서 해결했다.</small>
> `jekyll blog` uses `kramdown` as a default markdown converter from 2.0+. <br>And It doesn't support the table cell ...  
<small><https://stackoverflow.com/questions/26844701/lists-in-markdown-table-with-jekyll></small>

## Basics

### Header
**글의 제목**  
<small>제목들은 ***메뉴바***에 자동으로 등록된다</small>
```cpp 
# h1
## h2
### h3
#### h4
##### h5
###### h6
```
<small>특히 minimal-mistakes에서는 h2는 구분선을 포함하고 있다.  </small>

### Paragraphs
문단을 나누기 위해서는 엔터를 두번 사용하면 된다.  

### Linebreak
**줄바꿈**이 자동으로 되지 않아서 개인적으로 불편했다.
1. 공백 2개 + 엔터
2. HTML의 `<br>`태그

<small>둘 중에 골라서 사용 할 수 있다. </small>

```python
hello1  
hello2<br>
hello3
```  

hello1  
hello2<br>
hello3  

### Quotes

```python
> 인용하는 글입니다.
>
> 인용하는 글입니다.
>
>> 인용 들여쓰기
```

> 인용하는 글입니다.
>
> 인용하는 글입니다.
>
>> 인용 들여쓰기


### List

**unordered list** <br>

```python
- list1
- list2
  - list3
```

- list1
- list2
  - list3

**ordered list**<br>
```python
1. list1
2. list2
3. list3
```  

1. list1
2. list2
3. list3


### Text Emphasis
**bold**

```python
**텍스트 강조**하기
```  

**텍스트 강조**하기  

**italic**
```python
*기울여* 쓰기
```  

*기울여* 쓰기  

**underline**
```python
<u>밑줄</u>긋기
```

<u>밑줄</u>긋기  

**line-through
```python
~~취소선~~긋기
```

~~취소선~~긋기  

### Horizontal Rule
구분선은 dash(`-`) 3번으로 그린다.  

```python
up

---

down
```

up

---

down

## Code:pushpin:
**Code blocks**<br>
backticks(\`)를 사용한다. <small><b>Tab키 위에있음</b></small>

```python
# ```python
# import numpy as np
# x = np.array([1,2,3])
# ```

import numpy as np
x = np.array([1,2,3])
```

**Inline code blocks**<br>
```python
`Inline code block`입니다.
```
`Inline code block`입니다.


## Links:pushpin:
**Link**<br>
\[링크설명](https://www.example.com) 과 같이 작성한다.
```python
제 [블로그](https://dnjdsxor21.github.io)로 놀러오세요!
```
제 [블로그](https://dnjdsxor21.github.io)로 놀러오세요!

**URL and Email**

```python
<https://dnjdsxor21.github.io>
<fake@example.com>
```
<https://dnjdsxor21.github.io>  
<fake@example.com>

## Images
`![이미지설명](이미지 링크)` 처럼 작성 가능.  
*이때 이미지 링크는 `local path` or `URL` 모두 가능한듯?*  
![고양이](https://i.pinimg.com/564x/2d/cf/63/2dcf63c23e359dd5fec6ced32d4d8805.jpg)

**Linking Images**<br>
이미지에 링크까지 걸 수 있다.
`[![이미지설명](이미지 링크)](링크)`

**Escaping Characters**<br>
backslash(\\)를 사용하여, 마크다운 문법이 적용되지 않은 **문자 그대로**를 보여준다.

```python
\## h2  
\<https://dnjdsxor21.github.io>  
```
\## h2  
\<https://dnjdsxor21.github.io>  

## HTML 
밑줄을 칠 때 사용한 `<u>text</u>` 처럼 HTML태그를 안다면, 자유롭게 사용 가능한듯 하다.  
<smalL>~~나는 잘 모름~~</small>
```python
<a href='#'>맨위로 이동하기</a><br>
<small> 작은 텍스트 </small>
```
<a href='#'>맨위로 이동하기</a><br>
<small> 작은 텍스트 </small>


## Tables~~(jekyll[X])~~
<small>`|`와 `-`를 조합하여, 간단한 테이블을 작성할 수 있다.  
`-`의 갯수는 3개이상 자유롭게 작성하면 되며,  
`:---`는 좌측정렬, `:---:`는 중앙정렬, `---:`는 우측정렬이다.  </small>

```python
| Tables  |     Are     |  Cool   |
|:--------|:-----------:|--------:|
| col1 is | left-aligned| $1600   |
| col2 is |   centered  | $12     |
| col3 is |right-aligned| $1      |
```

## Checkbox~~(jekyll blog[X])~~
<small>체크박스는 `[ ]`, `[x]`로 구현 가능하다.</small>

```python
[x] Update the website
[  ] Read a [paper](https://arxiv.org/abs/1706.03762)
```
[x] Update the website  
[ ] Read a [paper](https://arxiv.org/abs/1706.03762)

## Emoji :pushpin::+1::honeybee:
<small>
Markdown 문법은 emoji를 지원합니다.  
**<u>jekyll기반의 블로그에서는 emoji가 작동하지 않습니다.(minimal mistakes포함)</u>**  
**다음과 같은 설정을 추가합니다.**</small>

```python
# 1. Gemfile에 아래 문구를 추가
gem 'jemoji'
```

```python
# 2. _config.yml의 plugins부분에 jemoji를 추가
plugins:
  - jemoji
```
설정을 마치면, `:`text`:`와 같은 형식으로 이모지를 작성

```python
> Gone camping! :tent: Be back soon.<br>Thats so funny! :joy:
```
> Gone camping! :tent: Be back soon.<br>Thats so funny! :joy:


<small>이모지 리스트는 여기서 확인할 수 있습니다.<br>
[emoji-cheat-sheet](https://gist.github.com/rxaviers/7360908)</small>

## Math:pushpin:

<small>github는 원래 수식을 작성하는 latex를 지원하지 않았지만<br>
22년 5월부터 latex를 지원한다고 한다.<br>
<https://github.blog/2022-05-19-math-support-in-markdown/></small>

<small> emoji와 마찬가지로 `Jekyll-based-blog`에서 LaTex가 적용되지 않기 때문에<br>
**아래 링크를 통해 해결했습니다.**<br>
[How to Add Latex Math to Jekyll-based Theme- Minimal Mistakes](https://shantoroy.com/jekyll/add-latex-math-to-jekyll-blog-minimal-mistakes/)</small>

> 한줄 전체에 적용되는 `$$ latex formula $$`  
인라인수식은`$ inline formula $`

```cpp
$$\frac{1}{n} \sum_{i=1}^{n} Q_{i} * K_{i}$$  
RNN의 hidden state는 $ h_t = f_{w} (h_{t-1}, x_{t}) $ 입니다.
```  

$$\frac{1}{n} \sum_{i=1}^{n} Q_{i} * K_{i}$$  
RNN의 hidden state는 $h_t = f_{w} (h_{t-1}, x_{t})$ 입니다.  

<small>**LaTex**문법을 모르면 아래와 같은 사이트의 도움을 받을 수 있다.</small>
- [LaTex Editor](http://www.hostmath.com/)
- [Latex 문법](https://ko.wikipedia.org/wiki/%EC%9C%84%ED%82%A4%EB%B0%B1%EA%B3%BC:TeX_%EB%AC%B8%EB%B2%95)

## Reference
- [Markdown guide](https://www.markdownguide.org/basic-syntax/)
- [Markdown tables generator](https://www.tablesgenerator.com/markdown_tables)
