import { Inter } from "@next/font/google";
import styles from "@/styles/MenuBar.module.css";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

const MenuBar = () => {
  const router = useRouter();

  const handleClick = (route) => {
    router.push(route);
  };

  return (
    <div className={styles.header}>
      <h1 className={styles.title}>
        <button onClick={() => handleClick("/")}>Rens Pennings</button>
      </h1>
      <button onClick={() => handleClick("/about")} className={styles.card}>
        <h2 className={inter.className}>
          About <span>-&gt;</span>
        </h2>
      </button>

      <button onClick={() => handleClick("/projects")} className={styles.card}>
        <h2 className={inter.className}>
          Projects <span>-&gt;</span>
        </h2>
      </button>

      <button onClick={() => handleClick("/resume")} className={styles.card}>
        <h2 className={inter.className}>
          Resume <span>-&gt;</span>
        </h2>
      </button>

      <button onClick={() => handleClick("/contact")} className={styles.card}>
        <h2 className={inter.className}>
          Contact <span>-&gt;</span>
        </h2>
      </button>
    </div>
  );
};

export default MenuBar;
