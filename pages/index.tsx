import Header from '@/components/Header'
import Search from '@/components/Search'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Nook's Cay - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      
      <main>
        <h1>Welcome to Nook's Cay</h1>
        <h3>The #1 resource for your fishing needs</h3>
        <Search />
      </main>
    </>
  )
}
