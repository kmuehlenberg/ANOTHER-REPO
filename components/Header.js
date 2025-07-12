
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header style={{
      backgroundColor: '#000',
      color: 'gold',
      padding: '1rem 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Image src="/valestra-crest.svg" alt="Valestra Crest" width={40} height={40} />
        <h1 style={{ marginLeft: '1rem', fontSize: '1.5rem' }}>Valestra</h1>
      </div>
      <nav>
        <Link href="/"><span className="nav-link">Home</span></Link>
        <Link href="/drop"><span className="nav-link">Luxe Drop</span></Link>
        <Link href="/ambassador"><span className="nav-link">Ambassador</span></Link>
      </nav>
      <style jsx>{`
        .nav-link {
          margin-left: 1.5rem;
          color: gold;
          text-decoration: none;
          font-weight: bold;
          transition: color 0.3s;
        }
        .nav-link:hover {
          color: white;
        }
      `}</style>
    </header>
  )
}
