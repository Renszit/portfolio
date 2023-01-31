import { Inter } from "@next/font/google";
import styles from "@/styles/MenuBar.module.css";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.active ? "palevioletred" : "white")};
  color: ${(props) => (props.active ? "white" : "palevioletred")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const MenuBar = () => {
  const router = useRouter();
  const [active, setActive] = useState("/");

  const handleClick = (route) => {
    setActive(route);
    router.push(route);
  };

  return (
    <div className={styles.header}>
      <h1 className={styles.title}>
        <Button active={active == "/"} onClick={() => handleClick("/")}>
          Rens Pennings
        </Button>
      </h1>
      <Button
        active={active == "/about"}
        onClick={() => handleClick("/about")}
        className={styles.card}
      >
        About
      </Button>

      <Button
        active={active == "/projects"}
        onClick={() => handleClick("/projects")}
        className={styles.card}
      >
        Projects
      </Button>

      <Button
        active={active == "/resume"}
        onClick={() => handleClick("/resume")}
        className={styles.card}
      >
        Resume
      </Button>

      <Button
        active={active == "/contact"}
        onClick={() => handleClick("/contact")}
        className={styles.card}
      >
        Contact
      </Button>
    </div>
  );
};

export default MenuBar;
