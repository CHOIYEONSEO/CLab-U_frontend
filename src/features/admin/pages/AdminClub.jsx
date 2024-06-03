import { useCallback, useState } from "react";
import AdminAccept from "../../../components/AdminAccept";
import AdminReject from "../../../components/AdminReject";
import ClubLogo from "../../../components/ClubLogo";
import PortalPopup from "../../../components/PortalPopup";
import styles from "./AdminClub.module.css";

const AdminClub = () => {
  const [isAdminAcceptOpen, setAdminAcceptOpen] = useState(false);
  const [isAdminRejectOpen, setAdminRejectOpen] = useState(false);

  const openAdminAccept = useCallback(() => {
    setAdminAcceptOpen(true);
  }, []);

  const closeAdminAccept = useCallback(() => {
    setAdminAcceptOpen(false);
  }, []);

  const openAdminReject = useCallback(() => {
    setAdminRejectOpen(true);
  }, []);

  const closeAdminReject = useCallback(() => {
    setAdminRejectOpen(false);
  }, []);

  return (
    <>
      <div className={styles.adminClub}>
        <div className={styles.clubMembers}>
          <div className={styles.clubMembersChild} />
          <b className={styles.b}>{`<구성원>`}</b>
          <b className={styles.b1}>동아리 구성원 (명)</b>
        </div>
        <div className={styles.accept} onClick={openAdminAccept}>
          <b className={styles.b2}>승인</b>
        </div>
        <div className={styles.reject} onClick={openAdminReject}>
          <b className={styles.b2}>반려</b>
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
        <ClubLogo prop={`<동아리 로고 업로드 기능>`} prop1="동아리 로고" />
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
      {isAdminRejectOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAdminReject}
        >
          <AdminReject onClose={closeAdminReject} />
        </PortalPopup>
      )}
    </>
  );
};

export default AdminClub;
