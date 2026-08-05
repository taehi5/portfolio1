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
      </main>
    </div>
  )
}

export default App