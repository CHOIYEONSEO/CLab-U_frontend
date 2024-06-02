import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navigation1 from "../components/Navigation1";
import styles from "./AdminPage.module.css";

const AdminPage = () => {
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

  const onClubNameContainerClick = useCallback(() => {
    navigate("/admin-club");
  }, [navigate]);

  const onClubNameContainer1Click = useCallback(() => {
    navigate("/admin-club");
  }, [navigate]);

  const onLabNameContainerClick = useCallback(() => {
    navigate("/admin-lab");
  }, [navigate]);

  const onLabNameContainer1Click = useCallback(() => {
    navigate("/admin-lab");
  }, [navigate]);

  return (
    <div className={styles.adminPage}>
      <div className={styles.clubName} onClick={onClubNameContainerClick}>
        <b className={styles.b}>동아리 이름</b>
        <b className={styles.b}>동아리 이름</b>
        <b className={styles.b}>동아리 이름</b>
        <b className={styles.yyyymmdd}>신청 일자: yyyy/mm/dd</b>
      </div>
      <div className={styles.clubName1} onClick={onClubNameContainer1Click}>
        <b className={styles.b}>동아리 이름</b>
        <b className={styles.b}>동아리 이름</b>
        <b className={styles.b}>동아리 이름</b>
        <b className={styles.yyyymmdd}>신청 일자: yyyy/mm/dd</b>
      </div>
      <div className={styles.labName} onClick={onLabNameContainerClick}>
        <b className={styles.b}>랩 이름</b>
        <b className={styles.yyyymmdd}>신청 일자: yyyy/mm/dd</b>
      </div>
      <div className={styles.labName1} onClick={onLabNameContainer1Click}>
        <b className={styles.b}>랩 이름</b>
        <b className={styles.yyyymmdd}>신청 일자: yyyy/mm/dd</b>
      </div>
      <div className={styles.labName2}>
        <b className={styles.b}>랩 이름</b>
        <b className={styles.yyyymmdd}>신청 일자: yyyy/mm/dd</b>
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
      <b className={styles.b9}>랩 신청 및 수정 목록</b>
      <b className={styles.b10}>동아리 신청 및 수정 목록</b>
    </div>
  );
};

export default AdminPage;
