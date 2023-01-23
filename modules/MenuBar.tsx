import { Inter } from "@next/font/google";
import styles from "@/styles/MenuBar.module.css";

const inter = Inter({ subsets: ["latin"] });

const MenuBar = () => {
  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>
          <a href="/">Rens Pennings</a>
        </h1>
        <a href="/about" className={styles.card} rel="noopener noreferrer">
          <h2 className={inter.className}>
            About <span>-&gt;</span>
          </h2>
        </a>

        <a href="/projects" className={styles.card} rel="noopener noreferrer">
          <h2 className={inter.className}>
            Projects <span>-&gt;</span>
          </h2>
        </a>

        <a href="/resume" className={styles.card} rel="noopener noreferrer">
          <h2 className={inter.className}>
            Resume <span>-&gt;</span>
          </h2>
        </a>

        <a href="/contact" className={styles.card} rel="noopener noreferrer">
          <h2 className={inter.className}>
            Contact <span>-&gt;</span>
          </h2>
        </a>
      </div>
    </div>
  );
};

export default MenuBar;
