import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Gauge Your Garden</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Gauge Your Garden" />
        <p className="description">
          Welcome to the app for plant lovers! I created this app to help my relatives who're interested in gardening.
          Here, you will be able to journal the data of your plant growth based on height which will be predicted for your future use.
          I am hoping to add two sections: One for plant information and the other for interacting with other gardeners.
        </p>
      </main>

      <Footer />
    </div>
  )
}
