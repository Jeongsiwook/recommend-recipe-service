## 레시피 생성 서비스

### **`서비스명 미정`**

### 서비스 소개

냉장고 속에 남은 식재료들을 이용하여 만들 수 있는 요리 레시피를 제공하는 서비스<br/>
조리하고 싶은 식재료들과 음식명을 입력(input)하면 입력된 재료들을 활용한 레시피를 출력(output)으로 생성하여 사용자에게 제공

프로젝트 제안서에는 다음과 같은 정보가 포함되어야 합니다. (그 외 기획에 대한 내용도 포함하셔도 됩니다.)

### **`타이틀(서비스 명)`**

1. 프로젝트 주제
2. 엔드유저에게 보이는 웹 서비스 타이틀 및 한 줄 소개
3. 팀 구성원의 전체 이름과 역할

| 이름 | 역할 |
| ---- | ---- |
|      |      |
|      |      |
|      |      |

### **`서비스 설명`**

##### 1. 기획 의도

- 조사할 문제, 조사할 문제가 흥미로운 이유
- 프로젝트 목적 및 필요성 (어떤 사용자의, 어떤 문제를 해결하는지)
- 프로젝트가 제공하는 기대 효과와 활용 방안

##### 2. 사용된 인공지능 알고리즘 및 모델 과 기술스택

- 어떤 인공지능 알고리즘 및 모델을 어떻게 전처리하고 사용할 것인지
- 이 프로젝트의 맥락과 배경이 유사한 인공지능 기반 서비스의 활용 사례 및 참고 논문

##### 3. 웹 서비스의 최종적인 메인 기능과 서브 기능 설명

- 메인 기능
  1.
  2.
  3.
- 서브 기능
  1.
  2.
  3.

##### 4. 프로젝트 구성

- 와이어프레임 (whimsical, figma 등 링크 삽입)
- 스토리보스 및 유저 시나리오

##### 5. 프로젝트 평가 기준

- 자신들의 프로젝트 결과물을 질적으로 어떻게 평가할 것인지
- 경쟁력을 수치화 또는 유사한 프로젝트들과 비교하기 위해 어떤 메트릭 또는 통계를 사용할것인지

---

# 임시 기획서

## 프로젝트 목적:

냉장고 속에 남은 식재료들을 이용하여 만들 수 있는 요리 레시피를 제공하는 서비스<br/>
조리하고 싶은 식재료들과 음식명을 입력(input)하면 입력된 재료들을 활용한 레시피를 출력(output)으로 생성하여 사용자에게 제공

## 기대효과와 활용방안

- 요리에 대한 동기부여를 주어 배달음식을 줄일 수 있음
- 기존에 남아있던 식재료를 활용하여, 음식물 쓰레기를 줄일 수 있음 -> 쓰레기 처리비용 감소로 경제적, 환경적 이익 기대

## 사용할 데이터셋과 모델

