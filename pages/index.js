import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Gauge Your Garden" />
        <p className="description">
          Welcome to the app for plant lovers! I created this app to help my reltives who're interested in gardening.
          Here, you will be able to journal the data of your plant growth based on height which will be predicted for your future use.
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
