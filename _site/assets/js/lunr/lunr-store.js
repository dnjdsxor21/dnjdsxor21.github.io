var store = [{
        "title": "읽을 논문들",
        "excerpt":"   [Attention is all you need]   [BERT]   [GPT-1]   [GPT-2]   [GPT-3]   [ALBERT]   [ELECTRA]   [Seq2seq]  ","categories": ["Paper"],
        "tags": ["transformer","bert","gpt"],
        "url": "/paper/papers-to-read/",
        "teaser": null
      },{
        "title": "[Pytorch] Dataset, DataLoader",
        "excerpt":"attention is all you need  attention is all you need  ","categories": ["DL"],
        "tags": ["dataset","dataloader","pytorch"],
        "url": "/dl/nn-data1/",
        "teaser": null
      },{
        "title": "[Tokenize]",
        "excerpt":"attention is all you need  attention is all you need  ","categories": ["NLP"],
        "tags": ["tokenizer","embedding"],
        "url": "/nlp/token/",
        "teaser": null
      },{
        "title": "[Transformer] Attention is all you need #0",
        "excerpt":"attention is all you need  attention is all you need  ","categories": ["Paper"],
        "tags": ["transformer","attention"],
        "url": "/paper/tf0/",
        "teaser": null
      },{
        "title": "[Numpy] python numpy",
        "excerpt":"Numpy   Numpy   Numpy  ","categories": ["Python"],
        "tags": ["numpy","pandas","python"],
        "url": "/python/numpy1/",
        "teaser": null
      },{
        "title": "[Transformer] Attention is all you need #1",
        "excerpt":"attention is all you need  attention is all you need  ","categories": ["Paper"],
        "tags": ["transformer","attention","positional_encoding","embedding"],
        "url": "/paper/tf1/",
        "teaser": null
      },{
        "title": "[RNN, LSTM, GRU] RNN 기반 모델 구조",
        "excerpt":"RNN (Recurrent Nueral Network)  은닉층에서 나온 결과값이 다시 은닉층으로 돌아가 새로운 입력값과 연산을 하는 구조   시계열 데이터, 텍스트 데이터같은 가변길이의 데이터에 적합한 모델   학습을 통해 각 단어 다음에 나올 단어를 예측   LSTM  hiddne state는 벡터값이고, $y = W*h$   LSTM의 경우 과거 정보를 가져갈지 말지를 정하는 cell state가 존재. 여기서 c, h는 같은 크기의 벡터이다. 따라서 가중치행렬 사이즈는 두가지 종류임.   $x \\rightarrow h$ $h \\rightarrow h$   각각의 연산에서 행렬의 곱셈부분이 inner product인지 element-wise product인지 확인할 필요가 있다.      GRU  cell state와 비슷한 역할을 하는 hidden state 하나만 존재 -&gt; 경량화된 모델      Reference     Pytorch document   https://byumm315.tistory.com/entry/RNN%EC%9D%84-%EC%95%8C%EC%95%84%EB%B4%85%EC%8B%9C%EB%8B%A4   https://ratsgo.github.io/   natural%20language%20processing/2017/03/09/rnnlstm/  ","categories": ["NLP"],
        "tags": ["RNN","LSTM","GRU"],
        "url": "/nlp/RNN-LSTM-GRU/",
        "teaser": null
      },{
        "title": "[Transformer] Attention is all you need #2",
        "excerpt":"attention is all you need  attention is all you need  ","categories": ["Paper"],
        "tags": ["transformer","attention"],
        "url": "/paper/tf2/",
        "teaser": null
      },{
        "title": "[Transformer] Attention is all you need #3",
        "excerpt":"attention is all you need  attention is all you need  ","categories": ["Paper"],
        "tags": ["transformer","attention","MSA"],
        "url": "/paper/tf3/",
        "teaser": null
      },{
        "title": "[Transformer] Attention is all you need #4",
        "excerpt":"attention is all you need  attention is all you need  ","categories": ["Paper"],
        "tags": ["transformer","normalization","batch","feedforward"],
        "url": "/paper/tf4/",
        "teaser": null
      },{
        "title": "[Transformer] Attention is all you need #5",
        "excerpt":"attention is all you need  attention is all you need  ","categories": ["Paper"],
        "tags": ["transformer","github","code","pytorch"],
        "url": "/paper/tf5/",
        "teaser": null
      },{
        "title": "[Github Markdown] 깃허브 마크다운 문법",
        "excerpt":"What is Markdown     Markdown is a lightweight markup language that you can use to add formatting elements to plaintext documents.     Markdown은 문서를 작성하는 하나의 언어입니다.  github,notion,tistory 등등 다양한 페이지에서 지원하기 때문에 편리하게 작성이 가능합니다.  네이버 블로그를 못쓰겠는 이유   Caution   :key: jekyll 블로그에서 작동하지 않는 문법들이 있다.   이모지와 수식작성 기능은 자주 쓰기 때문에, 따로 Plug-in을 추가해서 해결했다.     jekyll blog uses kramdown as a default markdown converter from 2.0+.  And It doesn’t support the table cell …  https://stackoverflow.com/questions/26844701/lists-in-markdown-table-with-jekyll    Basics   Header  글의 제목  제목들은 메뉴바에 자동으로 등록된다  # h1 ## h2 ### h3 #### h4 ##### h5 ###### h6  특히 minimal-mistakes에서는 h2는 구분선을 포함하고 있다.     Paragraphs  문단을 나누기 위해서는 엔터를 두번 사용하면 된다.   Linebreak  줄바꿈이 자동으로 되지 않아서 개인적으로 불편했다.     공백 2개 + 엔터   HTML의 &lt;br&gt;태그   둘 중에 골라서 사용 할 수 있다.    hello1   hello2&lt;br&gt; hello3   hello1  hello2  hello3   Quotes   &gt; 인용하는 글입니다. &gt; &gt; 인용하는 글입니다. &gt; &gt;&gt; 인용 들여쓰기      인용하는 글입니다.     인용하는 글입니다.          인용 들여쓰기       List   unordered list     - list1 - list2   - list3      list1   list2            list3           ordered list   1. list1 2. list2 3. list3      list1   list2   list3   Text Emphasis  bold   **텍스트 강조**하기   텍스트 강조하기   italic  *기울여* 쓰기   기울여 쓰기   underline  &lt;u&gt;밑줄&lt;/u&gt;긋기   밑줄긋기   **line-through  ~~취소선~~긋기   취소선긋기   Horizontal Rule  구분선은 dash(-) 3번으로 그린다.   up  ---  down   up     down   Code:pushpin:  Code blocks  backticks(`)를 사용한다. Tab키 위에있음   # ```python # import numpy as np # x = np.array([1,2,3]) # ```  import numpy as np x = np.array([1,2,3])   Inline code blocks   `Inline code block`입니다.  Inline code block입니다.   Links:pushpin:  Link  [링크설명](https://www.example.com) 과 같이 작성한다.  제 [블로그](https://dnjdsxor21.github.io)로 놀러오세요!  제 블로그로 놀러오세요!   URL and Email   &lt;https://dnjdsxor21.github.io&gt; &lt;fake@example.com&gt;  https://dnjdsxor21.github.io  fake@example.com   Images  ![이미지설명](이미지 링크) 처럼 작성 가능.  이때 이미지 링크는 local path or URL 모두 가능한듯?     Linking Images  이미지에 링크까지 걸 수 있다. [![이미지설명](이미지 링크)](링크)   Escaping Characters  backslash(\\)를 사용하여, 마크다운 문법이 적용되지 않은 문자 그대로를 보여준다.   \\## h2   \\&lt;https://dnjdsxor21.github.io&gt;    ## h2  &lt;https://dnjdsxor21.github.io&gt;   HTML  밑줄을 칠 때 사용한 &lt;u&gt;text&lt;/u&gt; 처럼 HTML태그를 안다면, 자유롭게 사용 가능한듯 하다.  나는 잘 모름  &lt;a href='#'&gt;맨위로 이동하기&lt;/a&gt;&lt;br&gt; &lt;small&gt; 작은 텍스트 &lt;/small&gt;  맨위로 이동하기   작은 텍스트    Tables(jekyll[X])  |와 -를 조합하여, 간단한 테이블을 작성할 수 있다.  -의 갯수는 3개이상 자유롭게 작성하면 되며,  :---는 좌측정렬, :---:는 중앙정렬, ---:는 우측정렬이다.     | Tables  |     Are     |  Cool   | |:--------|:-----------:|--------:| | col1 is | left-aligned| $1600   | | col2 is |   centered  | $12     | | col3 is |right-aligned| $1      |   Checkbox(jekyll blog[X])  체크박스는 [ ], [x]로 구현 가능하다.   [x] Update the website [  ] Read a [paper](https://arxiv.org/abs/1706.03762)  [x] Update the website  [ ] Read a paper   Emoji :pushpin::+1::honeybee:   Markdown 문법은 emoji를 지원합니다.  jekyll기반의 블로그에서는 emoji가 작동하지 않습니다.(minimal mistakes포함)  다음과 같은 설정을 추가합니다.   # 1. Gemfile에 아래 문구를 추가 gem 'jemoji'   # 2. _config.yml의 plugins부분에 jemoji를 추가 plugins:   - jemoji  설정을 마치면, :text:와 같은 형식으로 이모지를 작성   &gt; Gone camping! :tent: Be back soon.&lt;br&gt;Thats so funny! :joy:     Gone camping! :tent: Be back soon. Thats so funny! :joy:    이모지 리스트는 여기서 확인할 수 있습니다.  emoji-cheat-sheet   Math:pushpin:   github는 원래 수식을 작성하는 latex를 지원하지 않았지만  22년 5월부터 latex를 지원한다고 한다.  https://github.blog/2022-05-19-math-support-in-markdown/    emoji와 마찬가지로 Jekyll-based-blog에서 LaTex가 적용되지 않기 때문에  아래 링크를 통해 해결했습니다.  How to Add Latex Math to Jekyll-based Theme- Minimal Mistakes      한줄 전체에 적용되는 $$ latex formula $$  인라인수식은$ inline formula $    $$\\frac{1}{n} \\sum_{i=1}^{n} Q_{i} * K_{i}$$   RNN의 hidden state는 $ h_t = f_{w} (h_{t-1}, x_{t}) $ 입니다.   \\(\\frac{1}{n} \\sum_{i=1}^{n} Q_{i} * K_{i}\\)  RNN의 hidden state는 $h_t = f_{w} (h_{t-1}, x_{t})$ 입니다.   LaTex문법을 모르면 아래와 같은 사이트의 도움을 받을 수 있다.     LaTex Editor   Latex 문법   Reference     Markdown guide   Markdown tables generator  ","categories": ["Blog"],
        "tags": ["github","blog","markdown","latex"],
        "url": "/blog/github-markdown/",
        "teaser": null
      }]
