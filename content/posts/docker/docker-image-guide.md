+++
date = '2023-07-16T15:52:10+09:00'
draft = false
title = "[Docker]docker image 도커 #2"
categories = ["Docker"]
tags = ["Docker"]
+++


## 도커 설치

`Windows`, `MacOS`의 경우 **Docker Desktop**을 설치  
`Linux`의 경우 **Docker Engine**을 설치한다.

## 이미지 Image

도커는 이미지와 컨테이너의 개념만 알면 일단 사용이 가능하다. 컨테이너의 기반이 되는 이미지가 필요한데, dockerhub에서 가져오거나 직접 만들 수 있다.  
이미지의 이름은 `name:tag`의 방식을 가진다.(`python:3.9`, `node:14`)  
tag는 보통 버전을 명시

#### dockerhub에서 가져오기

```
$ docker pull python:3.9
```

#### Dockerfile 작성

보통 자신의 개발환경에 맞게 세팅해야 하므로, 기존의 pre-built Image를 가져와서 커스터마이징 한다.  
이를 위해서는 자신의 코드, 패키지 정보 등을 준비하고, `Dockerfile`이라는 이름의 파일을 생성한다(이름은 고정)  

<img width="500" alt="image" src="https://github.com/dnjdsxor21/dnjdsxor21/assets/75467530/c8329493-43a4-4e78-8cd8-197b9f6f926a">

나의 경우에는 딥러닝 모델 서빙을 위한 백엔드 환경이 필요했다.  
따라서 `python:3.9`위에 서버를 띄우기 위한 `fastapi`, database를 생성하기 위한 `alembic` 등의 패키지를 사용했다.  
참고로 `poetry`는 패키지 관리툴이며, `pip`로 가상환경과 패키지를 관리하는 것과 비슷한 역할

**Dockerfile**
`FROM python:3.9` : python:3.9라는 이미지를 가져와서 그 위에서 시작한다.

`WORKDIR /app` : 컨테이너에서 `/app`이라는 디렉토리를 생성하고 기본 디렉토리로 지정 (내 로컬에 있는 'app'폴더와 다름)

`RUN pip install poetry` : `RUN`는 커맨드를 실행하는 것을 의미하며 **이미지가 생성될때 실행되는 커맨드**(밑에 CMD와 다름)

`COPY pyproject.toml`: `COPY`는 내 로컬에 있는 파일을 docker환경으로 이동한다는 뜻이다. (내 컴퓨터의 `pyproject.toml`파일 -> docker의 `/app`디렉토리에 복사한다. **`.`는 현재 디렉토리를 의미**하며, 위에서 `WORKDIR /app`를 지정했기 때문에 현재 디렉토리는 `/app`이 된다.

`RUN poetry ~`: 역시 커맨드를 실행하는 부분으로, `pip install -r requirement.txt`와 비슷하게 패키지를 설치 하는 커맨드이다.

`COPY /app .`: 패키지 설치를 마치고, 나머지 코드를 복사. (내 컴퓨터의 `/app`폴더 -> docker의 `/app`폴더로 이동)

`EXPOSE 80`: fastapi를 통해 서버를 띄울 것이기 때문에 port 80을 개방하겠다는 의미이며, 이 코드로 인해 port가 열리지는 않음(port 80을 열겠다는 documentation의 역할, port개방을 위해서는 나중에 다른 코드가 필요)

`CMD ["python", "main.py"]`: `RUN`과 다르게 **`CMD`는 컨테이너가 생성되거나 재시작 될때 실행되는 커맨드**이며, 한줄만 작성이 가능하다. 이상하게 띄어쓰기 단위로 끊어서 리스트에 담아줘야 한다. `main.py`는 서버를 실행하는 코드를 담고 있어서, "이미지"가 생성될 때는 실행될 필요가 없고 "컨테이너"가 시작될 때 실행되어야 하는 코드이다.

#### docker build

`Dockerfile`이 완성되었다면, `docker build .`를 통해 이미지를 생성 할 수 있다.  
`.`는 현재 디렉토리에 있는 `Dockerfile`로 부터 이미지를 빌드하겠다는 의미.  

이 때 이미지의 이름이 자동으로 생성되는데, 원하는 이름을 달기 위해 다음과 같이 작성 가능  
(앞에 내 아이디를 작성하는 이유는 dockerhub에 올리기 위해서이다. 안 올릴거면 `name:tag`도 가능)  

```bash
docker build -t <my_id>/<image-name>:<image-tag> .  
docker build -t dnjdsxor21/fastapi:v1 .
```

일반적으로 GCP, AWS에서 사용하는 플랫폼은 `linux/amd64`이지만, M1 맥북에서는 `linux/arm64`로 생성된다.  
따라서 플랫폼을 맞춰주기 위해 이렇게 작성  

```bash
docker build -t dnjdsxor21/fastapi:v1 --platform linux/amd64 .
```

오류없이 잘 생성 되었다면, `docker images` 커맨드를 통해 확인할 수 있다!  
(저는 이거저거 하다가 이미지가 좀 많음)  

<img width="600" alt="docker images" src="https://github.com/dnjdsxor21/dnjdsxor21/assets/75467530/e58ab572-3da2-4ca4-b326-1c5a3123ea06">

#### image 삭제

사용하지 않는 이미지는 디스크 용량을 차지하므로 삭제

```bash
docker rmi dnjdsxor21/fastapi:1
```

#### docker registry

생성된 이미지를 dockerhub에 올리기  

**로그인** : 자세한 과정은 생략

```bash
docker login -u my-id
```

**image 올리기**

```bash
docker push dnjdsxor21/fastapi:v1
```

## image 검사

image의 정보를 알고 싶을 때 사용

```bash
docker inspect <image-name>
```