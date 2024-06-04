import { Link } from "react-router-dom";
import styles from "./AdminPage.module.css";

const AdminPage = () => {

  return (
    <div className={styles.adminPage}>
      <b className={styles.clubManageList}>동아리 신청 및 수정 목록</b>
      <b className={styles.labManageList}>랩 신청 및 수정 목록</b>

      <div className={styles.clubManage}>
        <Link className={styles.clubName} to="/admin/clubs/1">
          <b className={styles.b}>동아리 이름</b>
          <b className={styles.yyyymmdd}>신청 일자: yyyy/mm/dd</b>
        </Link>
        <Link className={styles.clubName1} to="/admin/clubs/1">
          <b className={styles.b}>동아리 이름</b>
          <b className={styles.yyyymmdd}>신청 일자: yyyy/mm/dd</b>
        </Link>
      </div>
      
      <div className={styles.labManage}>
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
      </div>
    </div>
  );
};

export default AdminPage;
