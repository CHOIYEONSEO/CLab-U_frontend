import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import Frame from "../../../components/Frame";
import PortalPopup from "../../../components/PortalPopup";
import SubmitLab from "../../../components/SubmitLab";
import styles from "./ApplicationFormLab.module.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const ApplicationFormLab = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const [isSubmitOpen, setSubmitOpen] = useState(false);
  const [labform, setLabForm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [userName, setUserName] = useState("");
  const { labId } = useParams();

  useEffect(() => {
    const fetchUserNameAndLab = async () => {
      try {
        const userResponse = await axios.get(`/api/users/me`);
        const loginStatus = userResponse.data;
        const name = loginStatus.name;
        setUserName(name);
        console.log(name);

        const labResponse = await axios.get(`/api/labs/${labId}`, {
          params: { userName: name }
        });
        setLabForm(labResponse.data);
        console.log(labform);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserNameAndLab();
  }, [labId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
    const { name, value } = e.target;
    
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

  let [logoImg, setImg] = useState("");

  const setViewImg = (e) => {
    var reader = new FileReader();
    reader.onload = function(e) {
      setImg(e.target.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  }

  return (
    <>
      <div className={styles.applicationFormLab}>
      <div className={styles.labLogo}>
          <div className={styles.labLogoChild} />
          <input
          className={styles.logob} 
          type="file" 
          accept='image/*'
          onChange={setViewImg}
          />
        <img className={styles.labLogo1} src={logoImg}/>
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
        <div className={styles.labIdPassword}>
          <div className={styles.labIdPasswordChild} />
          <b className={styles.b37}>아이디</b>
          <input
            className={styles.idInput}
            placeholder="아이디를 입력해 주세요"
            type="text"
            name="username"
            value={labform.username}
            onChange={handleChange}
          />
          <div className={styles.labIdPasswordItem} />
          <b className={styles.b39}>비밀번호</b>
          <input
            className={styles.pwInput}
            placeholder="비밀번호를 입력해 주세요"
            type="password"
            name="password"
            value={labform.password}
            onChange={handleChange}
          />
          <b className={styles.googleScolar}>회원가입 아이디 및 비밀번호</b>
          <div className={styles.div3} onClick={openFrame}>
            <b className={styles.b42}>아이디 중복 확인</b>
          </div>
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
          <SubmitLab onClose={closeSubmit} labData={labform} form={formData} isUpdate={true}/>
        </PortalPopup>
      )}
    </>
  );
};

export default ApplicationFormLab;