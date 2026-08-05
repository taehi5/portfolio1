import './App.css'

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
      </main>
    </div>
  )
}

export default App