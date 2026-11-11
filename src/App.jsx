import { useEffect, useState } from 'react'
import './App.css'
import { academicProjects, externalProjects } from './projects'

function App() {
  const [language, setLanguage] = useState('ko')
  const english = language === 'en'
  useEffect(() => {
    document.documentElement.lang = language
  }, [language])
  return (
    <div className="portfolio">
      <header className="header">
        <a className="logo" href="#home">
          TH
        </a>

        <nav className="navigation" aria-label={english ? 'Main navigation' : '주 메뉴'}>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="language-button" type="button" onClick={() => setLanguage(english ? 'ko' : 'en')} aria-label={english ? '한국어로 전환' : 'Switch to English'}>
          {english ? 'KO / EN ✓' : 'KO ✓ / EN'}
        </button>
      </header>

      <main>
        <section className="hero" id="home">
          <p className="hero-label">DATA ANALYSIS · AI PORTFOLIO</p>
          <h1>
            {english ? 'KIM TAEHEE' : '김태희'}
            <span>{english ? '김태희' : 'KIM TAEHEE'}</span>
          </h1>
          <p className="hero-description">{english ? 'Exploring data through statistics and artificial intelligence.' : '통계와 인공지능을 바탕으로 데이터를 탐구합니다.'}</p>
          <a className="primary-link" href="#projects">{english ? 'Explore projects' : '프로젝트 살펴보기'} <span aria-hidden="true">↓</span></a>
        </section>

        <section className="about" id="about">
          <div className="section-heading">
            <p>01 · ABOUT</p>
            <h2>About Me</h2>
          </div>

          <div className="about-grid">
            <article className="about-card">
              <span>EDUCATION</span>
              <h3>{english ? 'Ewha Womans University' : '이화여자대학교'}</h3>
              <p>{english ? 'Statistics major · Double major in Artificial Intelligence · Minor in Mathematics' : '통계학 전공 · 인공지능학 복수전공 · 수학과 부전공'}</p>
            </article>

            <article className="about-card">
              <span>FOCUS</span>
              <h3>Data Analysis</h3>
              <p>{english ? 'Statistics & artificial intelligence' : '통계와 인공지능을 활용한 데이터 분석'}</p>
            </article>

            <article className="about-card">
              <span>TOOLS</span>
              <h3>Python · R</h3>
              <p>{english ? 'Data analysis & statistical programming' : '데이터 분석 및 통계 프로그래밍'}</p>
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
                <h3>{english ? 'Academic Projects' : '전공 프로젝트'}</h3>
                <p>Academic Projects</p>
              </div>
            </div>

            <div className="project-grid">
              {academicProjects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div className="project-card-top">
                    <span>{english ? project.englishCourse : project.course}</span>
                  </div>

                  <div className="project-title">
                    <h4>{english ? project.englishTitle : project.title}</h4>
                    {!english && <p>{project.englishTitle}</p>}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="project-group">
            <div className="project-group-heading">
              <span>02</span>
              <div>
                <h3>{english ? 'Competitions & Hackathons' : '대외 프로젝트'}</h3>
                <p>Competitions &amp; Hackathons</p>
              </div>
            </div>

            <div className="project-grid">
              {externalProjects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div className="project-card-top">
                    <span>{english ? project.englishCourse : project.course}</span>
                    {project.status ? (
                      <span className="status">{english ? 'COMPLETED' : '종료'}</span>
                    ) : null}
                  </div>

                  <div className="project-title">
                    <h4>{english ? project.englishTitle : project.title}</h4>
                    {!english && <p>{project.englishTitle}</p>}
                    {project.result && <p className="project-result">{english ? project.englishResult : project.result}</p>}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="contact" id="contact">
          <div className="section-heading"><p>03 · CONTACT</p><h2>Let's connect.</h2></div>
          <p>{english ? 'Find my work and repositories on GitHub.' : 'GitHub에서 작업과 저장소를 확인할 수 있습니다.'}</p>
          <a className="primary-link" href="https://github.com/taehi5" target="_blank" rel="noreferrer">GitHub · @taehi5 <span aria-hidden="true">↗</span></a>
        </section>
      </main>
      <footer className="footer">© {new Date().getFullYear()} Kim Taehee</footer>
    </div>
  )
}

export default App
