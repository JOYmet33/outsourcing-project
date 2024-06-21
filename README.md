# 아웃소싱 프로젝트

### 🖥️ 프로젝트 명 : `Camparoo`

- 전국 캠핑장 위치 공유 사이트
- 전국에 있는 캠핑 (글램핑, 카라반 포함) 이용 시 필요한 정보 (위치, 홈페이지, 화장실, 샤워장, 무선인터넷 등 부대시설) 제공
  <br><br>

### 📌 기능

- `인증` - 회원가입, 로그인 및 로그아웃 기능.
- `마이페이지` - 프로필 변경, 사용자의 리뷰 수정, 삭제 기능.
- `캠핑장 정보 제공` - 다양한 캠핑장의 위치, 시설, 예약 가능 여부 등을 제공.
- `리뷰` - 사용자들이 캠핑장에 대한 리뷰를 작성할 수 있는 기능.
- `지도 기능` - 지도 상에서 캠핑장 위치를 마커를 통해 시각적으로 확인 가능.
- `검색` - 검색 시 조건에 해당하는 캠핑장을 마커를 통해 시각적으로 확인 가능.
- `주소 표시` - 현 지도 상에서의 주소를 시작적으로 확인 가능.

<br>

### 🕰️ 개발 기간

2024.06.17. ~ 06.21. (총 5일)

<br>

### 🖼 와이어프레임

 <img src="https://github.com/riverSun1/camparoo-readme/assets/67379144/280af54c-da67-4211-b0a7-ca256498297e" width="900"/>
 
<br><br>

### 👨‍👩‍👧‍👦팀원 구성 (B01조)

|                   리더                   |                   부리더                   |                         부리더                         |                     부리더                     |                  부리더                  |                     부리더                     |
| :--------------------------------------: | :----------------------------------------: | :----------------------------------------------------: | :--------------------------------------------: | :--------------------------------------: | :--------------------------------------------: |
|                  정주신                  |                   강해원                   |                         김성준                         |                     김소라                     |                  김정훈                  |                    이세영B                     |
| [@JOYmet33](https://github.com/JOYmet33) | [@riverSun1](https://github.com/riverSun1) | [@ilovezerocokeya](https://github.com/ilovezerocokeya) | [@sorakim1130](https://github.com/sorakim1130) | [@mangmuse](https://github.com/mangmuse) | [@leeseayoung](https://github.com/leeseayoung) |

<br><br>

### 🍳 기술 스택

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-ecb63e?style=for-the-badge&logo=zustand)
![Tanstack Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
<br><br><br>

### 🗂️폴더 구조

```
src
    ├─assets
    │  └─img
    ├─components
    │  ├─Header
    │  │  └─SearchContainer
    │  ├─Icon
    │  │  └─Icons
    │  ├─layouts
    │  ├─MapContainer
    │  │  └─SideBarToggleBtn
    │  ├─Modal
    │  └─SideBar
    │      ├─CampSiteDetail
    │      ├─CampSiteList
    │      ├─CampSiteName
    │      ├─FirstImage
    │      ├─InfoItem
    │      ├─SideBarAmenities
    │      ├─SideBarHome
    │      ├─SideBarReviews
    │      ├─SideBarTabs
    │      └─Tab
    ├─constants
    ├─hooks
    ├─lib
    │  └─api
    ├─pages
    │  ├─Home
    │  ├─MyPage
    │  │  └─MyPageModal
    │  └─Sign
    ├─store
    ├─style
    └─utils
```
