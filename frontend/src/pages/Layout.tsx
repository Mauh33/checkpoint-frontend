import Head from "next/head";
import Header from "../components/Header";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <meta name="description" content="Api de renseignements de Pays" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main className="main-content">{children}</main>
    </>
  );
}
