import { useState, useCallback } from "react";
import AdminAccept from "../components/AdminAccept";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import ClubLogo from "../components/ClubLogo";
import Navigation1 from "../components/Navigation1";
import styles from "./ApplicationFormClub.module.css";

const ApplicationFormClub = () => {
  const [isAdminAcceptOpen, setAdminAcceptOpen] = useState(false);
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

  const openAdminAccept = useCallback(() => {
    setAdminAcceptOpen(true);
  }, []);

  const closeAdminAccept = useCallback(() => {
    setAdminAcceptOpen(false);
  }, []);

  const onLabTextClick = useCallback(() => {
    navigate("/application-form-lab");
  }, [navigate]);

  return (
    <>
      <div className={styles.applicationFormClub}>
        <div className={styles.clubMembers}>
          <div className={styles.clubMembersChild} />
          <b className={styles.b}>{`<구성원>`}</b>
          <b className={styles.b1}>동아리 구성원 (명)</b>
        </div>
        <div className={styles.clubPage}>
          <div className={styles.clubMembersChild} />
          <b className={styles.b}>{`<홈페이지 / sns>`}</b>
          <b className={styles.b1}>동아리 홈페이지 / sns</b>
        </div>
        <div className={styles.clubRepEmail}>
          <div className={styles.clubMembersChild} />
          <b className={styles.b}>{`<대표자 이메일 등 연락처>`}</b>
          <b className={styles.b1}>대표자 연락처</b>
        </div>
        <div className={styles.clubRepName}>
          <div className={styles.clubMembersChild} />
          <b className={styles.b}>{`<대표자 이름>`}</b>
          <b className={styles.b1}>대표자 이름</b>
        </div>
        <div className={styles.clubLocation}>
          <div className={styles.clubMembersChild} />
          <b className={styles.b}>{`<위치>`}</b>
          <b className={styles.b1}>동아리방 / 활동 장소 위치</b>
        </div>
        <div className={styles.clubTag}>
          <div className={styles.clubMembersChild} />
          <b className={styles.b}>{`<동아리 태그>`}</b>
          <b className={styles.b1}>동아리 태그</b>
        </div>
        <div className={styles.clubDescription}>
          <div className={styles.clubMembersChild} />
          <b className={styles.b}>{`<동아리 설명>`}</b>
          <b className={styles.b1}>동아리 설명</b>
        </div>
        <div className={styles.clubName}>
          <div className={styles.clubMembersChild} />
          <b className={styles.b}>{`<동아리 이름>`}</b>
          <b className={styles.b1}>동아리 이름</b>
        </div>
        <ClubLogo
          prop={`<동아리 로고 업로드 기능>`}
          prop1="동아리 로고"
          propTop="220px"
        />
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
        <div className={styles.labIdPassword}>
          <div className={styles.labIdPasswordChild} />
          <b className={styles.b14}>아이디</b>
          <b className={styles.b15}>{`<아이디>`}</b>
          <div className={styles.labIdPasswordItem} />
          <b className={styles.b16}>비밀번호</b>
          <b className={styles.b17}>{`<비밀번호>`}</b>
          <b className={styles.b1}>회원가입 아이디 및 비밀번호</b>
          <div className={styles.div} />
          <b className={styles.b19}>아이디 중복 확인</b>
        </div>
        <div className={styles.submit} onClick={openAdminAccept}>
          <b className={styles.b20}>제출</b>
        </div>
        <div className={styles.tab}>
          <b className={styles.club}>club</b>
          <div className={styles.lab} onClick={onLabTextClick}>
            lab
          </div>
        </div>
        <div className={styles.applicationFormClubChild} />
      </div>
      {isAdminAcceptOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAdminAccept}
        >
          <AdminAccept onClose={closeAdminAccept} />
        </PortalPopup>
      )}
    </>
  );
};

export default ApplicationFormClub;
