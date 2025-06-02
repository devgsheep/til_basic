# 1. 웹퍼블리싱 환경 설정

- 회사에서 당황하지 않고 업무환경 설정이 가능하셔야 합니다.
- 아래 순서대로 퍼블리싱 셋팅하시면 문제없이 진행됩니다.

## 1.1. Node.js 설치

- [node.js](https://nodejs.org/ko)
- Node.js는 로컬PC 및 서버PC에서 JS(JavaScript)를 실행하는 환경 구성.
  - 서버는 대표적으로 웹 서버(PC), 데이터베이스 서버(PC) 등이 있음.
  - 서버는 고객들이 인터넷으로 접속해서 자료를 사용하는 PC
- 추후 React에서 `NVM(Node Version Manage)`을 통한 관리 예정

## 1.2. VSCode 설치

- [VSCode](https://code.visualstudio.com/)

## 1.3. VSCode Extenstion 설치

- 아래 목록을 위주로 설치 한다.

```
- Auto Close Tag
- Auto Rename Tag
- Bracket Pair Color DLW
- CSS Peek
- HTML CSS Support
- HTML to CSS autocompletion
- Image preview
- indent-rainbow
- Korean Language Pack for... (VSCode 재실행 후 확인)
- Live Server
- Markdown Preview Enhanced
- Material Icon Theme
- Night Owl (테마)
- Prettier - Code formatter (별도 참조)
```

## 1.4. Prettier 셋팅

- 줄 맞춤, 들여쓰기, 따옴표, 세미콜론 등에 대한 문서의 포맷(컨벤션)을 맞추어 줌
- 설정 버튼(VSCode의 모서리 왼쪽 아이콘) 선택 > Settings 메뉴 선택
- 검색내용으로 `format`으로 작성
- `Editor:Default Formatter` 설정(Prettier 선택)
- `Editor:Format On Save` 설정
- VSCode 재실행 추천합니다.

# 2. 웹퍼블리싱 개발 구조 설정

- 반드시 프로젝트명은 `영어소문자`, `단어_단어` 등의 특수기호 추천
- git셋팅 먼저 진행 필요 : GitHub 포함해서 

## 2.1. 추천 폴더 구조

- images 폴더 : 파일명.jpg, 파일명.png, 파일명.gif, 파일명.svg
  - jpg : 사진
  - gif : 그림(애니메이션 그림 가능, 배경 투명 가능)
  - png : 사진 + 배경 투명
  - svg : 디지털 숫자(벡터)로 계산해서 그림을 만듦(아이콘, 반응형 등에 적극활용)
- css 폴더 : `모듈별.css` 파일들
- js 폴더 : `모듈별.js` 파일들
- assets 폴더 : 기타 파일들(영상, 음악, 계약서, 연락처 포함)
- apis 폴더 : `백엔드 데이터 연동` 관련 파일들(파일명.json, 데이터 요청 등)
  - json : JavaScript Object Notation (자바스크립트 객체 문법이 적용된 파일)

## 2.2. 기본 파일

- `index.html` 약속 됨.(파일명 변경 불가 : 엔트리포인트)
- 부가적으로 index만 작업하는 이유가 가장 어렵고, 복잡하고, 비주얼 합니다.

# 3. HTML 태그의 이해

- 웹 브라우저가 알아볼 수 있는 문법 구조
- DOM 구조로 해석 : Document Object Model
- <태그>내용</태그>

## 3.1. `div 태그`

- <div>내용</div>
- 내용 배치의 레이아웃을 담당함.
- 최초 구성 필수(경험-경력이 필요함.)
- 내용을 충분히 분석하고 난 이후에 `주석을 명시` 후 div 사용
- div 태그 역할에 맞는 이름을 `class로 지정`함.

## 3.2. `시멘틱 태그`

- div로 내용을 구분 후 아래 영역은 태그를 변경하기를 추천합니다.
- `header 태그` : 검색엔진에서 내용을 기대함(로고, 타이틀, 주메뉴, 검색, 회원기능...)
- `main 태그` : 컨텐츠 모음
- `footer 태그` : 검색엔진에서 내용을 기대함(카피라이터, 주소, 연락처, 사이트 맵...)

## 3.3. 필수 태그

- a 태그 : anchor
  - 현재 웹브라우저 내용 갱신(페이지 이동) : `<a href="주소">글자/그림</a>`
  - 웹브라우저 탭 생성(새탭 페이지) : `<a href="주소" target="_blank">글자/그림</a>`

# 4. CSS의 이해
