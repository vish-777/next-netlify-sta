import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>My Next.js App</title>
        <meta name="description" content="Welcome to my bot" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Header title="Welcome to My Next.js App!" />
      </header>

      <main>
        <section className="hero">
          <p className="description">
            Get started by editing <code>pages/index.js</code>
          </p>
          <button onClick={() => alert('Navigate to another page')}>Learn More</button>
        </section>

        <section className="chatbot">
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/cnH3n7PNlIvHemK8DFVDy"
            width="100%"
            style="height: 100%; min-height: 700px"
            frameborder="0"
          ></iframe>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 0 2rem;
        }

        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .hero {
          text-align: center;
          margin-top: 2rem;
        }

        .description {
          font-size: 1.2rem;
          margin: 1rem 0;
        }

        button {
          padding: 0.5rem 1rem;
          font-size: 1rem;
          color: white;
          background-color: #0070f3;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        button:hover {
          background-color: #005bb5;
        }

        .chatbot {
          width: 100%;
          margin-top: 2rem;
        }
      `}</style>
    </div>
  );
}
