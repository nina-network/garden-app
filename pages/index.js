import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Gauge Your Garden</title>
        <link rel="icon" href="/favicon_gyg.ico" />
      </Head>

      <main>
        <Header title="Gauge Your Garden" />
        <p className="description">
          Welcome to the app for plant lovers! 
          <br/>
          I created this app to help my relatives who're interested in gardening.
          <br/>
          Here, you will be able to journal the data of your plant growth based on height which will be predicted for your future use.
          <br/>
          This app will be mobile-friendly and include:

          <ul/>Plant Information and Identification
          <ul/>Journaling and Prediction
          <ul/>Interaction with Other Users
        </p>
      </main>

      <Footer />
    </div>
  )
}
