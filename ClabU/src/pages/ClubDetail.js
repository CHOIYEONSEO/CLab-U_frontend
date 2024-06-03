import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navigation1 from "../components/Navigation1";
import styles from "./ClubDetail.module.css";

const ClubDetail = () => {
  const navigate = useNavigate();

  const onApplicationContainerClick = useCallback(() => {
    navigate("/application-form-lab");
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

  const onInstanceClick = useCallback(() => {
    navigate("/club-detail");
  }, [navigate]);

  const onLabDescriptionClick = useCallback(() => {
    navigate("/club-detail");
  }, [navigate]);

  const onInstance1Click = useCallback(() => {
    navigate("/club-detail");
  }, [navigate]);

  const onLabLogoImageClick = useCallback(() => {
    navigate("/club-detail");
  }, [navigate]);

  return (
    <div className={styles.clubDetail}>
      <Navigation1
        logIn="/login@2x.png"
        account1="/account-1@2x.png"
        logo="/logo@2x.png"
        propWidth="100%"
        propRight="0px"
        onApplicationContainerClick={onApplicationContainerClick}
        onListContainerClick={onListContainerClick}
        onSearchContainerClick={onSearchContainerClick}
        onClabUTextClick={onClabUTextClick}
        onLogoIconClick={onLogoIconClick}
      />
      <div className={styles.clubHeader}>
        <img
          className={styles.lablogoIcon}
          alt=""
          src="/lablogo@2x.png"
          onClick={onLabLogoImageClick}
        />
        <div className={styles.clubInfo}>
          <b className={styles.skkuding1}>
            <p className={styles.skkudingSkkuCoding}>스꾸딩</p>
            <p className={styles.skkudingSkkuCoding}>SKKUDING</p>
          </b>
          <a
            className={styles.httpswealthyHeliumFfenot}
            href="https://wealthy-helium-ffe.notion.site/2023-1-SKKUDING-fbfacf1d414d4057953cebbd42b44987"
            target="_blank"
          >
            https://wealthy-helium-ffe.notion.site/2023-1-SKKUDING-fbfacf1d414d4057953cebbd42b44987
          </a>
          <b className={styles.b4}>
            <p className={styles.p1}>{`대표자              : <대표자 이름>`}</p>
            <p
              className={styles.skkudingSkkuCoding}
            >{`대표자 이메일 : <대표자 이메일>`}</p>
          </b>
          <b className={styles.b5}>{`<동아리 활동 장소>`}</b>
        </div>
      </div>
      <div className={styles.clubDescription}>
        <b className={styles.b1}>동아리 설명</b>
        <div className={styles.labdescription} onClick={onLabDescriptionClick} />
        <b className={styles.skkudingSkkuCodingContainer}>
          <p className={styles.skkudingSkkuCoding}>
            SKKUDING은 SKKU와 Coding을 합친 이름으로, 
            <a
              className={styles.codedang}
              href="https://www.notion.so/2023-1-SKKUDING-fbfacf1d414d4057953cebbd42b44987?pvs=21"
              target="_blank"
            >
              <span className={styles.codedang1}>
                Codedang 웹사이트 개발 프로젝트
              </span>
            </a>
            를 주도적으로 진행하고 있는 성균관대학교 소프트웨어융합대학 소속
            동아리입니다.
          </p>
          <p className={styles.skkudingSkkuCoding}>
            2020년 소프트웨어융합대학 알고리즘 동아리인 NPC 소속 개발팀에서 처음
            시작하여 2022년 2월에 공식적으로 SKKUDING 동아리로 분리되었습니다.
          </p>
          <p className={styles.skkudingSkkuCoding}>
            SKKUDING은 사람들과 함께하며 성장하는 것을 주된 목표로 활동하고
            있습니다. SKKUDING은 학생들이 접하기 어려운 큰 규모의 프로젝트에
            참가한다는 경험을 의의로 합니다.
          </p>
        </b>
      </div>
      <div className={styles.clubDetails}>
        <div className={styles.memberCount}>
          <b className={styles.b3}>구성원</b>
          <div className={styles.div} onClick={onInstanceClick} />
          <b className={styles.b}>{`<구성원(명)>`}</b>
        </div>
        <div className={styles.clubTags}>
          <b className={styles.b2}>동아리 태그</b>
          <div className={styles.div1} onClick={onInstance1Click} />
          <b className={styles.onlinejudge}>#코딩 #알고리즘 #onlineJudge #개발</b>
        </div>
      </div>
    </div>
  );
};

export default ClubDetail;