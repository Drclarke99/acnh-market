import Header from "@/components/Header";
import Search from "@/components/Search";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home - Nook's Cay</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <div>
          <h1>Welcome to Nook's Cay</h1>
          <h3>The #1 fish market in New Horizons</h3>
        </div>
        <Search />
      </main>
    </div>
  );
}
