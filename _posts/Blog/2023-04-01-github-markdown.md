---
title:  "[Github Markdown] 깃허브 마크다운 문법"
excerpt: ""

categories:
  - Blog
tags:
  - [github, blog, markdown, latex]

toc: true
toc_sticky: true
toc_label: "Content"
 
date: 2023-04-01
last_modified_at: 2023-04-07
---
## Header :star: :star: :star:
**글의 제목**  
제목들은 <u>Contents</u> 에 자동으로 등록된다  
```cpp 
# h1
## h2
### h3
#### h4
##### h5
###### h6
```
특히 minimal-mistakes에서는 h2에 구분선을 포함하고 있다.  

## Paragraphs
문단을 나누기 위해서는 엔터를 두번 사용하면 된다.  

## Linebreak
**줄바꿈**이 자동으로 되지 않아서 개인적으로 불편했다.
1. 공백 2개 + 엔터
2. HTML의 <br>태그
둘 중에 골라서 사용 할 수 있다.
```python
hello1  
hello2<br>
hello3
```  
hello1  
hello2<br>
hello3  

## Quotes
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


## List :star: :star: :star: :star:
### ul
```python
- list1
- list2
  - list3
```
- list1
- list2
  - list3
#### ol
```python
1. list1
2. list2
3. list3
```  
1. list1
2. list2
3. list3


## Text Emphasis :star: :star:
#### bold
```python
**텍스트 강조**하기
```  
**텍스트 강조**하기  
#### italic
```python
*기울여* 쓰기
```  
*기울여* 쓰기  
#### underline
```python
<u>밑줄</u>긋기
```
<u>밑줄</u>긋기  

#### line-throgh  
```python
~~취소선~~긋기
```
~~취소선~~긋기  

#### Highlighting
```python
They are ==very important.==
```
They are ==very important.==  

## Code :star: :star::star: :star: :star:
#### Code blocks
backticks(`)를 사용한다. <b>Tab키 위에있음</b>
```python
import numpy as np
x = np.array([1,2,3])
```
\```python
import numpy as np
x = np.array([1,2,3])
```
#### Inline Code Block
```python
`Inline code block`
```
`Inline code block`

## Horizontal Rule
구분선이다.
dash를 3번 쓴다.  
\---
up
---
down


## Links :star: :star: :star: :star:
#### link
\[링크설명](https://www.example.com) 과 같이 작성한다.
```python
제 [블로그](https://dnjdsxor21.github.io)로 놀러오세요!
```
제 [블로그](https://dnjdsxor21.github.io)로 놀러오세요!

#### URL and Email
```python
<https://dnjdsxor21.github.io>
<fake@example.com>
```
<https://dnjdsxor21.github.io>
<fake@example.com>

## Images
\![이미지설명](이미지 링크) 처럼 작성 가능.  
이때 이미지 링크는 `local path` or `URL` 모두 가능한듯?  
![고양이](https://i.pinimg.com/564x/2d/cf/63/2dcf63c23e359dd5fec6ced32d4d8805.jpg)

#### Linking Images
이미지에 링크까지 걸 수 있다.
\[![이미지설명](이미지 링크)](링크)  

## Escaping Characters
backslash(\)를 사용하여, 마크다운 문법이 적용되지 않도록 문자 그대로를 보여준다.
```python
\## h2  
\<https://dnjdsxor21.github.io>  
```
\## h2  
\<https://dnjdsxor21.github.io>  

## HTML 
밑줄을 칠 때 사용한 `<u></u>` 처럼 HTML태그를 안다면, 자유롭게 사용 가능한듯 하다.  
~~나는 잘 모름~~
```python
<a href='#'>맨위로 이동하기</a>
```
<a href='#'>맨위로 이동하기</a>

## Tables
`|`와 `-`를 조합하여, 간단한 테이블을 작성할 수 있다.  
`-`의 갯수는 3개이상 자유롭게 작성하면 되며,  
`:---`는 좌측정렬, `:---:`는 중앙정렬, `---:`는 우측정렬이다.  

```python
| Tables  |     Are     |  Cool   |
|:--------|:-----------:|--------:|
| col1 is | left-aligned| $1600   |
| col2 is |   centered  | $12     |
| col3 is |right-aligned| $1      |
```
| Tables  |     Are     |  Cool   |
|:--------|:-----------:|--------:|
| col1 is | left-aligned| $1600   |
| col2 is |   centered  | $12     |
| col3 is |right-aligned| $1      |

## Checkbox
체크박스는 `[ ]`, `[x]`로 구현 가능하다.
```python
[x] Update the website
[ ] Read a [paper](https://arxiv.org/abs/1706.03762)
```
[x] Update the website
[ ] Read a [paper](https://arxiv.org/abs/1706.03762)

## Emoji :star: :star: :star:
매우 중요한 이모지 작성법
```python
>Gone camping! :tent: Be back soon.
>
>Thats so funny! :joy:
```
> Gone camping! :tent: Be back soon.
>
> Thats so funny! :joy:

이모지 리스트는 여기서 확인할 수 있습니다.
[list of emoji shortcodes](https://gist.github.com/rxaviers/7360908)

## Math support(latex) :star: :star: :star: :star: :star: 
github는 원래 수식을 작성하는 latex를 지원하지 않았다.  
22년 5월부터 latex를 지원한다고 한다. <https://github.blog/2022-05-19-math-support-in-markdown/>
> 한줄 전체에 적용되는 \$$ latex formula $$
>
> 인라인수식은 \$ inline formula $  

```cpp
$$\frac{1}{n} \sum_{i=1}^{n} Q_{i} * K_{i}$$  
- RNN의 hidden state는 $ h_t = f_{w} (h_{t-1}, x_{t}) $ 입니다.
```  
$\frac{1}{n} \sum_{i=1}^{n} Q_{i} * K_{i}$$  
RNN의 hidden state는 $ h_t = f_{w} (h_{t-1}, x_{t}) $ 입니다.  

==LaTex==문법을 모르면 아래와 같은 사이트의 도움을 받을 수 있다.
- [LaTex Editor](http://www.hostmath.com/)
- [Latex 문법](https://ko.wikipedia.org/wiki/%EC%9C%84%ED%82%A4%EB%B0%B1%EA%B3%BC:TeX_%EB%AC%B8%EB%B2%95)

## Reference
- [Markdown guide](https://www.markdownguide.org/basic-syntax/)
- [Markdown tables generator](https://www.tablesgenerator.com/markdown_tables)