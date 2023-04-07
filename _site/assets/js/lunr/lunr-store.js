var store = [{
        "title": "읽을 논문들",
        "excerpt":"   [Attention is all you need]   [BERT]   [GPT-1]   [GPT-2]   [GPT-3]   [ALBERT]   [ELECTRA]   [Seq2seq]  ","categories": ["Paper"],
        "tags": ["transformer","bert","gpt"],
        "url": "/paper/papers-to-read/",
        "teaser": null
      },{
        "title": "[Github Markdown] 깃허브 마크다운 문법",
        "excerpt":"Header :star: :star: :star:  글의 제목  제목들은 Contents 에 자동으로 등록된다  # h1 ## h2 ### h3 #### h4 ##### h5 ###### h6  특히 minimal-mistakes에서는 h2에 구분선을 포함하고 있다.   Paragraphs  문단을 나누기 위해서는 엔터를 두번 사용하면 된다.   Linebreak  줄바꿈이 자동으로 되지 않아서 개인적으로 불편했다.     공백 2개 + 엔터   HTML의  태그 둘 중에 골라서 사용 할 수 있다.     hello1   hello2&lt;br&gt; hello3          hello1  hello2  hello3       Quotes  &gt; 인용하는 글입니다. &gt; &gt; 인용하는 글입니다. &gt; &gt;&gt; 인용 들여쓰기     인용하는 글입니다.     인용하는 글입니다.          인용 들여쓰기       List :star: :star: :star: :star:  ul  - list1 - list2   - list3     list1   list2            list3         ol              1. list1     2. list2     3. list3                  1. list1 2. list2 3. list3                           Text Emphasis :star: :star:  bold  **텍스트 강조**하기  텍스트 강조하기  italic  *기울여* 쓰기  기울여 쓰기  underline  &lt;u&gt;밑줄&lt;/u&gt;긋기  밑줄긋기   line-throgh  ~~취소선~~긋기  취소선긋기   Highlighting  They are ==very important.==  They are ==very important.==   Code :star: :star::star: :star: :star:  Code blocks  backticks(`)를 사용한다. Tab키 위에있음  import numpy as np x = np.array([1,2,3])  ```python import numpy as np x = np.array([1,2,3])  #### Inline Code Block ```python `Inline code block`  Inline code block   Horizontal Rule  구분선이다. dash를 3번 쓴다.  -– up — down   Links :star: :star: :star: :star:  link  [링크설명](https://www.example.com) 과 같이 작성한다.  제 [블로그](https://dnjdsxor21.github.io)로 놀러오세요!  제 블로그로 놀러오세요!   URL and Email  &lt;https://dnjdsxor21.github.io&gt; &lt;fake@example.com&gt;  https://dnjdsxor21.github.io fake@example.com   Images  !이미지설명 처럼 작성 가능.  이때 이미지 링크는 local path or URL 모두 가능한듯?     Linking Images  이미지에 링크까지 걸 수 있다. [](링크)   Escaping Characters  backslash()를 사용하여, 마크다운 문법이 적용되지 않도록 문자 그대로를 보여준다.  \\## h2   \\&lt;https://dnjdsxor21.github.io&gt;    ## h2  &lt;https://dnjdsxor21.github.io&gt;   HTML  밑줄을 칠 때 사용한 &lt;u&gt;&lt;/u&gt; 처럼 HTML태그를 안다면, 자유롭게 사용 가능한듯 하다.  나는 잘 모름  &lt;a href='#'&gt;맨위로 이동하기&lt;/a&gt;  맨위로 이동하기   Tables  |와 -를 조합하여, 간단한 테이블을 작성할 수 있다.  -의 갯수는 3개이상 자유롭게 작성하면 되며,  :---는 좌측정렬, :---:는 중앙정렬, ---:는 우측정렬이다.   | Tables  |     Are     |  Cool   | |:--------|:-----------:|--------:| | col1 is | left-aligned| $1600   | | col2 is |   centered  | $12     | | col3 is |right-aligned| $1      |  | Tables  |     Are     |  Cool   | |:——–|:———–:|——–:| | col1 is | left-aligned| $1600   | | col2 is |   centered  | $12     | | col3 is |right-aligned| $1      |   Checkbox  체크박스는 [ ], [x]로 구현 가능하다.  [x] Update the website [ ] Read a [paper](https://arxiv.org/abs/1706.03762)  [x] Update the website [ ] Read a paper   Emoji :star: :star: :star:  매우 중요한 이모지 작성법  &gt;Gone camping! :tent: Be back soon. &gt; &gt;Thats so funny! :joy:     Gone camping! :tent: Be back soon.     Thats so funny! :joy:    이모지 리스트는 여기서 확인할 수 있습니다. list of emoji shortcodes   Math support(latex) :star: :star: :star: :star: :star:  github는 원래 수식을 작성하는 latex를 지원하지 않았다.  22년 5월부터 latex를 지원한다고 한다. https://github.blog/2022-05-19-math-support-in-markdown/     한줄 전체에 적용되는 $$ latex formula $$     인라인수식은 $ inline formula $    $$\\frac{1}{n} \\sum_{i=1}^{n} Q_{i} * K_{i}$$   - RNN의 hidden state는 $ h_t = f_{w} (h_{t-1}, x_{t}) $ 입니다.  $\\frac{1}{n} \\sum_{i=1}^{n} Q_{i} * K_{i}$$  RNN의 hidden state는 $ h_t = f_{w} (h_{t-1}, x_{t}) $ 입니다.   ==LaTex==문법을 모르면 아래와 같은 사이트의 도움을 받을 수 있다.     LaTex Editor   Latex 문법   Reference     Markdown guide   Markdown tables generator  ","categories": ["Blog"],
        "tags": ["github","blog","markdown","latex"],
        "url": "/blog/github-markdown/",
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
      }]
