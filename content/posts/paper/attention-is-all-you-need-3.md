+++
date = '2023-04-04'
draft = false
title =  "[논문리뷰] Attention is all you need #3"
categories = ["Paper"]
tags = ["Transformers", "Attention"]
series = ["Transformer"]
+++

## Multihead attention

multihead를 하는 이유 - 각각의 attention는 토큰 간의 관계(유사도)를 통해 어텐션을 구하고 종속성을 계산하며, 각각의 head는 다른 유형의 종속성을 가지게 된다.

(문장타입에집중, 관계에 집중, 명사에집중, 강조에 집중)

## 논문과 실제 코드에서 나타나는 차이점

논문 : Q,K,V를 각각의 dimension size로 계산해서 똑같이 z를 얻는다 -> z를 모두 concat -> linear연산으로 차원을 축소시켜서 input dimension과 동일하게 맞춰준다.  
따라서 concate(z)의 size = n_head x n_Q x dim_V 이고, linear를 지났을 때의 output의 size = n_Q x dim_input

코드 : Q,K,V의 dim을 n_head로 나눈 값을 각각의 dim으로 사용한다. d_feat = n_head * d_head

## Reference
- <https://jalammar.github.io/illustrated-transformer/>
