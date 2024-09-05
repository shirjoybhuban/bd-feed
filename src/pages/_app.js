import { dm_sans, montserrat } from "@/lib/fonts";
import { store } from "@/redux-toolkit/store";
import "@/styles/globals.css";
import Head from "next/head";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <div className={`${dm_sans.variable} ${montserrat.variable} font-sans`}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </div>
    </>
  );
}
