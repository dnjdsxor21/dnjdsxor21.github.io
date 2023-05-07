---
title:  "Huggingface 모델 저장하고 불러오기(*.ckpt, *.bin)"
excerpt: "허깅페이스 모델 저장하기 불러오기"

categories:
  - NLP
tags:
  - [Huggingface, transformers, BERT, Model]

toc: true
toc_sticky: true
toc_label: "Content"
 
date: 2023-05-07
---
## transformer라이브러리로 모델 불러오기

**기존에는 pre-trained model을 불러와서 사용하기만 했다.**

```python
from transformers import AutoModel
MODEL_NAME = 'klue/bert-base'
model = AutoModel.from_pretrained(MODEL_NAME)
```

그러나 원하는 task에 맞게 학습을 하다보면 모델을 새롭게 저장하고 불러와야하는 경우가 있다.  
모델을 저장하는 방식은 크게 두 가지 방법이 있는 듯하다.  
**모델 그대로 저장하기(`.bin파일`)**, **체크포인트(`.ckpt파일`)저장하기**

어떤 라이브러리를 사용하냐에 따라 모델을 저장하는 코드가 약간 달라진다.  
e.g. `torch`, `torch-lightning`, `transformers` 

## 1. 모델 그대로 저장하기(`.bin`)

모델을 저장할 때는 보통 .bin이라는 확장자를 사용하는데, 이는 **모델 아키텍처와 가중치 정보가 함께 저장된 바이너리 파일(binary file)**을 의미한다.  
예를들어 Hugging Face의 Transformers 라이브러리에서는 save_pretrained() 메소드를 사용하여 모델을 저장할 수 있으며, 이 메소드를 사용하면 모델 아키텍처와 가중치 정보가 함께 저장된 .bin 파일을 생성할 수 있다.

.bin 파일은 모델 아키텍처와 가중치 정보가 함께 저장된 바이너리 파일(binary file)을 의미하므로, 모델을 로드하기 위해서는 모델 아키텍처를 정의할 필요 없이 `.from_pretrained()` 메소드를 호출하면 된다.

```python
from transformers import AutoModel

model = AutoModel.from_pretrained("klue/bert-base")

# 모델을 .bin 파일로 저장
model.save_pretrained("model.bin")

# 저장된 .bin 파일을 불러오기
loaded_model = AutoModel.from_pretrained("model.bin")
```

## 2. 체크포인트 저장하기(`.ckpt`)

`transformers.Trainer`를 사용하여 모델을 학습할 때, 모델의 체크포인트가 일정 간격으로 저장된다. 기본적으로 이 체크포인트 파일의 확장자는 `.ckpt`이다.

.ckpt 파일은 **모델의 가중치(weights) 정보만을 저장**하고 있기 때문에, 모델 아키텍처(architecture)를 별도로 정의해야 한다. 먼저, 모델 아키텍처를 정의하고 이를 from_pretrained 메소드에 전달하여 불러올 체크포인트 파일의 경로와 함께 모델을 초기화한다. 이후에는 해당 모델 객체를 통해 예측 등의 작업을 수행할 수 있다.

```python
from transformers import AutoModelForPreTraining, AdamW, get_scheduler

model = AutoModelForPreTraining.from_pretrained("klue/bert-base")

optimizer = AdamW(model.parameters(), lr=5e-5)
scheduler = get_scheduler(
    "linear",
    optimizer=optimizer,
    num_warmup_steps=0,
    num_training_steps=1000
)

# 모델과 optimizer, scheduler를 .ckpt 파일로 저장
checkpoint = {
    "model_state_dict": model.state_dict(),
    "optimizer_state_dict": optimizer.state_dict(),
    "scheduler_state_dict": scheduler.state_dict()
}
torch.save(checkpoint, "model.ckpt")

# 저장된 .ckpt 파일을 불러오기
loaded_checkpoint = torch.load("model.ckpt")
loaded_model = AutoModelForPreTraining.from_pretrained("bert-base-uncased", state_dict=loaded_checkpoint["model_state_dict"])
```

## .bin vs .ckpt

.bin 파일은 모델의 아키텍처와 가중치 정보가 함께 저장되기 때문에 용량이 커질 수 있다. 반면에 .ckpt 파일은 모델의 가중치 정보만 저장하기 때문에, .bin 파일보다 용량이 작을 수 있다.

모델의 크기가 크다면, .bin 파일과 .ckpt 파일의 용량 차이가 크게 나타날 수 있습니다. 따라서, 모델을 저장할 때 용량을 고려하여 적절한 방식으로 체크포인트를 저장하면 될 듯 하다 !

### Reference

chatGPT의 도움을 받아 작성함.