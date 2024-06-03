import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navigation1 from "../components/Navigation1";
import styles from "./LabDetail.module.css";

const LabDetail = () => {
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

  return (
    <div className={styles.labDetail}>
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
      <div className={styles.labInfo}>
        <img
          className={styles.lablogoIcon}
          alt=""
          src="/lablogo@2x.png"
        />
        <div className={styles.labDetails}>
          <b className={styles.labName}>
            <p className={styles.hci}>{`자연어처리연구실 `}</p>
            <p className={styles.naturalLanguageProcessing}>
              Natural Language Processing Labatory
            </p>
          </b>
          <b className={styles.professorInfo}>
            <p className={styles.hci}>교수 : 고영중 교수</p>
            <p
              className={styles.hci}
            >{`교수 Google Scholar: https://scholar.google.com/citations?user=VQeFpwsAAAAJ&hl=en&oi=sra`}</p>
            <p className={styles.p}>대표자 : 고영중 교수</p>
            <p className={styles.hci}>대표자 이메일 : yjko@skku.edu</p>
          </b>
          <b className={styles.labWebsite}>
            https://nlplab-skku.github.io
          </b>
          <b className={styles.labLocation}>자연과학캠퍼스 86401호</b>
        </div>
      </div>
      <div className={styles.labDescription}>
        <b className={styles.sectionTitle}>연구실 설명</b>
        <b className={styles.labDescriptionText}>
          <p
            className={styles.hci}
          >{`성균관대학교 소프트웨어학과 "자연어 처리 연구실"은 2019년 고영중 교수님과 함께 그 첫 발을 내딛었습니다. 자연어 처리 연구를 통하여 HCI의 편리함과 향상된 인공지능 기술을 제공하여 삶의 질을 높이는 것을 목표로 합니다. `}</p>
          <p className={styles.hci}>&nbsp;</p>
          <p className={styles.hci}>
            본 연구실은 형태소 분석, 의존파서, 띄어쓰기, 개체명 인식 등과 같은
            자연어 처리 기반 시스템을 비롯하여, 문서 분류, 문장 분류, 감정 분류,
            비교 문장 분석, 정보 검색, 대화 시스템 등과 같은 자연어 처리 응용
            시스템까지 다양한 분야의 연구를 진행 중입니다. 성균관대학교 자연어
            처리 연구실은 교수님과 연구원이 함께 목표를 바라보며 계속 노력해 나갈
            것입니다. 자세한 연구실 설명은 정보과학회 레터 
            <a
              className={styles.a}
              href="https://nlplab-skku.github.io/AboutUs/AIsociety_11.pdf"
              target="_blank"
            >
              <span className={styles.span}>AI 소사이어티[11호]</span>
            </a>
            에 실린 소개 글 및 성균웹진에 올라온 
            <a
              className={styles.a}
              href={`https://webzine.skku.edu/skkuzine/section/culture03.do?articleNo=100150&article.offset=0&articleLimit=10`}
              target="_blank"
            >
              <span className={styles.span}>연구실 탐방글</span>
            </a>
            을 통해 확인하실 수 있습니다.
          </p>
        </b>
      </div>
      <div className={styles.labMembers}>
        <b className={styles.sectionTitle}>구성원</b>
        <b className={styles.memberInfo}>
          <p className={styles.p}>박사후연구원 : - 명</p>
          <p className={styles.p}>석박통합 / 박사과정생 : 2 명</p>
          <p className={styles.p}>석사과정생 : 11 명</p>
          <p className={styles.p}>학부연구생 : 5 명</p>
        </b>
      </div>
      <div className={styles.labTags}>
        <b className={styles.sectionTitle}>연구실 태그</b>
        <b className={styles.tagList}>
          <p
            className={styles.hci}
          >{`#자연어처리 #지능형대화 #감정분류 #텍스트마이닝 #지능형정보검색 `}</p>
          <p className={styles.hci}>#비교마이닝 #인공신경망 #기계학습</p>
        </b>
      </div>
    </div>
  );
};

export default LabDetail;