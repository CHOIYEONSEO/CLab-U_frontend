import { useCallback, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Frame from "../../../components/Frame";
import PortalPopup from "../../../components/PortalPopup";
import SubmitClub from "../../../components/SubmitClub";
import styles from "./ApplicationFormClub.module.css";
import { useFetchClub } from "../hooks/query";
import axios from "axios";


const ApplicationFormClub = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const [isSubmitOpen, setSubmitOpen] = useState(false);

  const [clubId, setClubId] = useState("");
  const [clubform, setClubForm] = useState({
    groupName: "",
    logoUrl: "",
    description: "",
    email: "",
    homepageUrl: "",
    tags: [],
    location: "",
    numMembers: "",
    representativeName: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  const getId = async () => {
    try {
      const response = await axios.get(`/api/users/me`);
      console.log(response);
      const id = response.data.group.id;
      console.log(id);
      return id;
    } catch (error) {
      return false;
    }
  };

  useEffect(() => {
    const fetchUserId = async () => {
      const userid = await getId();
      setClubId(userid);
      console.log(userid);
    };
  
    fetchUserId();
  }, []); 
  
  useEffect(() => {
    if (clubId) {
      const fetchClub = async () => {
        setIsLoading(true); 
        try {
          //const { data: club, isLoadingClub } = useFetchClub(clubId);

          const response = await axios.get(`/api/clubs`);
          const data = response.data;
          console.log(data);
        
          const club = data.club.find((club) => club.id === clubId);
          console.log(club);
          //setClubForm(club);
          setClubForm({
            ...clubform, 
            groupName: club.name,
            logoUrl: club.logoUrl,
            description: club.description,
            email: club.email,
            homepageUrl: club.homepageUrl,
            tags: club.tags,
            location: club.location,
            numMembers: club.numMembers,
            representativeName: club.representativeName,
          });
        } catch (error) {
          console.error("Error fetching club data:", error);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchClub();
    }
  }, [clubId]); 
  

  
  const [formData, setFormData] = useState("");

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const openSubmit = useCallback(() => {
    setSubmitOpen(true);
  }, []);

  const closeSubmit = useCallback(() => {
    setSubmitOpen(false);
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    
    if (name === "numMembers") {
      setClubForm(prevState => ({
        ...prevState,
        [name]: parseInt(value, 10) || 0,
      }));
    }
    else if (name === "tags") {
      const tagsArray = value.split(',').map(tag => tag.trim());
      setClubForm({ ...clubform, [name]: tagsArray });
    }
    else if (name === "logoUrl" && files && files[0]) {
      const reader = new FileReader();
      reader.onload = function(event) {
        setClubForm({ ...clubform, [name]: event.target.result });
      };
      reader.readAsDataURL(files[0]);

      const newFormData = new FormData();
      newFormData.append('file', files[0], `${clubform.groupName}.png`);
      setFormData(newFormData);

    }
    else {
      setClubForm({ ...clubform, [name]: value });
    }
  };

  return (

    <>
      <div className={styles.applicationFormClub}>

        <div className={styles.clubLogo}>
          <div className={styles.clubLogoChild} />
          <input
            className={styles.logob}
            type="file"
            accept="image/*"
            name="logoUrl"
            onChange={handleChange}
          />
          <img className={styles.clubLogo1} src={clubform.logoUrl} />
          <b className={styles.logob1}>동아리 로고</b>
        </div>
        <div className={styles.clubName}>
          <div className={styles.clubMembersChild} />
          <input
            className={styles.clubNameInput}
            placeholder="동아리 이름을 입력해 주세요"
            type="text"
            name="groupName"
            value={clubform.groupName}
            onChange={handleChange}
          />
          <b className={styles.b1}>동아리 이름</b>
        </div>
        <div className={styles.clubDescription}>
          <div className={styles.clubMembersChild} />
          <input
            className={styles.clubDescInput}
            placeholder="동아리를 설명해주세요"
            type="text"
            name="description"
            value={clubform.description}
            onChange={handleChange}
          />
          <b className={styles.b1}>동아리 설명</b>
        </div>
        <div className={styles.clubTag}>
          <div className={styles.clubMembersChild} />
          <input
            className={styles.clubTagInput}
            placeholder="동아리 태그를 입력해주세요"
            type="text"
            name="tags"
            value={clubform.tags}
            onChange={handleChange}
          />
          <b className={styles.b1}>동아리 태그</b>
        </div>
        <div className={styles.clubLocation}>
          <div className={styles.clubMembersChild} />
          <input
            className={styles.clubLocInput}
            placeholder="동아리방 번호와 활동 장소 위치를 입력해주세요"
            type="text"
            name="location"
            value={clubform.location}
            onChange={handleChange}
          />
          <b className={styles.b1}>동아리방 / 활동 장소 위치</b>
        </div>
        <div className={styles.clubRepName}>
          <div className={styles.clubMembersChild} />
          <input
            className={styles.clubRepInput}
            placeholder="대표자 이름을 입력해 주세요"
            type="text"
            name="representativeName"
            value={clubform.representativeName}
            onChange={handleChange}
          />
          <b className={styles.b1}>대표자 이름</b>
        </div>
        <div className={styles.clubRepEmail}>
          <div className={styles.clubMembersChild} />
          <input
            className={styles.contactInput}
            placeholder="대표자 이메일을 입력해 주세요"
            type="email"
            name="email"
            value={clubform.email}
            onChange={handleChange}
          />
          <b className={styles.b1}>대표자 연락처</b>
        </div>
        <div className={styles.clubPage}>
          <div className={styles.clubMembersChild} />
          <input
            className={styles.pageInput}
            placeholder="동아리 홈페이지 및 sns를 입력해주세요"
            type="text"
            name="homepageUrl"
            value={clubform.homepageUrl}
            onChange={handleChange}
          />
          <b className={styles.b1}>동아리 홈페이지 / sns</b>
        </div>
        <div className={styles.clubMembers}>
          <div className={styles.clubMembersChild} />
          <input
            className={styles.membersInput}
            placeholder="몇명인지 입력해 주세요"
            type="number"
            min="0"
            name="numMembers"
            value={clubform.numMembers}
            onChange={handleChange}
          />
          <b className={styles.b1}>동아리 구성원 (명)</b>
        </div>

        <div className={styles.submit} onClick={openSubmit}>
          <b className={styles.b20}>제출</b>
        </div>
        <div className={styles.tab}>
          <b className={styles.club}>club</b>
          <Link className={styles.lab} to="/labs/update">
            lab
          </Link>
        </div>
        <div className={styles.applicationFormClubChild} />
      </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <Frame onClose={closeFrame} />
        </PortalPopup>
      )}
      {isSubmitOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSubmit}
        >
          <SubmitClub onClose={closeSubmit} clubData={clubform} form={formData} isUpdate={true}/>
        </PortalPopup>
      )}
    </>
    
    
  );
};

export default ApplicationFormClub;