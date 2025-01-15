<div align="center">
  <img src="https://github.com/user-attachments/assets/291a0310-4cfc-4268-b31a-24d847b89e11" width="200" height="200" alt="로고 이미지" />
  <h1>Devrium</h1>
  <p> 개발자들을 위한 SNS 플랫폼</p>
</div>

# 🛠️ Stack

### ✔️ Language & Framework

<img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white"> <img src="https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">

### ✔️ State management

<img src="https://img.shields.io/badge/zustand-orange?style=for-the-badge&logo=zustand&logoColor=white"> <img src="https://img.shields.io/badge/Tanstack Query-FF4154?style=for-the-badge&logo=TanstackQuery&logoColor=white">

### ✔️ Authentication

<img src="https://img.shields.io/badge/Auth.js-191919?style=for-the-badge&logo=nextauth&logoColor=black">

### ✔️ Design System & Style

<img src="https://img.shields.io/badge/shadcnui-000000?style=for-the-badge&logo=shadcnui&logoColor=white"> <img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">

### ✔️ Database & ORM

<img src="https://img.shields.io/badge/supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white"> <img src="https://img.shields.io/badge/prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white">

### ✔️ form Validation
<img src="https://img.shields.io/badge/zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white"> <img src="https://img.shields.io/badge/reacthookform-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white">
  
# 개발기간 
| 기간(4주)| 내용|
|-|-|
| 2024.12.18 ~ 2024.12.21| ERD, 와이어프레임, API 명세서 작성 |
| 2023.12.22 ~ 2023.12.25 | 로그인 구현|
| 2023.12.26 ~ 2024.01.08 | 기능 구현 및 디자인|
| 2024.01.09 ~ 2024.01.13 | 최적화 및 리팩토링|

# 서비스 소개 
## 서비스를 만든 계기 
개발자만을 위한 sns 플랫폼이 필요하다 생각했고 
그 중에서 x.com , reddit, StackOverFlow 에서 내가 생각하기에 좋았던 장점만을 뽑아서 씀 
x는 직관적인 UI로 처음 쓰는 사용자도 쉽게 접할 수 있었고, reddit의 간편한 글쓰기 양식과 유저 자세한 유저프로필 제공 기능 
stackoverflow의 글쓰기 방식은 너무나도 불편 why? 제목 쓰고 이러한 질문이 이미 있었는지 찾아봐야되고, 질문 글을 하나 올릴려면 꽤 시간이 걸렸었음

그래서 이러한 stackoverflow의 불편한 글쓰기 방식을 reddit형식처럼 간편하게 바꾸었고 직관적인 x.com UI를 사용했다.

# 기술 스택을 사용한 이유 
Next.js SSR로 SNS 플랫폼에 잘 맞는 SSR (빠른 초기로딩, SEO최적화)

### tailwindcss & shadcn/ui 
shadcn/ui를 사용한 이유는 컴포넌트 복사 형식으로 어저구 뭐 분명 장점이 있겠지 .ㅇㅇ 내가 피룡한 것들만 가져오니깐 
tailwind로 반응형 ui 쉽게 구현 가능하기 때문에

### TanStack Query 
Next는 기본적으로 캐싱 처리를 해줄 수 있지만 그외에 무한스크롤과 쿼리무효화 기능을 통해 서버 상태관리를 보다 효율적으로 관리하기 위해서 사용 

### Auth.js 
- 간편한 소셜로그인 구현
- supabase + prisma를 통한 세션 및 jwt 기능 구현

### zustand 
카테고리 관리 및 로컬 상태관리를 위한 전역 상태 라이브러리 사용

###  react-hook-from & zod 
Shadcn과의 궁합 좋음 (textarea)
zod를 통한 타입 추출 및 가독성 좋은 폼 벨리데이션 구축을 위해 사용

# 화면 구성 
| Landing | Login |
| - | - |
|  ![landing](https://github.com/user-attachments/assets/69d31526-e57a-491e-8c50-982f9c5cdfa8) |![login](https://github.com/user-attachments/assets/147bb849-3425-4f6e-9bad-83dab18dab09)|

| Home | Profile |
| - | - |
|![home](https://github.com/user-attachments/assets/e622de5d-dafa-4338-9dca-4d94b57ad336) | ![profile](https://github.com/user-attachments/assets/388497d9-f4b3-4f4d-8b56-d3a57feb3970)|

| Post | Write |
| - | - |
| ![postdetail](https://github.com/user-attachments/assets/4ab8eafa-86ad-4b1b-a1b2-616bafe11473) | ![write](https://github.com/user-attachments/assets/82a03fce-54c4-40a6-8c31-20cec3b5c254) |


