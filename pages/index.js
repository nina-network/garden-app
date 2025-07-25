import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Gauge Your Garden</title>
        <link rel="icon" href="/favicon_gyg.png" sizes="192x192" href="/favicon-192x192.png" />
      </Head>

      <main>
        <Header title="Gauge Your Garden" />
        <div className="description">
          <p>Welcome to the app for plant lovers!</p>
          <p>I created this app to help my relatives who're interested in gardening.</p>
          <p>Here, you will be able to journal the data of your plant growth based on height which will be predicted for your future use.</p>
          <p>This app will be mobile-friendly and include:</p>

          <ul>
            <li>Plant Information and Identification</li>
            <li>Journaling and Prediction</li>
            <li>Interaction with Other Users</li>
          </ul>
        </div>

      </main>

      <Footer />
    </div>
  )
}
