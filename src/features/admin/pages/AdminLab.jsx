import { useCallback, useState } from "react";
import AdminAccept from "../../../components/AdminAccept";
import AdminReject from "../../../components/AdminReject";
import ClubLogo from "../../../components/ClubLogo";
import PortalPopup from "../../../components/PortalPopup";
import styles from "./AdminLab.module.css";

const AdminLab = () => {
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

  const [labform, setLabForm] = useState({
    logo: "",
    labName: "",
    description: "",
    labTags: "",
    labLocation: "",
    professor: "",
    professorGoogleScholar: "",
    representativeName: "",
    representativeContact: "",
    website: "",
    postdocs: "",
    phdStudents: "",
    mastersStudents: "",
    undergradResearchers: "",
    username: "",
    password: "",
  });

  return (
    <>
      <div className={styles.adminLab}>
        <div className={styles.accept} onClick={openAdminAccept}>
          <b className={styles.bacc}>승인</b>
        </div>
        <div className={styles.reject} onClick={openAdminReject}>
          <b className={styles.brej}>반려</b>
        </div>
        <div className={styles.labLocation}>
          <div className={styles.profNameChild} />
          <b
            className={styles.b2}
          >{`<연구실 위치>`}</b>
          <b className={styles.googleScolar}>연구실 위치</b>
        </div>
        <div className={styles.labName}>
          <div className={styles.profNameChild} />
          <b className={styles.b2}>{`<연구실 이름>`}</b>
          <b className={styles.googleScolar}>연구실 이름</b>
        </div>
        <ClubLogo
          prop={`<연구실 로고 업로드 기능>`}
          prop1="연구실 로고"
          propTop="103px"
        />
        <div className={styles.profName}>
          <div className={styles.profNameChild} />
          <b className={styles.b2}>{`<교수>`}</b>
          <b className={styles.b3}>교수</b>
        </div>
        <div className={styles.labTag}>
          <div className={styles.profNameChild} />
          <b className={styles.b2}>{`<연구실 태그>`}</b>
          <b className={styles.googleScolar}>연구실 태그</b>
        </div>
        <div className={styles.labDescription}>
          <div className={styles.profNameChild} />
          <b className={styles.b2}>{`<연구실 설명>`}</b>
          <b className={styles.googleScolar}>
            연구실 설명
          </b>
        </div>
        <div className={styles.labRepName}>
          <div className={styles.profNameChild} />
          <b className={styles.b2}>{`<대표자 이름>`}</b>
          <b className={styles.googleScolar}>대표자 이름</b>
        </div>
        <ClubLogo
          prop={`<연구실 로고 업로드 기능>`}
          prop1="연구실 로고"
          propTop="103px"
        />
        <div className={styles.profName2}>
          <div className={styles.profNameChild} />
          <b className={styles.b2}>{`<교수 Google scolar 링크>`}</b>
          <b className={styles.googleScolar}>교수 Google scolar 링크</b>
        </div>
        <div className={styles.labMembers}>
          <div className={styles.labMembersChild} />
          <b className={styles.b25}>{`<학부연구생>`}</b>
          <b className={styles.b26}>학부연구생</b>
          <div className={styles.labMembersItem} />
          <b className={styles.b27}>{`<석사>`}</b>
          <b className={styles.b28}>석사과정</b>
          <div className={styles.labMembersInner} />
          <b className={styles.b29}>{`<박사 / 석박>`}</b>
          <b className={styles.b30}>박사과정 / 석박 통합</b>
          <div className={styles.lineDiv} />
          <b className={styles.b31}>{`<포닥>`}</b>
          <b className={styles.b32}>포닥</b>
          <b className={styles.googleScolar}>연구실 구성원 (명)</b>
        </div>
        <div className={styles.labPage}>
          <div className={styles.profNameChild} />
          <b className={styles.b2}>{`<홈페이지>`}</b>
          <b className={styles.googleScolar}>홈페이지 주소</b>
        </div>
        <div className={styles.labRepEmail}>
          <div className={styles.profNameChild} />
          <b className={styles.b2}>{`<대표자 이메일 등 연락처>`}</b>
          <b className={styles.googleScolar}>대표자 연락처</b>
        </div>
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

export default AdminLab;
