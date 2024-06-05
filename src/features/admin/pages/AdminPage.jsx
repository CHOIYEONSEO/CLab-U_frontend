import { Link } from "react-router-dom";
import styles from "./AdminPage.module.css";
import { useState } from 'react';
import { useFetchClubs } from "../hooks/query";

const AdminPage = () => {

  const { data: submittedCList, isLoading } = useFetchClubs();

  const [submittedLList, setSubmittedLList] = useState([
    {
      id: 1,
      name: "연구실 1",
      sDate: "2024-06-01"
    },
    {
      id: 2,
      name: "연구실 2",
      sDate: "2024-06-02"
    }
  ])

  return (
    <div className={styles.adminPage}>
      <b className={styles.clubManageList}>동아리 신청 및 수정 목록</b>
      <b className={styles.labManageList}>랩 신청 및 수정 목록</b>

      <div className={styles.clubManage}>
        {/*submittedCList.map(
          (club, index) => (
          <Link 
            key={index} 
            className={styles.clubName} 
            to="/admin/clubs/1"
            state={club.name}
            >
            <b className={styles.b}>{club.name}</b>
            <b className={styles.yyyymmdd}>신청 일자: {club.sDate}</b>
          </Link>)
        )*/}
      </div>
      
      <div className={styles.labManage}>
        {submittedLList.map(
          (lab, index) => (
          <Link 
          key={index} 
          className={styles.labName} 
          to="/admin/labs/1"
          state={lab.name}
          >
            <b className={styles.b}>{lab.name}</b>
            <b className={styles.yyyymmdd}>신청 일자: {lab.sDate}</b>
          </Link>)
        )}
      </div>
    </div>
  );
};

export default AdminPage;
