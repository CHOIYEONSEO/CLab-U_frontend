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
            <img className={styles.lablogoIcon} alt="" src={club.logoUrl}/>
            <div className={styles.clubInfo}>
              <b className={styles.skkuding1}>
                <p className={styles.skkudingSkkuCoding}>{club.name}</p>
              </b>
              <a
                className={styles.httpswealthyHeliumFfenot}
                href={club.homepageUrl}
                target="_blank"
              >
                동아리 홈페이지 바로가기
              </a>
              <b className={styles.b4}>
                <p className={styles.p1}>대표자 : {club.represent}</p>
                <p
                  className={styles.skkudingSkkuCoding}
                >대표자 이메일 : {club.email}</p>
              </b>
              <b className={styles.b5}>{club.location}</b>
            </div>
          </div>
          <div className={styles.clubDescription}>
            <b className={styles.b1}>동아리 설명</b>
            <div className={styles.labdescription}>
              <b className={styles.skkudingSkkuCodingContainer}>
                <p className={styles.skkudingSkkuCoding}>
                  {club.description}
                </p>
              </b>
            </div>
          </div>
          <div className={styles.clubDetails}>
            <div className={styles.memberCount}>
              <b className={styles.b3}>구성원</b>
              <div className={styles.div} >
                <b className={styles.b}>{club.members}</b>
              </div>
            </div>
            <div className={styles.clubTags}>
              <b className={styles.b2}>동아리 태그</b>
              <div className={styles.div1} >
              <b className={styles.onlinejudge}>{club.tags}</b></div>
            </div>
          </div>
        </div>
      )}
     </div> 
  );
};

export default ClubDetail;
