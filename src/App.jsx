import './App.css'
const academicProjects = [
  {
    course: '통계 프로그래밍',
    title: 'MBTI 예측 프로그램',
    englishTitle: 'MBTI Prediction Program',
  },
  {
    course: '패턴인식',
    title: '연 소득 수준 예측',
    englishTitle: 'Income Level Prediction',
  },
  {
    course: '데이터사이언스',
    title: '지하철 혼잡도 예측',
    englishTitle: 'Subway Congestion Prediction',
  },
]

const externalProjects = [
  {
    course: '신촌 연합 해커톤',
    title: '고객 이탈 예측',
    englishTitle: 'Customer Churn Prediction',
  },
  {
    course: 'LG Aimers 9기',
    title: '투구 제구 성공 확률 예측',
    englishTitle: 'Pitch Control Success Prediction',
    status: 'IN PROGRESS',
  },
  {
    course: '2026 서울시 빅데이터 공모전',
    title: '한강공원 보행 접근성 분석',
    englishTitle: 'Han River Park Accessibility Analysis',
  },
]

function App() {
  return (
    <div className="portfolio">
      <header className="header">
        <a className="logo" href="#home">
          TH
        </a>

        <nav className="navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="language-button" type="button">
          KO / EN
        </button>
      </header>

      <main>
        <section className="hero" id="home">
          <p className="hero-label">DATA ANALYSIS · AI PORTFOLIO</p>
          <h1>
            김태희
            <span>KIM TAEHEE</span>
          </h1>
        </section>

        <section className="about" id="about">
          <div className="section-heading">
            <p>01 · ABOUT</p>
            <h2>About Me</h2>
          </div>

          <div className="about-grid">
            <article className="about-card">
              <span>EDUCATION</span>
              <h3>이화여자대학교</h3>
              <p>통계학 전공 · 인공지능학 복수전공 · 수학과 부전공 </p>
            </article>

            <article className="about-card">
              <span>FOCUS</span>
              <h3>Data Analysis</h3>
              <p>데이터 분석</p>
            </article>

            <article className="about-card">
              <span>TOOLS</span>
              <h3>Python · R</h3>
              <p>데이터 분석 및 통계 프로그래밍</p>
            </article>
          </div>
        </section>
                <section className="projects" id="projects">
          <div className="section-heading">
            <p>02 · PROJECTS</p>
            <h2>Selected Projects</h2>
          </div>

          <div className="project-group">
            <div className="project-group-heading">
              <span>01</span>
              <div>
                <h3>전공 프로젝트</h3>
                <p>Academic Projects</p>
              </div>
            </div>

            <div className="project-grid">
              {academicProjects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div className="project-card-top">
                    <span>{project.course}</span>
                    <span className="project-arrow">↗</span>
                  </div>

                  <div className="project-title">
                    <h4>{project.title}</h4>
                    <p>{project.englishTitle}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="project-group">
            <div className="project-group-heading">
              <span>02</span>
              <div>
                <h3>대외 프로젝트</h3>
                <p>Competitions &amp; Hackathons</p>
              </div>
            </div>

            <div className="project-grid">
              {externalProjects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div className="project-card-top">
                    <span>{project.course}</span>
                    {project.status ? (
                      <span className="status">{project.status}</span>
                    ) : (
                      <span className="project-arrow">↗</span>
                    )}
                  </div>

                  <div className="project-title">
                    <h4>{project.title}</h4>
                    <p>{project.englishTitle}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App