- 모델: KoGPT2
- 데이터셋: - 데이터 파일 형식: .txt
- 데이터 출처: [해먹남녀](https://haemukja.com/) , [만개의레시피](https://www.10000recipe.com/), [메뉴판닷컴](https://www.menupan.com/), [공공데이터포털](https://www.data.go.kr/) 으로부터 레시피 데이터를 크롤링하여 구성
- train data: 18320개 / test data: 2181개 / valid data: 2181개
- 데이터 형태: 모델이 요리 이름/재료/레시피의 경계를 명확히 알 수 있도록 토큰 삽입 <br/> <unused0> : 요리 이름 시작, <unused1> : 요리 이름 끝, <unused2>: 재료 시작, <unused3>: 재료 끝, <unused4>: 레시피 본문 시작, <unused5>: 레시피 본문 끝 <br/>
  '$’ 문자로 재료를 구분 <br/>                        
(추가적으로 데이터를 크롤링을 한다면 아래와 같이 전처리 과정이 필요) <br/>
```<unused0>칼륨 듬뿍 고구마죽<unused1><unused2>고구마$설탕$찹쌀$가루$물$잣$<unused3><unused4>고구마는 깨끗이 씻어서 껍질을 벗기고 4 정도로 잘라준다. 찜기에 고구마를 넣고 20-30분 정도 삶아 주고 블렌더나 체를 이용하여 잘 으 깨어 곱게 만든다. 고구마와 물을 섞어 끓이면서 찹쌀가루로 농도를 맞추고 설탕을 넣어 맛을 낸다. 잣을 팬에 노릇하게 볶아 다져서 고구마 죽에 섞는다. 기호에 따라 고구마를 튀겨 얹어 먹어도 좋다.<unused5>```

## 사용할 방법, 라이브러리, 알고리즘:

(라이브러리,패키지) torch, pytorch-lightning, ratsnlp, konlpy, Korpora

## 프로젝트와 유사한 인공지능 기반 서비스의 활용 사례와 한계점

### 유사한 서비스

1. 해먹남녀: 레시피 제공 서비스(인공지능 서비스는 아님)  
   갖고 있는 재료를 입력하면 레시피를 제공  
   => 한계점: 갖고있는 재료에 맞는 레시피가 없다면 ‘조건에 맞는 레시피가 0개 있습니다.’ 라는 결과물이 출력
2. 만개의레시피- 음식명을 입력하거나 국/탕, 면, 만두 등과 같은 큰 분류로 레시피 검색이 가능한 서비스
   => 세부적인 재료를 통해서 레시피를 추천해주지는 못함
3. 메뉴판
   레시피 서비스, 식단추천, 아카데미, 실시간 급상승 맛집,랭킹(인기요리,새로운요리)

### 본 프로젝트의 한계점:

- 정확한 g 양을 제공하기 어렵다
- 검증되지 않은 레시피기 때문에 맛이 없을 수가 있음

## 기존 서비스와 해당 프로젝트와의 차별점

기존 레시피 웹 서비스는 갖고 있는 재료에 대한 레시피 정보가 없는 경우 서비스를 제공해주지 못함<br/>
=> 기존에 있던 음식뿐만 아니라 새로운 음식 레시피를 제공할 수 있음

## 프로젝트 구성

- 시나리오
  냉장고에 있는 재료들로 요리를 하고 싶다<br/>
  => 냉장고에 있는 식재료와 음식명을 입력<br/>
  => 레시피 중에서 선택해서 활용<br/>
  로그인 시<br/>
  => 레시피 중에서 북마크로 선택(후기 참조 가능)<br/>
  => 마이페이지에서 북마크 처리한 레시피 후기 작성 또는 추천 기능<br/>

- 랭킹을 확인하고 싶다<br/>
  => 랭킹 메뉴로 이동<br/>
  => 필터를 선택(맛있는 or 괴식)<br/>
  => 레시피들을 확인해 볼 수 있음<br/>

- 다양한 정보를 얻고 싶다<br/>
  => 로그인<br/>
  => 커뮤니티 메뉴 클릭<br/>
  => 읽고, 쓰고, 삭제 가능<br/>
  => 필터 기능(ex.메뉴 입력하면 그 메뉴 관련 글만 보이게)

---

<<<<<<< HEAD

### 웹 서비스 페이지 구성

##### 소개페이지\_프롤로그

- 서비스 소개
- 서비스 사용법 안내
- 시작하기 버튼(메인페이지로 이동)

##### 메인페이지

- 레시피 제공 서비스 입력

##### 랭킹 페이지

- 처음화면은 맛있는순
- 필터로 괴식선택가능

##### 후기 페이지

- 그 메뉴에 대한 후기목록

##### 커뮤니티 페이지

- 게시글(입력, 수정, 삭제)
- 필터입력칸(메뉴, 작성자)

##### 마이페이지- 간단한 정보 수정

- 북마크 관리

---

=======

## 웹 서비스 페이지 구성

### 소개페이지\_프롤로그

- 서비스 소개
- 서비스 사용법 안내
- 시작하기 버튼(메인페이지로 이동)

### 메인페이지

- 레시피 제공 서비스 입력

### 랭킹 페이지

- 처음화면은 맛있는순
- 필터로 괴식선택가능

### 후기 페이지

- 그 메뉴에 대한 후기목록

### 커뮤니티 페이지

- 게시글(입력, 수정, 삭제)
- 필터입력칸(메뉴, 작성자)

### 마이페이지- 간단한 정보 수정

- 북마크 관리
  > > > > > > > a14a7e621fb6bfa1a413aaa9454bfac887adcf5c
