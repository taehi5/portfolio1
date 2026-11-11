# 김태희 · Data Analysis & AI Portfolio

통계와 인공지능을 바탕으로 한 전공 프로젝트와 대회 활동을 소개하는 개인 포트폴리오입니다.

- **웹사이트:** [taehi5.github.io/portfolio1](https://taehi5.github.io/portfolio1/)
- **기술:** React 19 · Vite 8 · CSS · ESLint

## 페이지 구성

| 영역 | 내용 |
| --- | --- |
| Home | 이름, 관심 분야, 프로젝트 바로가기 |
| About | 이화여자대학교 통계학 전공 · 인공지능학 복수전공 · 수학과 부전공, Python · R |
| Projects | 전공 프로젝트 3개, 대외 프로젝트 3개 |
| Contact | GitHub 프로필 연결 |

한국어·영어 전환과 모바일 레이아웃을 지원합니다.

## 등록된 프로젝트

| 구분 | 수업 / 활동 | 프로젝트 | 확인된 상태 |
| --- | --- | --- | --- |
| 전공 | 통계 프로그래밍 | MBTI 예측 프로그램 | 제목 등록 |
| 전공 | 패턴인식 | 연 소득 수준 예측 | 제목 등록 |
| 전공 | 데이터사이언스 | 지하철 혼잡도 예측 | 제목 등록 |
| 대외 | 신촌 연합 해커톤 | 고객 이탈 예측 | 제목 등록 |
| 대외 | LG Aimers 9기 | 투구 제구 성공 확률 예측 | 종료 · 온라인 단계 참가 · 본선 미진출 |
| 대외 | 2026 서울시 빅데이터 공모전 | 한강공원 보행 접근성 분석 | 제목 등록 |

역할, 분석 방법, 성과 수치, 코드·발표 자료 링크는 아직 등록하지 않았습니다. LG Aimers 외 활동의 종료 여부와 성과는 확인 후 갱신합니다.

## 지금까지 반영한 내용

2026-11-10 ~ 2026-11-11 기준입니다.

- 기존의 밝은 배경과 파란색 포인트 디자인 유지
- KO / EN 버튼에 실제 언어 전환 기능 연결 및 문서 `lang` 속성 동기화
- Contact 섹션과 GitHub 프로필 링크 추가
- 모바일에서 메뉴 표시
- 프로젝트 제목과 결과 문구가 겹치지 않도록 카드 배치 개선
- 키보드 포커스 표시 및 동작 줄이기 설정 지원
- 페이지 제목, 설명 메타 태그, 푸터 추가
- LG Aimers 9기 종료 및 본선 미진출 결과 반영
- 프로젝트 데이터를 `src/projects.js`로 분리
- GitHub Pages 하위 경로 설정 및 자동 빌드·배포 워크플로 추가
- 프로덕션 빌드와 ESLint 검사 통과

## 남은 작업

- [ ] 2026학년도 2학기 과목·프로젝트 추가 — 자료 대기
- [ ] 프로젝트별 문제 정의, 사용 데이터, 분석 방법 정리
- [ ] 개인 역할과 기여 내용 추가
- [ ] 확인 가능한 결과 수치와 코드·발표 자료 링크 연결
- [ ] LG Aimers 외 대외 활동의 최종 상태 확인

이번 학기 내용과 아직 확인되지 않은 성과는 임의로 작성하지 않았습니다.

## 로컬 실행 및 검증

Node.js 24 LTS와 npm을 사용합니다.

```bash
npm ci
npm run dev
```

터미널에 표시되는 주소로 접속합니다. 기본 주소는 `http://localhost:5173/portfolio1/`입니다.

```bash
npm run lint
npm run build
npm run preview
```

빌드 결과는 `dist/`에 생성됩니다. `preview`는 빌드 결과를 확인하는 로컬 서버입니다.

## 파일 안내

| 파일 | 역할 |
| --- | --- |
| `src/App.jsx` | 페이지 구성, 언어 전환 |
| `src/App.css` | 섹션·카드 스타일, 반응형 레이아웃 |
| `src/projects.js` | 프로젝트명, 수업·활동명, 상태, 결과 문구 |
| `src/index.css` | 전역 스타일 |
| `src/main.jsx` | React 진입점 |
| `index.html` | 페이지 제목, 설명, 기본 문서 언어 |
| `vite.config.js` | 빌드 설정, GitHub Pages 기본 경로 |
| `.github/workflows/deploy.yml` | 린트·빌드·배포 |

## 프로젝트 추가 방법

`src/projects.js`의 `academicProjects` 또는 `externalProjects` 배열에 항목을 추가합니다.

```js
{
  course: '수업 또는 활동명',
  englishCourse: 'Course or activity name',
  title: '프로젝트명',
  englishTitle: 'Project title',
}
```

종료가 확인된 대외 프로젝트에는 `status: 'COMPLETED'`를 추가합니다. 결과를 표시하려면 `result`와 `englishResult`를 함께 입력합니다. 현재 상태 배지는 종료 표시에 사용하므로 다른 상태를 추가하려면 `App.jsx`의 배지 처리도 수정해야 합니다.

## 배포

GitHub Pages는 소스 저장소와 별도의 웹사이트입니다. 소스 파일을 올리는 것만으로 React 사이트가 실행되지는 않습니다.

GitHub Pages의 **GitHub Actions** 배포 방식을 사용합니다. `main`에 변경 사항을 올리면 의존성 설치 → 린트 → 프로덕션 빌드 → Pages 배포를 수행합니다. 진행 상황은 [Actions 탭](https://github.com/taehi5/portfolio1/actions)에서 확인합니다.

하위 경로에서 JS·CSS가 정상 로드되도록 Vite의 `base`를 `/portfolio1/`로 설정했습니다. 저장소 이름이나 도메인이 바뀌면 이 경로도 수정해야 합니다.

참고: [Vite 공식 GitHub Pages 배포 가이드](https://vite.dev/guide/static-deploy.html#github-pages)
