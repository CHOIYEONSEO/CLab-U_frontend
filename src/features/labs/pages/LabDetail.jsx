import styles from "./LabDetail.module.css";
import { useParams } from "react-router-dom";
import { useFetchLab } from "../hooks/query";
import { useEffect } from "react";

const LabDetail = () => {
  const { labId } = useParams();

  const { data: lab, isLoading } = useFetchLab(labId);

  useEffect(() => {
    console.log(lab);
  }, [lab]);

  return (
    <div className={styles.labDetail}>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <div>
          <div className={styles.labInfo}>
            <img className={styles.lablogoIcon} alt="" src={lab.logoUrl}/>
            <div className={styles.labDetails}>
              <b className={styles.labName}>
                <p className={styles.hci}>{lab.name}</p>
              </b>
              <b className={styles.professorInfo}>
                <p className={styles.hci}>교수 : {lab.professor}</p>
                <p className={styles.hci}>
                  교수 Google Scholar : {lab.scholarUrl}
                </p>
                <p className={styles.p}>대표자 : {lab.represent}</p>
                <p className={styles.hci}>대표자 이메일 : {lab.email}</p>
              </b>
              <a
                className={styles.labWebsite}
                href={lab.homepageUrl}
                target="_blank"
              >
                연구실 홈페이지 바로가기
              </a>
              <b className={styles.labLocation}>{lab.campus} {lab.roomNo}</b>
            </div>
          </div>
          <div className={styles.labDescription}>
            <b className={styles.sectionTitle}>연구실 설명</b>
            <b className={styles.labDescriptionText}>
              <p className={styles.hci}>
                {lab.description}
              </p>
            </b>
          </div>
          <div className={styles.labMembers}>
            <b className={styles.sectionTitle}>구성원</b>
            <b className={styles.memberInfo}>
              <p className={styles.p}>박사후연구원 : {lab.numPostDoc} 명</p>
              <p className={styles.p}>석박통합 / 박사과정생 : {lab.numPhd} 명</p>
              <p className={styles.p}>석사과정생 : {lab.numMaster} 명</p>
              <p className={styles.p}>학부연구생 : {lab.numUnderGraduate} 명</p>
            </b>
          </div>
          <div className={styles.labTags}>
            <b className={styles.sectionTitle}>연구실 태그</b>
            <b className={styles.tagList}>
              <p className={styles.hci}>{lab.tags}</p>
            </b>
          </div>
        </div>
      )}
    </div> 
  );
};

export default LabDetail;
