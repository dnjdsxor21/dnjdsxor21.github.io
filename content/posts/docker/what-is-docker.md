+++
date = '2023-07-15T15:52:10+09:00'
draft = false
title = "[Docker]What is Docker 도커 #1"
categories = ["Docker"]
tags = ["Docker"]
+++


## What is Docker?

A tool for creating and managing **containers**  
컨테이너를 관리하는 툴

## 컨테이너는 무엇인가?  
A Standardized unit of software. A Package of code and dependencies to run that code  
컨테이너는 라이브러리, 코드, 시스템 도구 등을 포함하는 독립적인 환경으로, 마치 하나의 VM(virtual machine)처럼 작동한다고 생각하면 이해하기 쉽다.

같은 코드를 공유하다보면 패키지의 버전이 맞지 않거나, OS가 달라서 작동 결과가 다른 경우가 있다. 이때 같은 OS, 같은 패키지 버전에서 어플리케이션을 실행 할 수 있다!  
컨테이너는 **"이미지"**라는 일종의 템플릿으로부터 실행 할 수 있다.

## 이미지?
컨테이너가 실제 어플리케이션이 실행되는 환경이라면, 이미지는 컨테이너를 실행하기 위한 템플릿이다.  
따라서 `node`라는 이미지를 만들면, 그 이미지로부터 여러개의 컨테이너를 생성할 수 있다. 그리고 그 컨테이너들은 같은 node 패키지가 설치된 환경일 것이다.  
또한 각각의 컨테이너는 **독립된 환경**으로 서로 영향을 받지 않는다.

## 그래서 Docker를 쓰는 이유는?
코드를 쉽게 공유하고 모두 같은 환경에서 실행 할 수 있다.  
도커를 알기 전에는 메신저나 깃허브를 통해 코드를 공유하고 `pip install -r requirement.txt`를 통해 패키지를 설치하여 진행하였다.  
하지만 각자 쓰는 OS(윈도우, 맥, 리눅스)가 다르거나, 패키지 버전이 달라지면서 에러가 발생한 적이 많다!  

하지만 도커는 하나의 이미지만 잘 만들어 놓는다면, **완전히 동일한 환경**을 구축할 수 있다는 것!
예를 들어 내 맥북에 `node`를 설치하지 않아도, 컨테이너를 띄워서 linux위에 node환경을 쉽게 배포 할 수 있다.  
가장 많이 쓰는 이유는 **개발환경과 프로덕션환경**의 일치. api를 서빙할 때 내 컴퓨터에서만 돌아가던 환경을 docker를 통해 쉽게 배포 할 수 있으며, GCP, AWS등 서버리스 환경에서 배포가 용이함.

docker는 [dockerhub](https://hub.docker.com/)를 지원하기 때문에, 이미지를 쉽게 관리하고 공유할 수 있다.

![image](https://github.com/dnjdsxor21/dnjdsxor21/assets/75467530/a54993f0-3aee-4a14-9fa9-0e2815837908)

VM보다 나은 점이라 하면, 컨테이너마다 OS를 설치할 필요가 없다는 점  
VM은 각각의 머신에 OS를 설치하기 때문에, 하드 디스크 용량을 많이 잡아 먹지만, docker는 docker engine이라는 것 위에서 코드와 라이브러리만 설치하면 된다.

