# 프로젝트명: Today, ON

### 투두리스트및 메모관리앱👀

### 배포주소

투데이온 바로가기: <https://elena7993.github.io/todayon/>

### 1. 앱 이미지

<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;">
<img src="./public/todayon_images/todayon_home.png" alt="홈화면" width="300" height="500">
<img src="./public/todayon_images/todayon_main.png" alt="메인화면" width="300" height="500">
<img src="./public/todayon_images/todayon_profile.png" alt="프로필화면" width="300" height="500">
<img src="./public/todayon_images/todayon_todo.png" alt="투두화면" width="300" height="500">
<img src="./public/todayon_images/todayon_notes.png" alt="노트화면" width="300" height="500">
<img src="./public/todayon_images/todayon_streching.png" alt="스트레칭화면" width="300" height="500">

<div>

<p style="margin: 20px 0;"></p>

### 2.목적

- 투두리스트를 제공한다.
- 메모를 할 수 있는 노트를 제공한다.
- 간단한 스트레칭 가이드를 제공한다.

### 3.기능

- 할 일관리 : 입력한 작업은 리스트 형태로 저장됨
- 투두리스트와 노트 수정 및 삭제
- 데이터 유지: LocalStorage를 활용해 새로고침해도 저장된 할 일을 유지.
- 데이터를 불러와 랜덤하게 스트레칭 가이드 제공
- Evergreen UI를 활용해 '수정, 삭제' 등 깔끔한 Ui 구현

### 4. 스택

- HTML, CSS, JavaScript, React, Figma

### 5. 개발 스케줄

| 날짜     | 작업 내용                                                          |
| -------- | ------------------------------------------------------------------ |
| 토 11.30 | 아이디어어 선정 및 기획 확정<br>레퍼런스 조사 및 디자인 작업 시작  |
| 일 12.01 | 디자인 작업 완료<br>React 프로젝트 세팅, 홈화면과 메인화면 UI 구현 |
| 월 12.02 | To-Do List 구현                                                    |
| 화 12.03 | 스트레칭 리스트 구현<br>메모장 로직 구현                           |
| 수 12.04 | 각 페이지들 코드 최종 수정<br>유지보수 및 배포 준비                |
| 목 12.05 | 배포                                                               |

### **6. 작업하면서 느낀 점**

**(1)문제 발생과 해결을 위한 시도**

- localStorage를 활용해 데이터를 저장하고 불러오는 방식으로 데이터를 관리하였다. 그러나 초기 개발 단계에서 노트 데이터와 투두리스트가 새로고침 이후 초기화되는 현상이 발생했다. 이는 데이터를 불러오는 타이밍 문제였으며, 이를 해결하기 위해 useEffect를 활용하여 컴포넌트 렌더링 시 데이터를 로드하고, 빈 값일 경우 기본값을 제공하도록 로직을 추가해 안정성을 확보하였다.
- 전반적인 디자인은 퍽 만족스러운 결과를 얻었다. 특히, 노트 생성 시 랜덤하게 배경 컬러가 바뀌는 점과 블랙 앤 화이트의 모던한 컨셉은 좋은 반응을 얻을 수 있을 것 같다.

**(2)향후 계획과 총평**

- 이번 작업을 통해 localStorage를 활용하는 방법을 익히면서, 백엔드를 배우게 된다면 더욱 효율적으로 작업할 수 있을 것이라는 가능성을 발견했다. API를 직접 만들고 데이터를 데이터베이스에 저장하고 필요할 때마다 불러오는 구조를 적용한다면, 데이터의 보안성, 동기화, 확장성이 크게 향상될 것이라는 사실을 알게 되었다. 개발은 정말 무한한 가능성이 있는 분야임을 다시 한번 느끼게 되었다!
- 이번 프로젝트를 통해 UI/UX와 데이터 관리의 기초를 다질 수 있었던 좋은 경험이었다. 앞으로도 이런 경험을 발판 삼아 더 발전해 나가고 싶다!
