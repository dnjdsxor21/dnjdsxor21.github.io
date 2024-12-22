+++
date = '2023-07-18T15:52:10+09:00'
draft = false
title =  "[Docker]docker container 도커 #3"
categories = ["Docker"]
tags = ["Docker"]
+++



## Docker Container

도커 이미지를 만들었다면, 이미지 기반의 컨테이너를 생성할 차례

먼저 docker image를 local로 가져오기(나는 local에 있기 때문에 생략 가능)

```bash
docker pull dnjdsxor21/fastapi:v1
```

이미지 확인! `docker images`

## Container run

본격적으로 컨테이너 띄워보기

```bash
docker run <image_name>
```

이때 줄 수 있는 옵션이 굉장히 많다.

```bash
docker run -p 3000:80 --name my-container -d <image_name>
```

`-p` : port옵션, `Dockerfile`에서 작성했던 port80을 실제로 열어주는 작업. 내 컴퓨터(또는 AWS EC2, GCP VM instance)의 포트 3000과 컨테이너의 포트 80을 연결  
`--name` : 컨테이너의 이름을 지정. 안하면 랜덤으로 이름 지정  
`d`: detach모드를 의미, `docker run`는 디폴트로 attach모드를 가진다. attach모드는 컨테이너의 터미널과 연결 되는 것을 의미한다.  

컨테이너를 무사히 생성했다면, `docker ps`커맨드를 통해 "실행중인 컨테이너"를 확인 할 수 있다.  
"모든 컨테이너"를 확인하려면 `docker ps -a`  

나의 경우는 fastapi, uvicorn으로 백엔드 서버를 실행하기 때문에 코드가 계속 돌아가고 있다. 따라서 컨테이너는 계속 실행중이다.  
`main.py`을 통해 port80에서 서버가 열려있다. 그 port80이 내 localhost port3000과 연결되어 있기 때문에 "localhost:3000"에 들어가면 서버가 정상적으로 작동하는 것을 확인 할 수 있다!

만약 코드가 한번 돌고 멈추는 코드라면, 컨테이너도 중지된다.

## Container 관리

`docker ps -a` : 컨테이너 리스트 출력   

`docker stop <container-name>` : 컨테이너 중지

`docker start <container-name>` : 컨테이너 재시작, 이때는 `run`과 다르게 디폴트가 detach모드, `Dockerfile`에서 작성한 `CMD`커맨드가 다시 실행

`docker logs <container-name>` : 컨테이너의 터미널에 출력된 로그를 출력

`docker rm <container-name` : 컨테이너 삭제

## Container는 독립된 환경!

컨테이너는 **독립된 환경**으로, 내 로컬 환경과 공유되지 않는다. 따라서 Container를 삭제하면 그 안에 있는 파일들도 삭제 된다.  

컨테이너 안의 파일을 백업하고 싶을 때, 또는 컨테이너 안의 파일을 추가, 수정 하고 싶을 때가 있다.

container이름을 `my-container`라고 하면,  
**파일 옮기기(컨테이너 -> 로컬)**

```bash
docker cp my-container:/app/main.py .
```

**파일 옮기기(로컬 -> 컨테이너)**

```bash
docker cp my-file.py my-container:/app/
```

## 이미지와 컨테이너

이렇게 도커를 처음 쓸 때 **이미지와 컨테이너**만 이해한다면 쉽게 사용해 볼 수 있다!

물론 도커로 활용 가능한 기능은 아직 너무 많음,,

위에서 말했듯 Container는 독립된 환경이기 때문에 컨테이너 안의 파일들은 `temporary`의 특징을 가진다.  
따라서 log, Database 등 `permanent`의 특징을 가지는 데이터를 관리하기 위해서는 새로운 기능의 필요성을 느꼈다.  

이런 문제를 해결하기 위해 다음에는 **Docker Volume**를 알아봅시다요