import Header from '../components/Header'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Valestra | Luxe Gifting</title>
      </Head>

      <Header /> {/* ✅ THIS activates your luxe crest/nav */}

      <main>
        <h2>Welcome to the Vault</h2>
        <p>Luxury gift bundles. Prestige-only access.</p>
        <ul>
          <li>🕰️ Artisan Watch + Candle Bundle — <strong>$349</strong></li>
          <li>💎 Prestige Chest: Ring, Watch, Silk Pillow — <strong>$525</strong></li>
          <li>🛁 Goddess Ritual Spa Kit — <strong>$299</strong></li>
        </ul>
      </main>
    </div>
  )
}
