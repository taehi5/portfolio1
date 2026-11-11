import { useEffect, useState } from 'react'
import './App.css'
import { academicProjects, externalProjects } from './projects'

const allProjects = [...academicProjects, ...externalProjects]

function App() {
  const [language, setLanguage] = useState('ko')
  const [hash, setHash] = useState(() => window.location.hash)
  const english = language === 'en'
  const detailRoute = hash.startsWith('#project/')
  const selectedProject = detailRoute
    ? allProjects.find((project) => `#project/${project.id}` === hash)
    : null
  useEffect(() => {
    const updateHash = () => setHash(window.location.hash)
    window.addEventListener('hashchange', updateHash)
    return () => window.removeEventListener('hashchange', updateHash)
  }, [])
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (detailRoute) {
        window.scrollTo({ top: 0, behavior: 'instant' })
        document.getElementById('project-heading')?.focus({ preventScroll: true })
      } else {
        document.getElementById(hash.slice(1) || 'home')?.scrollIntoView()
      }
    })
    return () => cancelAnimationFrame(frame)
  }, [hash, detailRoute])
  useEffect(() => {
    document.documentElement.lang = language
  }, [language])
  useEffect(() => {
    document.title = selectedProject
      ? `${english ? selectedProject.englishTitle : selectedProject.title} | Kim Taehee`
      : '김태희 | Data Analysis & AI Portfolio'
  }, [selectedProject, english])
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
        {detailRoute ? (
          <section className="project-detail">
            <a className="detail-back" href="#projects">← {english ? 'All projects' : '프로젝트 목록'}</a>
            {selectedProject ? (
              <>
                <p className="hero-label">{english ? selectedProject.englishCourse : selectedProject.course}</p>
                <h1 id="project-heading" tabIndex={-1}>{english ? selectedProject.englishTitle : selectedProject.title}</h1>
                {!english && <p className="detail-subtitle">{selectedProject.englishTitle}</p>}
                <div className="detail-body">
                  <section className="detail-overview">
                    <h2>{english ? 'Overview' : '프로젝트 소개'}</h2>
                    <p>{english ? selectedProject.englishSummary : selectedProject.summary}</p>
                  </section>
                  <dl className="detail-facts">
                    <div><dt>{english ? 'Category' : '분류'}</dt><dd>{academicProjects.includes(selectedProject) ? (english ? 'Academic project' : '전공 프로젝트') : (english ? 'Competition / hackathon' : '대외 프로젝트')}</dd></div>
                    <div><dt>{english ? 'Course / Activity' : '수업 / 활동'}</dt><dd>{english ? selectedProject.englishCourse : selectedProject.course}</dd></div>
                    {selectedProject.status && <div><dt>{english ? 'Status' : '상태'}</dt><dd>{english ? 'Completed' : '종료'}</dd></div>}
                    {selectedProject.result && <div><dt>{english ? 'Result' : '결과'}</dt><dd>{english ? selectedProject.englishResult : selectedProject.result}</dd></div>}
                  </dl>
                </div>
              </>
            ) : (
              <h1 id="project-heading" tabIndex={-1}>{english ? 'Project not found' : '프로젝트를 찾을 수 없습니다'}</h1>
            )}
          </section>
        ) : (
          <>
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
                <a className="project-card" href={`#project/${project.id}`} key={project.id}>
                  <div className="project-card-top">
                    <span>{english ? project.englishCourse : project.course}</span>
                    <span className="project-arrow" aria-hidden="true">↗</span>
                  </div>

                  <div className="project-title">
                    <h4>{english ? project.englishTitle : project.title}</h4>
                    {!english && <p>{project.englishTitle}</p>}
                  </div>
                </a>
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
                <a className="project-card" href={`#project/${project.id}`} key={project.id}>
                  <div className="project-card-top">
                    <span>{english ? project.englishCourse : project.course}</span>
                    {project.status ? (
                      <span className="status">{english ? 'COMPLETED' : '종료'}</span>
                    ) : <span className="project-arrow" aria-hidden="true">↗</span>}
                  </div>

                  <div className="project-title">
                    <h4>{english ? project.englishTitle : project.title}</h4>
                    {!english && <p>{project.englishTitle}</p>}
                    {project.result && <p className="project-result">{english ? project.englishResult : project.result}</p>}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
        <section className="contact" id="contact">
          <div className="section-heading"><p>03 · CONTACT</p><h2>Let's connect.</h2></div>
          <p>{english ? 'Find my work and repositories on GitHub.' : 'GitHub에서 작업과 저장소를 확인할 수 있습니다.'}</p>
          <a className="primary-link" href="https://github.com/taehi5" target="_blank" rel="noreferrer">GitHub · @taehi5 <span aria-hidden="true">↗</span></a>
        </section>
          </>
        )}
      </main>
      <footer className="footer">© {new Date().getFullYear()} Kim Taehee</footer>
    </div>
  )
}

export default App
