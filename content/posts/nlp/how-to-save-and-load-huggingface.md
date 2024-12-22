+++
date = '2023-05-09'
draft = false
title =  "Huggingface 모델 저장하고 불러오기"
categories = ["NLP"]
tags = ["Huggingface", "HuggingfaceHub", "Transformers", "BERT", "Model"]
+++
## HuggingFace 를 사용하면 모델 불러오기, 저장이 훨씬 쉽다.


```python
from transformers import AutoModel
MODEL_NAME = 'klue/bert-base'
# 학습 전 모델 불러오기
model = AutoModel.from_pretrained(MODEL_NAME)
```

```python
# 학습 후 모델 저장하기
model.save_pretrained(OUTPUT_DIR)
```

## HuggingFace Hub

허깅페이스에도 깃허브처럼 '모델'과 '데이터셋'을 저장할 수 있는 저장공간이 존재한다!

위에서는 `klue/bert-base`를 허브에서 불러왔으며, OUTPUT_DIR(local 환경)에 저장했다.

먼저 local 환경(내 컴퓨터)에서 모델을 불러와보자.
```python
from transformers import AutoModel
MODEL_PATH = '/opt/ml/bert/checkpoint-100'
model = AutoModel.from_pretrained(MODEL_PATH)
```
사실 위와 똑같은 방법이다.  
이때 `MODEL_PATH`에는 `config.json`, `pytorch_model.bin` 등등의 파일이 있어야함!  
코드가 같은 이유는 허깅페이스 허브에 모델이 있는지 확인하고, 없으면 로컬 디렉토리에 모델이 있는지 체크한다.

### 이번에는 huggingface hub에 올리기
우선 huggingface에 가입해야 함.  
그리고 local환경에 있는 모델을 허깅페이스에 올리기 위해 로그인이 필요하다

```
$ pip install huggingface_hub
huggingface-cli login
# 이후 토큰 입력
```

또는

```python
# jupyter
from huggingface_hub import notebook_login
notebook_login()
# python
from huggingface_hub import login
login()
```

**로그인에 성공했으면 이제 모델을 올리기만 하면된다!**
이때 hub에 저장되는 이름은 `'자신의 id'/'원하는 이름'`으로 한다.

```python
# 저장할 모델 불러오기
model = AutoModel.from_pretrained(MY_MODEL_PATH)
# hub에 올리기
MODEL_NAME = "dnjdsxor21/my-bert # 저장할 모델이름
model.push_to_hub(MODEL_NAME)
```

참고로 토크나이저도 모델과 함께 올라감

## 데이터셋

모델 뿐만 아니라 데이터셋도 허브에 올릴 수 있다.  
데이터셋과 관련된 이야기는 다음에 하고, 일단 코드만 공유

```python
from datasets import Dataset
# HuggingFace Dataset 정의
dataset = Dataset.from_list(MY_DATA)  # from_list, from_dict, from_json 등 다양한 방법이 있음
DATASET_NAME = 'dnjdsxor21/my-sample-data'
dataset.push_to_hub(DATASET_NAME)
```

### 성공!
![huggingface_hub](<assets/img/posts/huggingfacehub-1.png>)

허깅페이스에 모델과 데이터셋을 올리는 이유는, 관리가 쉽기 때문이다. 내 컴퓨터에 저장하지 않아도 되며, 한줄의 코드로 쉽게 불러올 수 있기 때문에!

데이터셋을 불러오는 방법은 아래와 같음

```python
from datasets import load_dataset, load_from_disk
# hub에 있는 데이터셋 불러오기
dataset = load_dataset("dnjdsxor21/my-sample-data")
# local에 있는 데이터셋 불러오기
dataset = load_from_disk(DATA_PATH)
```

## Reference

[huggingface docs](https://huggingface.co/docs)를 읽으면서 하는게 젤 학습하기 좋다!