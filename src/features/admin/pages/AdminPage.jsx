import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "../../../components/navigation/Navigation";
import styles from "./AdminPage.module.css";

const AdminPage = () => {
  const navigate = useNavigate();

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
      <Link className={styles.clubName} to="/admin/clubs/1">
        <b className={styles.b}>동아리 이름</b>
        <b className={styles.b}>동아리 이름</b>
        <b className={styles.b}>동아리 이름</b>
        <b className={styles.yyyymmdd}>신청 일자: yyyy/mm/dd</b>
      </Link>
      <Link className={styles.clubName1} to="/admin/clubs/1">
        <b className={styles.b}>동아리 이름</b>
        <b className={styles.b}>동아리 이름</b>
        <b className={styles.b}>동아리 이름</b>
        <b className={styles.yyyymmdd}>신청 일자: yyyy/mm/dd</b>
      </Link>
      <Link className={styles.labName} to="/admin/labs/1">
        <b className={styles.b}>랩 이름</b>
        <b className={styles.yyyymmdd}>신청 일자: yyyy/mm/dd</b>
      </Link>
      <Link className={styles.labName1} to="/admin/labs/1">
        <b className={styles.b}>랩 이름</b>
        <b className={styles.yyyymmdd}>신청 일자: yyyy/mm/dd</b>
      </Link>
      <Link className={styles.labName2} to="/admin/labs/1">
        <b className={styles.b}>랩 이름</b>
        <b className={styles.yyyymmdd}>신청 일자: yyyy/mm/dd</b>
      </Link>
      <b className={styles.b9}>랩 신청 및 수정 목록</b>
      <b className={styles.b10}>동아리 신청 및 수정 목록</b>
    </div>
  );
};

export default AdminPage;
