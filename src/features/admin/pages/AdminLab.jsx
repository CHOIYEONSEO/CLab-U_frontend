import { useCallback, useState, useEffect } from "react";
import AdminAccept from "../../../components/AdminAccept";
import AdminReject from "../../../components/AdminReject";
import PortalPopup from "../../../components/PortalPopup";
import styles from "./AdminLab.module.css";
import axios from "axios";
import { useLocation } from 'react-router-dom';

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

  const initialFormState = {
    groupName: "",
    logoUrl: "",
    description: "",
    email: "",
    homepageUrl: "",
    tags: [],
    professor: "",
    numPostDoc: 0,
    numPhd: 0,
    numMaster: 0,
    numUnderGraduate: 0,
    roomNo: "",
    googleScholarUrl: "",
    representativeName: "",
    campus: "",
  };

  const location = useLocation();
  const { name } = location.state || {};
  const [labform, setLabForm] = useState(initialFormState);
  const [submittedLList, setSubmittedLList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/manage/forms`);
        const data = response.data;
        
        const targetLab = data.lab.find((lab) => lab.name === name);

        if (targetLab) {
          setLabForm({
            ...initialFormState, 
            groupName: targetLab.name,
            logoUrl: targetLab.logoUrl,
            description: targetLab.description,
            email: targetLab.email,
            homepageUrl: targetLab.homepageUrl,
            tags: targetLab.tags,
            professor: targetLab.professor,
            numPostDoc: targetLab.numPostDoc,
            numPhd: targetLab.numPhd,
            numMaster: targetLab.numMaster,
            numUnderGraduate: targetLab.numUnderGraduate,
            roomNo: targetLab.roomNo,
            googleScholarUrl: targetLab.googleScholarUrl,
            representativeName: targetLab.representativeName,
            campus: targetLab.campus,
          });
        } else {
          console.warn(`Lab with name ${name} not found`);
        }

        setSubmittedLList(data);
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };

    fetchData();
  }, [name]);

  return (
    <>
      <div className={styles.adminLab}>
        <div className={styles.labLogo}>
          <div className={styles.labLogoChild} />
          <img className={styles.labLogo1} src={labform.logoUrl ? labform.logoUrl : '/SKKU.webp'}/>
          <b className={styles.logob1}>연구실 로고</b>
        </div>
        <div className={styles.labName}>
          <div className={styles.profNameChild} />
          <b className={styles.b2}>{labform.groupName}</b>
          <b className={styles.googleScolar}>연구실 이름</b>
        </div>
        <div className={styles.labDescription}>
          <div className={styles.profNameChild} />
          <b className={styles.b2}>{labform.description}</b>
          <b className={styles.googleScolar}>연구실 설명</b>
        </div>
        <div className={styles.labTag}>
          <div className={styles.profNameChild} />
          <b className={styles.b2}>{labform.tags}</b>
          <b className={styles.googleScolar}>연구실 태그</b>
        </div>
        <div className={styles.labLocation}>
          <div className={styles.profNameChild} />
          <b className={styles.b2}>{labform.roomNo}</b>
          <b className={styles.googleScolar}>연구실 위치</b>
        </div>
        <div className={styles.profName}>
          <div className={styles.profNameChild} />
          <b className={styles.b2}>{labform.professor}</b>
          <b className={styles.b3}>교수</b>
        </div>
        <div className={styles.profName2}>
          <div className={styles.profNameChild} />
          <b className={styles.b2}>{labform.googleScholarUrl}</b>
          <b className={styles.googleScolar}>교수 Google scolar 링크</b>
        </div>
        <div className={styles.labRepName}>
          <div className={styles.profNameChild} />
          <b className={styles.b2}>{labform.representativeName}</b>
          <b className={styles.googleScolar}>대표자 이름</b>
        </div>
        <div className={styles.labRepEmail}>
          <div className={styles.profNameChild} />
          <b className={styles.b2}>{labform.email}</b>
          <b className={styles.googleScolar}>대표자 연락처</b>
        </div>
        <div className={styles.labPage}>
          <div className={styles.profNameChild} />
          <b className={styles.b2}>{labform.homepageUrl}</b>
          <b className={styles.googleScolar}>홈페이지 주소</b>
        </div>

        <div className={styles.labMembers}>
          <div className={styles.labMembersChild} />
          <b className={styles.b25}>{labform.numUnderGraduate}</b>
          <b className={styles.b26}>학부연구생</b>
          <div className={styles.labMembersItem} />
          <b className={styles.b27}>{labform.numMaster}</b>
          <b className={styles.b28}>석사과정</b>
          <div className={styles.labMembersInner} />
          <b className={styles.b29}>{labform.numPhd}</b>
          <b className={styles.b30}>박사과정 / 석박 통합</b>
          <div className={styles.lineDiv} />
          <b className={styles.b31}>{labform.numPostDoc}</b>
          <b className={styles.b32}>포닥</b>
          <b className={styles.googleScolar}>연구실 구성원 (명)</b>
        </div>

        <div className={styles.accept} onClick={openAdminAccept}>
          <b className={styles.bacc}>승인</b>
        </div>
        <div className={styles.reject} onClick={openAdminReject}>
          <b className={styles.brej}>반려</b>
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
