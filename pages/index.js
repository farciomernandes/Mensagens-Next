import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Frase do Legais</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Bem vindo ao Frases do Legais!
        </h1>

        <p className="description">
            O melhor local para encontrar frases motivacionais! <br />
            Clique abaixo e veja uma!
        </p>

          <a className="card" href="/mensagem">
            Quero uma frase!
          </a>
      </main>

      <footer>
        <a
          href="https://github.com/farciomernandes"
          target="_blank"
          rel="noopener noreferrer"
        >
          Copyright ©2020 by Marcio Fernandes
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

    
        
        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }
        
        .card {
          
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
          position: relative;
          top:100px;
        }

        .card:hover,
        .card:focus,
        .card:active {
          widht:200px
          height:100px;
          color: #0070f3;
          border-color: #0070f3;
        }
        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }


      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

      `}</style>
    </div>
  )
}
