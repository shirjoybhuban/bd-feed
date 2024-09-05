import Layout from "@/components/layouts";
import HomeView from "@/views/home";
import Head from "next/head";

export default function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Home | RDT</title>
        <meta name="description" content="Home page of RDT" />
        <meta property="og:title" content="RDT is Cool" />
        <meta property="og:description" content="RDT is Super cool" />
        <meta property="og:image" content="https://c.files.bbci.co.uk/31F0/production/_117548721_nfts2.jpg" />
        {/* We can add more attributes and details for SEO */}
      </Head>
      <HomeView />
    </Layout>
  );
}

