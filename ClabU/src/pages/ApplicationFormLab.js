import React, { useState, useCallback } from "react";
import Frame from "../components/Frame";
import PortalPopup from "../components/PortalPopup";
import Submit from "../components/Submit";
import { useNavigate } from "react-router-dom";
import LabLogo from "../components/LabLogo";
import Navigation1 from "../components/Navigation1";
import styles from "./ApplicationFormLab.module.css";

const ApplicationFormLab = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const [isSubmitOpen, setSubmitOpen] = useState(false);
  const navigate = useNavigate();

  const [labform, setLabForm] = useState({
    logo: '',
    labName: '',
    description: '',
    labTags: '',
    labLocation: '',
    professor: '',
    professorGoogleScholar: '',
    representativeName: '',
    representativeContact: '',
    website: '',
    postdocs: '',
    phdStudents: '',
    mastersStudents: '',
    undergradResearchers: '',
    username: '',
    password: '',
  });

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

  const onClubTextClick = useCallback(() => {
    navigate("/application-form-club");
  }, [navigate]);

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
    setLabForm({
      ...labform,
      [name]: value,
    });
  };

  const [isInputClicked, setIsInputClicked] = useState(false);

  const [uploadImgUrl, setUploadImgUrl] = useState("");

  const onchangeImageUpload = (e)=> {
     const {files} = e.target;
     const uploadFile = files[0];
     const reader = new FileReader();
     reader.readAsDataURL(uploadFile);
     reader.onloadend = ()=> {
     setUploadImgUrl(reader.result);
    }
  }
  
  return (
    <>
      <div className={styles.applicationFormLab}>
        <div className={styles.labMembers}>
          <div className={styles.labMembersChild} />
          <input className={styles.undergradInput}
          onFocus={() => {
            setIsInputClicked(true);
          }}
          // 클릭되어 있지 않을 때 작동(input 이외의 영역이 클릭되었을 때)
          onBlur={() => {
            setIsInputClicked(false);
          }}
          placeholder={isInputClicked === true ? "" : "몇명인지 입력해 주세요"}
          type="number"
          min="0"
          name="undergradResearchers"
          value={labform.undergradResearchers} 
          onChange={handleChange} 
          />
          <b className={styles.b1}>학부연구생</b>
          <div className={styles.labMembersItem} />
          <input className={styles.masterInput}
          onFocus={() => {
            setIsInputClicked(true);
          }}
          // 클릭되어 있지 않을 때 작동(input 이외의 영역이 클릭되었을 때)
          onBlur={() => {
            setIsInputClicked(false);
          }}
          placeholder={isInputClicked === true ? "" : "몇명인지 입력해 주세요"}
          type="number"
          min="0"
          name="mastersStudents"
          value={labform.mastersStudents} 
          onChange={handleChange} 
          />
          <b className={styles.b3}>석사과정</b>
          <div className={styles.labMembersInner} />
          <input className={styles.docInput}
          onFocus={() => {
            setIsInputClicked(true);
          }}
          // 클릭되어 있지 않을 때 작동(input 이외의 영역이 클릭되었을 때)
          onBlur={() => {
            setIsInputClicked(false);
          }}
          placeholder={isInputClicked === true ? "" : "몇명인지 입력해 주세요"}
          type="number"
          min="0"
          name="phdStudents"
          value={labform.phdStudents} 
          onChange={handleChange} 
          />
          <b className={styles.b5}>박사과정 / 석박 통합</b>
          <div className={styles.lineDiv} />
          <input className={styles.postDocInput}
          onFocus={() => {
            setIsInputClicked(true);
          }}
          // 클릭되어 있지 않을 때 작동(input 이외의 영역이 클릭되었을 때)
          onBlur={() => {
            setIsInputClicked(false);
          }}
          placeholder={isInputClicked === true ? "" : "몇명인지 입력해 주세요"}
          type="number"
          min="0"
          name="postdocs"
          value={labform.postdocs} 
          onChange={handleChange} 
          />
          <b className={styles.b7}>포닥</b>
          <b className={styles.googleScolar}>연구실 구성원 (명)</b>
        </div>
        <div className={styles.labPage}>
          <div className={styles.labPageChild} />
          <input className={styles.pageInput}
          onFocus={() => {
            setIsInputClicked(true);
          }}
          // 클릭되어 있지 않을 때 작동(input 이외의 영역이 클릭되었을 때)
          onBlur={() => {
            setIsInputClicked(false);
          }}
          placeholder={isInputClicked === true ? "" : "연구실 홈페이지 주소를 입력해 주세요"}
          type="text"
          name="website"
          value={labform.website} 
          onChange={handleChange} 
          />
          <b className={styles.googleScolar}>홈페이지 주소</b>
        </div>
        <div className={styles.labRepEmail}>
          <div className={styles.labPageChild} />
          <input className={styles.contactInput}
          onFocus={() => {
            setIsInputClicked(true);
          }}
          // 클릭되어 있지 않을 때 작동(input 이외의 영역이 클릭되었을 때)
          onBlur={() => {
            setIsInputClicked(false);
          }}
          placeholder={isInputClicked === true ? "" : "대표자 이메일을 입력해 주세요"}
          type="text"
          name="representativeContact"
          value={labform.representativeContact} 
          onChange={handleChange} 
          />
          <b className={styles.googleScolar}>대표자 연락처</b>
        </div>
        <div className={styles.labRepName}>
          <div className={styles.labPageChild} />
          <input className={styles.repInput}
          onFocus={() => {
            setIsInputClicked(true);
          }}
          // 클릭되어 있지 않을 때 작동(input 이외의 영역이 클릭되었을 때)
          onBlur={() => {
            setIsInputClicked(false);
          }}
          placeholder={isInputClicked === true ? "" : "대표자 이름을 입력해 주세요"}
          type="text"
          name="representativeName"
          value={labform.representativeName} 
          onChange={handleChange} 
          />
          <b className={styles.googleScolar}>대표자 이름</b>
        </div>
        <div className={styles.labLocation}>
          <div className={styles.labPageChild} />
          <b
            className={styles.b9}
          >{` (드랍다운, 토글 등으로 인자캠 선택), 우: 방 번호 텍스트 입력란>`}</b>
          <b className={styles.googleScolar}>연구실 위치</b>
        </div>
        <div className={styles.labDescription}>
          <div className={styles.labPageChild} />
          <b className={styles.googleScolar}>
            연구실 설명
          </b>
          <input className={styles.labDescInput}
          onFocus={() => {
            setIsInputClicked(true);
          }}
          // 클릭되어 있지 않을 때 작동(input 이외의 영역이 클릭되었을 때)
          onBlur={() => {
            setIsInputClicked(false);
          }}
          placeholder={isInputClicked === true ? "" : "현재 진행 중인 연구 과제를 중심으로 작성해 주세요"}
          type="text"
          name="description"
          value={labform.description}
          onChange={handleChange} 
          />
        </div>
        <div className={styles.labName}>
          <div className={styles.labPageChild} />
          <b className={styles.googleScolar}>연구실 이름</b>
          <input className={styles.labNameInput}
          onFocus={() => {
            setIsInputClicked(true);
          }}
          // 클릭되어 있지 않을 때 작동(input 이외의 영역이 클릭되었을 때)
          onBlur={() => {
            setIsInputClicked(false);
          }}
          placeholder={isInputClicked === true ? "" : "연구실 이름을 입력해 주세요"}
          type="text"
          name="labName"
          value={labform.labName} 
          onChange={handleChange} 
          />
        </div>
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
        <div className={styles.profName}>
          <div className={styles.labPageChild} />
          <input className={styles.professorInput}
          onFocus={() => {
            setIsInputClicked(true);
          }}
          // 클릭되어 있지 않을 때 작동(input 이외의 영역이 클릭되었을 때)
          onBlur={() => {
            setIsInputClicked(false);
          }}
          placeholder={isInputClicked === true ? "" : "교수님 이름을 입력해 주세요"}
          type="text"
          name="professor"
          value={labform.professor} 
          onChange={handleChange} 
          />
          <b className={styles.b16}>교수</b>
        </div>
        <div className={styles.profName2}>
          <div className={styles.labPageChild} />
          <input className={styles.scholarInput}
          onFocus={() => {
            setIsInputClicked(true);
          }}
          // 클릭되어 있지 않을 때 작동(input 이외의 영역이 클릭되었을 때)
          onBlur={() => {
            setIsInputClicked(false);
          }}
          placeholder={isInputClicked === true ? "" : "교수님 Google scolar 링크를 입력해 주세요"}
          type="text"
          name="professorGoogleScholar"
          value={labform.professorGoogleScholar} 
          onChange={handleChange} 
          />
          <b className={styles.googleScolar}>교수 Google scolar 링크</b>
        </div>
        <div className={styles.labLocation}>
          <div className={styles.labPageChild} />
          <b
            className={styles.b28}
          >{`<좌: (드랍다운, 토글 등으로 인자캠 선택), 우: 방 번호 텍스트 입력란>`}</b>
          <b className={styles.googleScolar}>연구실 위치</b>
          <div className={styles.div}>
            <div className={styles.div1}>자과캠</div>
            <div className={styles.div2}>인사캠</div>
          </div>
          <div className={styles.wrapper}>
          <input className={styles.locInput}
          onFocus={() => {
            setIsInputClicked(true);
          }}
          // 클릭되어 있지 않을 때 작동(input 이외의 영역이 클릭되었을 때)
          onBlur={() => {
            setIsInputClicked(false);
          }}
          placeholder={isInputClicked === true ? "" : "연구실 번호를 입력해 주세요"}
          type="text"
          name="labLocation"
          value={labform.labLocation} 
          onChange={handleChange} 
          />
          </div>
        </div>
        <div className={styles.labTag}>
          <div className={styles.labPageChild} />
          <input className={styles.labTagInput}
          onFocus={() => {
            setIsInputClicked(true);
          }}
          // 클릭되어 있지 않을 때 작동(input 이외의 영역이 클릭되었을 때)
          onBlur={() => {
            setIsInputClicked(false);
          }}
          placeholder={isInputClicked === true ? "" : "연구실 태그를 입력해 주세요"}
          type="text"
          name="labTags"
          value={labform.labTags} 
          onChange={handleChange} 
          />
          <b className={styles.googleScolar}>연구실 태그</b>
        </div>
        <LabLogo
          prop1="연구실 로고"
          propTop="220px"
        />
        <div className={styles.tab}>
          <div className={styles.club} onClick={onClubTextClick}>
            club
          </div>
          <b className={styles.lab}>lab</b>
        </div>
        <div className={styles.labIdPassword}>
          <div className={styles.labIdPasswordChild} />
          <b className={styles.b37}>아이디</b>
          <input className={styles.idInput}
          onFocus={() => {
            setIsInputClicked(true);
          }}
          // 클릭되어 있지 않을 때 작동(input 이외의 영역이 클릭되었을 때)
          onBlur={() => {
            setIsInputClicked(false);
          }}
          placeholder={isInputClicked === true ? "" : "아이디를 입력해 주세요"}
          type="text"
          name="username"
          value={labform.username} 
          onChange={handleChange} 
          />
          <div className={styles.labIdPasswordItem} />
          <b className={styles.b39}>비밀번호</b>
          <input className={styles.pwInput}
          onFocus={() => {
            setIsInputClicked(true);
          }}
          // 클릭되어 있지 않을 때 작동(input 이외의 영역이 클릭되었을 때)
          onBlur={() => {
            setIsInputClicked(false);
          }}
          placeholder={isInputClicked === true ? "" : "비밀번호를 입력해 주세요"}
          type="text"
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
          <Submit onClose={openSubmit} />
        </PortalPopup>
      )}
    </>
  );
};

export default ApplicationFormLab;
