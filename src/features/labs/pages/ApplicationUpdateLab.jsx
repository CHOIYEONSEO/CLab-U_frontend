import { useCallback, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Frame from "../../../components/Frame";
import PortalPopup from "../../../components/PortalPopup";
import SubmitLab from "../../../components/SubmitLab";
import styles from "./ApplicationFormLab.module.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import axios from "axios";

const ApplicationFormLab = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const [isSubmitOpen, setSubmitOpen] = useState(false);


  const [labId, setLabId] = useState("");
  const [labform, setLabForm] = useState({
    groupName: "",
    logoUrl: "",
    description: "",
    email: "",
    homepageUrl: "",
    tags: [],
    professor: "",
    numPostDoc: "",
    numPhd: "",
    numMaster: "",
    numUnderGraduate: "",
    roomNo: "",
    googleScholarUrl: "",
    representativeName: "",
    campus: "",
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
      setLabId(userid);
      console.log(userid);
    };
  
    fetchUserId();
  }, []); 
  
  useEffect(() => {
    if (labId) {
      const fetchLab = async () => {
        setIsLoading(true); 
        try {
          const response = await axios.get(`/api/labs`);
          const data = response.data;
          console.log(data);
        
          const lab = data.find((lab) => lab.id === labId);
          console.log(lab);
          setLabForm({
            ...labform, 
            groupName: lab.name,
            logoUrl: lab.logoUrl,
            description: lab.description,
            email: lab.email,
            homepageUrl: lab.homepageUrl,
            tags: lab.tags,
            professor: lab.professor,
            numPostDoc: lab.numPostDoc,
            numPhd: lab.numPhd,
            numMaster: lab.numMaster,
            numUnderGraduate: lab.numUnderGraduate,
            roomNo: lab.result,
            googleScholarUrl: lab.googleScholarUrl,
            representativeName: lab.representativeName,
            campus: lab.campus,
            roomNo: lab.roomNo,
          });
        } catch (error) {
          console.error("Error fetching lab data:", error);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchLab();
    }
  }, [labId]); 

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
    
    if (name === "numPostDoc" || name === "numPhd" || name === "numMaster" || name === "numUnderGraduate") {
      setLabForm(prevState => ({
        ...prevState,
        [name]: parseInt(value, 10) || 0,
      }));
    }
    else if (name === "tags") {
      const tagsArray = value.split(',').map(tag => tag.trim());
      setLabForm({ ...labform, [name]: tagsArray });
    }
    else if (name === "logoUrl" && files && files[0]) {
      const reader = new FileReader();
      reader.onload = function(event) {
        setLabForm({ ...labform, [name]: event.target.result });
      };
      reader.readAsDataURL(files[0]);

      const newFormData = new FormData();
      newFormData.append('file', files[0], `${labform.groupName}.png`);
      setFormData(newFormData);

    }
    else {
      setLabForm({ ...labform, [name]: value });
    }
  };

  const [selectedCampusTitle, setSelectedCampusTitle] = useState("캠퍼스 선택");

  return (
    <>
      <div className={styles.applicationFormLab}>
      <div className={styles.labLogo}>
          <div className={styles.labLogoChild} />
          <input
          className={styles.logob} 
          type="file" 
          accept='image/*'
          name="logoUrl"
          onChange={handleChange}
          />
        <img className={styles.labLogo1} src={labform.logoUrl}/>
        <b className={styles.logob1}>연구실 로고</b>
       </div>
       <div className={styles.labName}>
          <div className={styles.labPageChild} />
          <b className={styles.googleScolar}>연구실 이름</b>
          <input
            className={styles.labNameInput}
            placeholder="연구실 이름을 입력해 주세요"
            type="text"
            name="groupName"
            value={labform.groupName}
            onChange={handleChange}
          />
        </div>
        <div className={styles.labDescription}>
          <div className={styles.labPageChild} />
          <b className={styles.googleScolar}>연구실 설명</b>
          <input
            className={styles.labDescInput}
            placeholder="현재 진행 중인 연구 과제를 중심으로 작성해 주세요"
            type="text"
            name="description"
            value={labform.description}
            onChange={handleChange}
          />
        </div>
        <div className={styles.labTag}>
          <div className={styles.labPageChild} />
          <input
            className={styles.labTagInput}
            placeholder="연구실 태그를 입력해 주세요"
            type="text"
            name="tags"
            value={labform.tags}
            onChange={handleChange}
          />
          <b className={styles.googleScolar}>연구실 태그</b>
        </div>
        <div className={styles.labLocation}>
          <div className={styles.labPageChild} />
          <b className={styles.googleScolar}>연구실 위치</b>
          <DropdownButton
          className={styles.Dropdown}
          id="campus"
          title={selectedCampusTitle}>
            <Dropdown.Item onClick={() => {
              setLabForm(prevState => ({
              ...prevState,
              campus: '인사캠'
              }));
              setSelectedCampusTitle('인사캠');
            }}>인사캠</Dropdown.Item>
            <Dropdown.Item onClick={() => {
              setLabForm(prevState => ({
              ...prevState,
              campus: '자과캠'
              }));
              setSelectedCampusTitle('자과캠');
            }}>자과캠</Dropdown.Item>
            </DropdownButton>
          <div className={styles.wrapper}>
            <input
              className={styles.locInput}
              placeholder="연구실 번호를 입력해 주세요"
              type="text"
              name="roomNo"
              value={labform.roomNo}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.profName}>
          <div className={styles.labPageChild} />
          <input
            className={styles.professorInput}
            placeholder="교수님 이름을 입력해 주세요"
            type="text"
            name="professor"
            value={labform.professor}
            onChange={handleChange}
          />
          <b className={styles.b16}>교수</b>
        </div>
        <div className={styles.profName2}>
          <div className={styles.labPageChild} />
          <input
            className={styles.scholarInput}
            placeholder="교수님 Google scolar 링크를 입력해 주세요"
            type="url"
            name="googleScholarUrl"
            value={labform.googleScholarUrl}
            onChange={handleChange}
          />
          <b className={styles.googleScolar}>교수 Google scolar 링크</b>
        </div>
        <div className={styles.labRepName}>
          <div className={styles.labPageChild} />
          <input
            className={styles.repInput}
            placeholder="대표자 이름을 입력해 주세요"
            type="text"
            name="representativeName"
            value={labform.representativeName}
            onChange={handleChange}
          />
          <b className={styles.googleScolar}>대표자 이름</b>
        </div>
        <div className={styles.labRepEmail}>
          <div className={styles.labPageChild} />
          <input
            className={styles.contactInput}
            placeholder="대표자 이메일을 입력해 주세요"
            type="email"
            name="email"
            value={labform.email}
            onChange={handleChange}
          />
          <b className={styles.googleScolar}>대표자 연락처</b>
        </div>
        <div className={styles.labPage}>
          <div className={styles.labPageChild} />
          <input
            className={styles.pageInput}
            placeholder="연구실 홈페이지 주소를 입력해 주세요"
            type="url"
            name="homepageUrl"
            value={labform.homepageUrl}
            onChange={handleChange}
          />
          <b className={styles.googleScolar}>홈페이지 주소</b>
        </div>
        <div className={styles.labMembers}>
          <div className={styles.labMembersChild} />
          <input
            className={styles.undergradInput}
            placeholder="몇명인지 입력해 주세요"
            type="number"
            min="0"
            name="numUnderGraduate"
            value={labform.numUnderGraduate}
            onChange={handleChange}
          />
          <b className={styles.b1}>학부연구생</b>
          <div className={styles.labMembersItem} />
          <input
            className={styles.masterInput}
            placeholder="몇명인지 입력해 주세요"
            type="number"
            min="0"
            name="numMaster"
            value={labform.numMaster}
            onChange={handleChange}
          />
          <b className={styles.b3}>석사과정</b>
          <div className={styles.labMembersInner} />
          <input
            className={styles.docInput}
            placeholder="몇명인지 입력해 주세요"
            type="number"
            min="0"
            name="numPhd"
            value={labform.numPhd}
            onChange={handleChange}
          />
          <b className={styles.b5}>박사과정 / 석박 통합</b>
          <div className={styles.lineDiv} />
          <input
            className={styles.postDocInput}
            placeholder="몇명인지 입력해 주세요"
            type="number"
            min="0"
            name="numPostDoc"
            value={labform.numPostDoc}
            onChange={handleChange}
          />
          <b className={styles.b7}>포닥</b>
          <b className={styles.googleScolar}>연구실 구성원 (명)</b>
        </div>

        <div className={styles.tab}>
          <Link className={styles.club} to="/clubs/update">
            club
          </Link>
          <b className={styles.lab}>lab</b>
        </div>

        <div className={styles.applicationFormLabChild} />
        <div className={styles.submit} onClick={openSubmit}>
          <b className={styles.b43}>제출</b>
        </div>
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
          <SubmitLab onClose={closeSubmit} labData={labform} form={formData} isUpdate={true} labId={labId}/>
        </PortalPopup>
      )}
    </>
  );
};

export default ApplicationFormLab;