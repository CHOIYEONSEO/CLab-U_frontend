import { useCallback, useState, useEffect } from "react";
import AdminAccept from "../../../components/AdminAccept";
import AdminReject from "../../../components/AdminReject";
import PortalPopup from "../../../components/PortalPopup";
import styles from "./AdminClub.module.css";
import axios from "axios";
import { useLocation } from 'react-router-dom';

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

  const initialFormState = {
    groupName: "",
    logoUrl: "",
    description: "",
    email: "",
    homepageUrl: "",
    tags: [],
    location: "",
    numMembers: "",
    representativeName: "",
  };

  const location = useLocation();
  const { name, id } = location.state || {};
  const [clubform, setClubForm] = useState(initialFormState);
  const [submittedCList, setSubmittedCList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/manage/forms`);
        const data = response.data;
        console.log(data);
      
        const targetClub = data.club.find((club) => club.name === name);

        if (targetClub) {
          setClubForm({
            ...initialFormState, 
            groupName: targetClub.name,
            logoUrl: targetClub.logoUrl,
            description: targetClub.description,
            email: targetClub.email,
            homepageUrl: targetClub.homepageUrl,
            tags: targetClub.tags,
            location: targetClub.location,
            numMembers: targetClub.numMembers,
            representativeName: targetClub.representativeName,
            id: targetClub.id,
          });
        } else {
          console.warn(`Club with name ${name} not found`);
        }

        setSubmittedCList(data);
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };

    fetchData();
  }, [name]);

  return (
    <>
      <div className={styles.adminClub}>
        <div className={styles.clubLogo}>
          <div className={styles.clubLogoChild} />
          <img className={styles.clubLogo1} src={clubform.logoUrl ? clubform.logoUrl : '/SKKU.webp'}/>
          <b className={styles.logob1}>동아리 로고</b>
        </div>
        <div className={styles.clubName}>
          <div className={styles.clubMembersChild} />
          <b className={styles.b}>{clubform.groupName}</b>
          <b className={styles.b1}>동아리 이름</b>
        </div>
        <div className={styles.clubDescription}>
          <div className={styles.clubMembersChild} />
          <b className={styles.b}>{clubform.description}</b>
          <b className={styles.b1}>동아리 설명</b>
        </div>
        <div className={styles.clubTag}>
          <div className={styles.clubMembersChild} />
          <b className={styles.b}>{clubform.tags}</b>
          <b className={styles.b1}>동아리 태그</b>
        </div>
        <div className={styles.clubLocation}>
          <div className={styles.clubMembersChild} />
          <b className={styles.b}>{clubform.location}</b>
          <b className={styles.b1}>동아리방 / 활동 장소 위치</b>
        </div>
        <div className={styles.clubRepName}>
          <div className={styles.clubMembersChild} />
          <b className={styles.b}>{clubform.representativeName}</b>
          <b className={styles.b1}>대표자 이름</b>
        </div>
        <div className={styles.clubRepEmail}>
          <div className={styles.clubMembersChild} />
          <b className={styles.b}>{clubform.email}</b>
          <b className={styles.b1}>대표자 연락처</b>
        </div>
        <div className={styles.clubPage}>
          <div className={styles.clubMembersChild} />
          <b className={styles.b}>{clubform.homepageUrl}</b>
          <b className={styles.b1}>동아리 홈페이지 / sns</b>
        </div>
        <div className={styles.clubMembers}>
          <div className={styles.clubMembersChild} />
          <b className={styles.b}>{clubform.numMembers}</b>
          <b className={styles.b1}>동아리 구성원 (명)</b>
        </div>

        <div className={styles.reject} onClick={openAdminReject}>
          <b className={styles.b2reject}>반려</b>
        </div>
        <div className={styles.accept} onClick={openAdminAccept}>
          <b className={styles.b2}>승인</b>
        </div>

      </div>
      {isAdminAcceptOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAdminAccept}
        >
          <AdminAccept onClose={closeAdminAccept} clubid={id}/>
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
