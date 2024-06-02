import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navigation1 from "../components/Navigation1";
import styles from "./ApplicationLogin.module.css";

const ApplicationLogin = () => {
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

  const onClabUTextClick = useCallback(() => {
    navigate("/main");
  }, [navigate]);

  const onLogoIconClick = useCallback(() => {
    navigate("/main");
  }, [navigate]);

  const onLogInContainerClick = useCallback(() => {
    navigate("/application-form-lab");
  }, [navigate]);

  return (
    <div className={styles.applicationLogin}>
      <div className={styles.boundary}>
        <b className={styles.b}>
          아이디와 비밀번호 찾기는 관리자에게 문의하세요
        </b>
      </div>
      <div className={styles.login} onClick={onLogInContainerClick}>
        <b className={styles.b1}>로그인</b>
      </div>
      <div className={styles.passwd}>
        <b className={styles.passwdInput}>비밀번호</b>
        <img className={styles.passwdIcon} alt="" src="/passwd-icon@2x.png" />
      </div>
      <div className={styles.id}>
        <b className={styles.idInput}>아이디</b>
        <img className={styles.idIcon} alt="" src="/id-icon@2x.png" />
      </div>
      <Navigation1
        logIn="/login@2x.png"
        account1="/account-1@2x.png"
        logo="/logo@2x.png"
        propWidth="1280px"
        propRight="unset"
        onApplicationContainerClick={onApplicationContainerClick}
        onListContainerClick={onListContainerClick}
        onSearchContainerClick={onSearchContainerClick}
        onClabUTextClick={onClabUTextClick}
        onLogoIconClick={onLogoIconClick}
      />
    </div>
  );
};

export default ApplicationLogin;
