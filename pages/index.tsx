import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import MenuBar from "@/modules/MenuBar";
import Transition from "@/components/Transition";

export default function Home() {
  return (
    <Transition>
      <div className="page">
        <Head>
          <title>Rens Pennings portfolio</title>
          <meta name="description" content="Portfolio of Rens Pennings" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;400;500;600;800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <main className={styles.main}>
          <MenuBar />
        </main>
      </div>
    </Transition>
  );
}
