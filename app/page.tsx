export default function Home() {
  return (
    <main className="home">
      <div className="home-inner">
        <header className="home-header">
          <span className="home-mark" aria-label="Fabricio Secondo">fs<span>.</span></span>
          <span className="home-domain">fsecondo.dev</span>
        </header>
        <section className="home-intro" aria-labelledby="intro-title">
          <p className="home-greeting">Hola, soy Fabricio.</p>
          <h1 id="intro-title">Desarrollador<br />de software<span>.</span></h1>
          <p className="home-description">Esta es mi web, un pequeño espacio en internet para presentarme.</p>
          <a className="home-link" href="https://www.linkedin.com/in/fabricio-secondo-a22262231/" target="_blank" rel="noopener noreferrer">
            Encontrame en LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </section>
        <footer className="home-footer"><span>Fabricio Secondo</span><span>Montevideo, Uruguay</span></footer>
      </div>
    </main>
  );
}
