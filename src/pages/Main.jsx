import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Main.module.css";
import { useNavigateToSearch } from "../features/chat/hooks/navigate";

const Main = () => {
  const navigateToSearch = useNavigateToSearch();
  const [question, setQuestion] = useState("");

  const navigateWithQuery = () => {
    navigateToSearch(question);
  };

  const activeEnter = (e) => {
    if (e.key === "Enter") {
      navigateWithQuery();
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.inputfield}>
        <input
          className={styles.typeHere}
          placeholder="무엇이든 물어보세요!"
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => activeEnter(e)}
        />
        <img
          className={styles.icon}
          alt=""
          src="/icon@2x.png"
          onClick={navigateWithQuery}
        />
      </div>
      <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
    </div>
  );
};

export default Main;
