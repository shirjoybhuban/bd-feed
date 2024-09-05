import Layout from "@/components/layouts";
import HomeView from "@/views/home";
import Head from "next/head";

export default function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Home | BD-FEED</title>
        <meta name="description" content="Home page of BD-Feed" />
        <meta property="og:title" content="BD-Feed is Cool" />
        <meta property="og:description" content="BD-FEED is Super cool" />
        <meta property="og:image" content="img" />
        {/* We can add more attributes and details for SEO */}
      </Head>
      <HomeView />
    </Layout>
  );
}

