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
          <div className={styles.labHeader}>

            <img 
            className={styles.lablogoIcon} 
            alt="로고이미지" 
            src={lab.logoUrl ? lab.logoUrl : '/SKKU.webp'}
            />

            <div className={styles.labInfo}>
              <b className={styles.labName}>
                <p className={styles.title}>{lab.name}</p>
              </b>
              <p className={styles.professorInfo}>
                <p className={styles.professorName}>교수 : {lab.professor}</p>
                <p className={styles.professorUrl}>
                  교수 Google Scholar : {lab.googleScholarUrl}
                </p>
                <p className={styles.represent}>대표자 : {lab.representativeName}</p>
                <p className={styles.representEmail}>대표자 이메일 : {lab.email}</p>
              </p>
              <a
                className={styles.labWebsite}
                href={lab.homepageUrl}
                target="_blank"
              >
                연구실 홈페이지 바로가기
              </a>
            </div>
            <div className={styles.labLocation}>
              <p className={styles.locationText}>{lab.campus}</p>
              <p className={styles.locationText1}>{lab.roomNo}</p>
            </div>
          </div>
          <div className={styles.labDescription}>
            <b className={styles.sectionTitle}>연구실 설명</b>
            <div className={styles.sectionContainer}>
              <p className={styles.descriptionText}>
                {lab.description}
              </p>
            </div>
          </div>
          <div className={styles.labDetails}>
            <div className={styles.labMembers}>
              <b className={styles.sectionTitle}>구성원</b>
              <div className={styles.sectionContainer}>
                <p className={styles.memberInfo}>
                  <p className={styles.memberText}><b>박사후연구원 : </b> {lab.numPostDoc} 명</p>
                  <p className={styles.memberText}><b>석박통합 / 박사과정생 : </b> {lab.numPhd} 명</p>
                  <p className={styles.memberText}><b>석사과정생 : </b> {lab.numMaster} 명</p>
                  <p className={styles.memberText}><b>학부연구생 : </b> {lab.numUnderGraduate} 명</p>
                </p>
              </div>
            </div>
            <div className={styles.labTags}>
              <b className={styles.sectionTitle}>연구실 태그</b>
              <div>
                <p className={styles.tagList}>
                  <p className={styles.tagText}>{lab.tags}</p>
                </p>
              </div>
            </div>
          </div>
          
        </div>
      )}
    </div> 
  );
};

export default LabDetail;
