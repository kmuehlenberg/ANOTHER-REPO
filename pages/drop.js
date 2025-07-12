import Head from 'next/head'
import Header from '../components/Header'

export default function Drop() {
  return (
    <div>
      <Head>
        <title>Luxe Drop | Valestra</title>
      </Head>

      <Header /> {/* ✅ This brings in the crest nav */}

      <main>
        <h1>Luxe Drop Countdown</h1>
        <div id="countdown">⏳ Drop ends in: <strong>02:00:00</strong></div>
      </main>
    </div>
  )
}
