import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Nook's Cranny</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='text-3xl font-semibold'>Hello</h1>
    </>
  )
}