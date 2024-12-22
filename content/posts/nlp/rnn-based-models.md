+++
date = '2023-03-03T15:52:10+09:00'
draft = false
title = "[RNN, LSTM, GRU] RNN 기반 모델 구조"
categories = ["NLP"]
tags = ["RNN", "LSTM", "GRU"]
+++

# RNN (Recurrent Nueral Network)
은닉층에서 나온 결과값이 다시 은닉층으로 돌아가 새로운 입력값과 연산을 하는 구조

시계열 데이터, 텍스트 데이터같은 가변길이의 데이터에 적합한 모델

학습을 통해 각 단어 다음에 나올 단어를 예측


### LSTM
hiddne state는 벡터값이고,
$y = W*h$

LSTM의 경우 과거 정보를 가져갈지 말지를 정하는 cell state가 존재.
여기서 c, h는 같은 크기의 벡터이다. 따라서 가중치행렬 사이즈는 두가지 종류임.

$x \rightarrow h$
$h \rightarrow h$

**각각의 연산에서 행렬의 곱셈부분이 inner product인지 element-wise product인지 확인할 필요가 있다.**


![GRU](https://user-images.githubusercontent.com/75467530/230545937-141da8df-53c4-45d6-991f-32445ff959be.png)


### GRU
cell state와 비슷한 역할을 하는 hidden state 하나만 존재 -> 경량화된 모델

![GRU](https://user-images.githubusercontent.com/75467530/230545967-f46b7f66-b388-48da-863f-f5bd077626a8.png)




Reference
- [Pytorch document](https://pytorch.org/docs/stable/index.html)
- https://byumm315.tistory.com/entry/RNN%EC%9D%84-%EC%95%8C%EC%95%84%EB%B4%85%EC%8B%9C%EB%8B%A4
- https://ratsgo.github.io/natural%20language%20processing/2017/03/09/rnnlstm/
