+++
date = '2023-04-05'
draft = true
title =  "[논문리뷰] Attention is all you need #4"
categories = ["Paper"]
tags = ["Transformers", "Attention"]
series = ["Transformer"]
+++

## Residual Connection
원래 인풋 x + 어텐션 결과 z의 합을 normalization하는 과정  
왜??  
딥러닝 모델이 깊어지면 전달하는 gradient가 작아지게 된다. residual connection은 gradient가 멀리까지 전달되게 한다. 같은 블록이 반복될 때 잔차연결은 효과적이다.  
Normalization : 기준을 minibatch로 하여 정규화를 수행하며, 학습이 안정되고 빨라지도록 하기 위해 r, b는 업데이느하는 파라미터이다.  


## Feed-Forward
Linear연산으로 차원 변경하는 과정  
일반적인 인공신경망 형태로, 층을 깊게 쌓아 학습효과를 높이기 위한 장치  

![ffn](https://user-images.githubusercontent.com/75467530/230662237-4f4561ab-1434-4a8f-b69f-7a6296d1ed3b.png)


