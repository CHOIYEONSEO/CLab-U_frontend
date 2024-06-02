import { useState, useCallback } from "react";
import AdminAccept from "../components/AdminAccept";
import PortalPopup from "../components/PortalPopup";
import AdminReject from "../components/AdminReject";
import { useNavigate } from "react-router-dom";
import ClubLogo from "../components/ClubLogo";
import Navigation1 from "../components/Navigation1";
import styles from "./AdminLab.module.css";

const AdminLab = () => {
  const [isAdminAcceptOpen, setAdminAcceptOpen] = useState(false);
  const [isAdminRejectOpen, setAdminRejectOpen] = useState(false);
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

  const onApplicationContainer2Click = useCallback(() => {
    navigate("/application-login");
  }, [navigate]);

  const onListContainer2Click = useCallback(() => {
    navigate("/club-list");
  }, [navigate]);

  const onSearchContainer2Click = useCallback(() => {
    navigate("/search");
  }, [navigate]);

  const onClabUText2Click = useCallback(() => {
    navigate("/main");
  }, [navigate]);

  const onLogoIcon2Click = useCallback(() => {
    navigate("/main");
  }, [navigate]);

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
      <div className={styles.adminLab}>
        <div className={styles.accept} onClick={openAdminAccept}>
          <b className={styles.b}>승인</b>
        </div>
        <div className={styles.reject} onClick={openAdminReject}>
          <b className={styles.b}>반려</b>
        </div>
        <div className={styles.profName}>
          <div className={styles.profNameChild} />
          <b className={styles.b2}>{`<교수>`}</b>
          <b className={styles.b3}>교수</b>
        </div>
        <div className={styles.labLocation}>
          <div className={styles.profNameChild} />
          <b
            className={styles.b2}
          >{`<좌: (드랍다운, 토글 등으로 인자캠 선택), 우: 방 번호 텍스트 입력란>`}</b>
          <b className={styles.googleScolar}>연구실 위치</b>
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
            연구실 설명(현재 진행 중인 연구 과제 중심으로 작성)
          </b>
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
        <Navigation1
          logIn="/login@2x.png"
          account1="/account-1@2x.png"
          logo="/logo@2x.png"
          propWidth="1280px"
          propRight="unset"
          onApplicationContainerClick={onApplicationContainerClick}
          onListContainerClick={onListContainerClick}
          onSearchContainerClick={onSearchContainerClick}
          onClabUTextClick={onClabUTextClick}
          onLogoIconClick={onLogoIconClick}
        />
        <div className={styles.profName}>
          <div className={styles.profNameChild} />
          <b className={styles.b2}>{`<교수>`}</b>
          <b className={styles.b3}>교수</b>
        </div>
        <div className={styles.labLocation}>
          <div className={styles.profNameChild} />
          <b
            className={styles.b2}
          >{`<좌: (드랍다운, 토글 등으로 인자캠 선택), 우: 방 번호 텍스트 입력란>`}</b>
          <b className={styles.googleScolar}>연구실 위치</b>
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
            연구실 설명(현재 진행 중인 연구 과제 중심으로 작성)
          </b>
        </div>
        <div className={styles.labName}>
          <div className={styles.profNameChild} />
          <b className={styles.b2}>{`<연구실 이름>`}</b>
          <b className={styles.googleScolar}>연구실 이름</b>
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
        <Navigation1
          logIn="/login@2x.png"
          account1="/account-1@2x.png"
          logo="/logo@2x.png"
          propWidth="1280px"
          propRight="unset"
          onApplicationContainerClick={onApplicationContainer2Click}
          onListContainerClick={onListContainer2Click}
          onSearchContainerClick={onSearchContainer2Click}
          onClabUTextClick={onClabUText2Click}
          onLogoIconClick={onLogoIcon2Click}
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
