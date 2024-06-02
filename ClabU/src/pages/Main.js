import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navigation1 from "../components/Navigation1";
import styles from "./Main.module.css";

const Main = () => {
  const navigate = useNavigate();

  const onApplicationContainerClick = useCallback(() => {
    navigate("/application-login");
  }, [navigate]);

  const onListContainerClick = useCallback(() => {
    navigate("/club-list");
  }, [navigate]);

  const onSearchContainerClick = useCallback(() => {
    navigate("/search");
  }, [navigate]);

  const onIconClick = useCallback(() => {
    navigate("/search");
  }, [navigate]);

  return (
    <div className={styles.main}>
      <div className={styles.inputfield}>
        <b className={styles.typeHere}>
          무엇이든 물어보세요! (예시: "인공지능 분야 연구실 중 학부생 인턴
          모집하는 곳 있어요?")
        </b>
        <img
          className={styles.icon}
          alt=""
          src="/icon@2x.png"
          onClick={onIconClick}
        />
      </div>
      <Navigation1
        logIn="/login@2x.png"
        account1="/account-1@2x.png"
        logo="/logo@2x.png"
        propWidth="100%"
        propRight="0px"
        onApplicationContainerClick={onApplicationContainerClick}
        onListContainerClick={onListContainerClick}
        onSearchContainerClick={onSearchContainerClick}
      />
      <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
    </div>
  );
};

export default Main;
