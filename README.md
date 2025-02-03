# Heyjinu Portfolio 🚀

![Portfolio Preview](public/preview.png)

개발자 포트폴리오 웹사이트입니다. Next.js와 Three.js를 활용하여 인터랙티브한 3D 요소를 포함한 모던한 웹 포트폴리오를 구현했습니다.

## 🛠 Tech Stack

### Frontend
- ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
- ![Next.js](https://img.shields.io/badge/-Next.js-000000?style=flat-square&logo=next.js&logoColor=white)
- ![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
- ![Three.js](https://img.shields.io/badge/-Three.js-000000?style=flat-square&logo=three.js&logoColor=white)

### Deployment
- ![Vercel](https://img.shields.io/badge/-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

## 🌟 주요 기능

### 1. 인터랙티브 3D 큐브
- Three.js를 활용한 3D 큐브 구현
- 각 면에 기술 스택 정보 표시
- 클릭 시 회전 애니메이션
- 자연스러운 흔들림 효과

### 2. 반응형 디자인
- 모바일부터 데스크톱까지 최적화된 레이아웃
- Tailwind CSS를 활용한 효율적인 스타일링

### 3. 섹션별 구성
- About Me
- Skills
- Projects
- Career
- Archiving

## 🚀 Getting Started


## 📁 프로젝트 구조

```
my-app/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── ui/
│   │   └── button.tsx
│   └── sections/
│       ├── AboutSection.tsx
│       ├── ArchivingSection.tsx
│       ├── CareerSection.tsx
│       ├── HeroSection.tsx
│       ├── ProjectsSection.tsx
│       ├── SkillsSection.tsx
│       └── cube-faces/
│           ├── BackendSkills.tsx
│           ├── DatabaseSkills.tsx
│           ├── DeploymentSkills.tsx
│           ├── FrontendSkills.tsx
│           ├── ToolsSkills.tsx
│           └── VersionControlSkills.tsx
├── data/
│   └── skills.ts
├── lib/
│   └── utils.ts
├── public/
│   └── icons/
├── scripts/
│   └── downloadIcons.ts
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

### 주요 디렉토리 설명

- `app/`: Next.js 13+의 App Router 구조를 따르는 메인 페이지 구성
- `components/`: 재사용 가능한 React 컴포넌트
  - `ui/`: 버튼 등 기본 UI 컴포넌트
  - `sections/`: 포트폴리오의 각 섹션 컴포넌트
  - `cube-faces/`: 3D 스킬 큐브의 각 면 컴포넌트
- `data/`: 스킬, 프로젝트 등의 정적 데이터
- `lib/`: 유틸리티 함수 및 공통 로직
- `public/`: 이미지, 아이콘 등 정적 파일
- `scripts/`: 아이콘 다운로드 등 개발 보조 스크립트


## 🔧 Scripts

- `npm run dev`: 개발 서버 실행
- `npm run build`: 프로덕션 빌드
- `npm run start`: 프로덕션 서버 실행
- `npm run download-icons`: 기술 스택 아이콘 다운로드

## 🌐 Demo

[Live Demo](https://your-portfolio-url.vercel.app)

## 📝 Todo

- [ ] 프로젝트 섹션 이미지 추가
- [ ] 다크 모드 지원
- [ ] 애니메이션 최적화
- [ ] 성능 개선

## 👨‍💻 Author

- GitHub: [@Norang2810](https://github.com/Norang2810)
- Email: zhdzhdwlsdn76@gmail.com

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.



특히 다음 부분들은 프로젝트 완성 후 업데이트가 필요합니다:
프로젝트 프리뷰 이미지
실제 데모 URL
추가되는 기능들
Todo 리스트 업데이트
