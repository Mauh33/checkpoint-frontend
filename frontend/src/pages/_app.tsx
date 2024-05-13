import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import client from "@/graphql/client";
import dynamic from "next/dynamic";
import Layout from "./Layout";
import { useEffect, useState } from "react";

function App({ Component, pageProps }: AppProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) return;


  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </ApolloProvider>
  );
}

// Disabling SSR
export default dynamic(() => Promise.resolve(App), { ssr: false });
