import Transition from "@/components/Transition";
import MenuBar from "@/modules/MenuBar";
import "@/styles/globals.css";

import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence
      mode="wait"
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <Component {...pageProps} key={router.asPath} />
    </AnimatePresence>
  );
}
