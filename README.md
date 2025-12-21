# Lib API
A simple REST API for a book manager service. This source code was written in the making of this [video](https://youtu.be/I8WiIXMDydw)


## Prerequisites
- Python >=3.10
- PostgreSQL


## How to run the service
1. Create a virtual environment
2. Install the requirements with
```console
pip install -r requirements.txt
```

3. Run the service
```console
pipenv shell
python runserver.py
```


4. Note  
how to create Database in postgresql  
youtube 48:34  
> 코드 실행시 저절로 함수 실행 가능

5. Swagger UI API 테스트    
127.0.0.1:8000/docs   

6. .env 파일 위치
LIB-API-MAIN > .env, README.md, requirements.txt 있는 곳에 같이 넣기  