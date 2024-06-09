import styles from "./ClubDetail.module.css";
import { useParams } from "react-router-dom";
import { useFetchClub } from "../hooks/query";
import { useEffect } from "react";


const ClubDetail = () => {
  
// 컴포넌트 안에서 데이터를 변수에 담고 확인
  const { clubId } = useParams();

  const { data: club, isLoading } = useFetchClub(clubId);

  useEffect(() => {
    console.log(club);
  }, [club]);

  return (
    <div className={styles.clubDetail}>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <div>
          <div className={styles.clubHeader}>

            <img 
            className={styles.clublogoIcon} 
            alt="로고이미지" 
            src={club.logoUrl ? club.logoUrl : '/SKKU.webp'}
            />

            <div className={styles.clubInfo}>
              <b className={styles.clubName}>
                <p className={styles.title}>{club.name}</p>
              </b>
              <p className={styles.representInfo}>
                <p className={styles.represent}>대표자 : {club.representativeName}</p>
                <p className={styles.representEmail}>대표자 이메일 : {club.email}</p>
              </p>
              <a
                className={styles.clubWebsite}
                href={club.homepageUrl}
                target="_blank"
              >
                동아리 홈페이지 바로가기
              </a>
            </div>
            <div className={styles.clubLocation}>
              <p className={styles.locationText}>{club.location}</p>
            </div>
          </div>
          <div className={styles.clubDescription}>
            <b className={styles.sectionTitle}>동아리 설명</b>
            <div className={styles.sectionContainer}>
              <p className={styles.descriptionText}>
                {club.description}
              </p>
            </div>
          </div>
          <div className={styles.clubDetails}>
            <div className={styles.clubMembers}>
              <b className={styles.sectionTitle}>구성원</b>
              <div className={styles.sectionContainer1} >
                <p className={styles.memberText}>{club.numMembers} 명</p>
              </div>
            </div>
            <div className={styles.clubTags}>
              <b className={styles.sectionTitle}>동아리 태그</b>
              <div className={styles.tagList} >
                <p className={styles.tagText}>{club.tags}</p>
              </div>
            </div>
          </div>
        </div>
      )}
     </div> 
  );
};

export default ClubDetail;
