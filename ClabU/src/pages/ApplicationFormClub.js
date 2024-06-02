import React, { useState, useCallback } from "react";
import AdminAccept from "../components/AdminAccept";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import ClubLogo from "../components/ClubLogo";
import Navigation1 from "../components/Navigation1";
import styles from "./ApplicationFormClub.module.css";

const [form, setForm] = useState({
  logo: '',
  clubName: '',
  description: '',
  clubTags: '',
  clubLocation: '',
  representativeName: '',
  representativeContact: '',
  website: '',
  members: '',
  username: '',
  password: '',
});

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const [isInputClicked, setIsInputClicked] = useState(false);

  return (
    <>
      <div className={styles.applicationFormClub}>
        <div className={styles.clubMembers}>
          <div className={styles.clubMembersChild} />
          <input className={styles.membersInput}
          onFocus={() => {
            setIsInputClicked(true);
          }}
          // 클릭되어 있지 않을 때 작동(input 이외의 영역이 클릭되었을 때)
          onBlur={() => {
            setIsInputClicked(false);
          }}
          placeholder={isInputClicked === true ? "" : "<구성원>"}
          type="text"
          name="members"
          value={form.members} 
          onChange={handleChange} 
          />
          <b className={styles.b1}>동아리 구성원 (명)</b>
        </div>
        <div className={styles.clubPage}>
          <div className={styles.clubMembersChild} />
          <input className={styles.pageInput}
          onFocus={() => {
            setIsInputClicked(true);
          }}
          // 클릭되어 있지 않을 때 작동(input 이외의 영역이 클릭되었을 때)
          onBlur={() => {
            setIsInputClicked(false);
          }}
          placeholder={isInputClicked === true ? "" : "<동아리 홈페이지 / sns>"}
          type="text"
          name="website"
          value={form.website} 
          onChange={handleChange} 
          />
          <b className={styles.b1}>동아리 홈페이지 / sns</b>
        </div>
        <div className={styles.clubRepEmail}>
          <div className={styles.clubMembersChild} />
          <input className={styles.contactInput}
          onFocus={() => {
            setIsInputClicked(true);
          }}
          // 클릭되어 있지 않을 때 작동(input 이외의 영역이 클릭되었을 때)
          onBlur={() => {
            setIsInputClicked(false);
          }}
          placeholder={isInputClicked === true ? "" : "<대표자 이메일 등 연락처>"}
          type="text"
          name="representativeContact"
          value={form.representativeContact} 
          onChange={handleChange} 
          />
          <b className={styles.b1}>대표자 연락처</b>
        </div>
        <div className={styles.clubRepName}>
          <div className={styles.clubMembersChild} />
          <input className={styles.clubRepInput}
          onFocus={() => {
            setIsInputClicked(true);
          }}
          // 클릭되어 있지 않을 때 작동(input 이외의 영역이 클릭되었을 때)
          onBlur={() => {
            setIsInputClicked(false);
          }}
          placeholder={isInputClicked === true ? "" : "<대표자 이름>"}
          type="text"
          name="representativeName"
          value={form.representativeName} 
          onChange={handleChange} 
          />
          <b className={styles.b1}>대표자 이름</b>
        </div>
        <div className={styles.clubLocation}>
          <div className={styles.clubMembersChild} />
          <input className={styles.clubLocInput}
          onFocus={() => {
            setIsInputClicked(true);
          }}
          // 클릭되어 있지 않을 때 작동(input 이외의 영역이 클릭되었을 때)
          onBlur={() => {
            setIsInputClicked(false);
          }}
          placeholder={isInputClicked === true ? "" : "<위치>"}
          type="text"
          name="clubLocation"
          value={form.clubLocation} 
          onChange={handleChange} 
          />
          <b className={styles.b1}>동아리방 / 활동 장소 위치</b>
        </div>
        <div className={styles.clubTag}>
          <div className={styles.clubMembersChild} />
          <input className={styles.clubTabInput}
          onFocus={() => {
            setIsInputClicked(true);
          }}
          // 클릭되어 있지 않을 때 작동(input 이외의 영역이 클릭되었을 때)
          onBlur={() => {
            setIsInputClicked(false);
          }}
          placeholder={isInputClicked === true ? "" : "<동아리 태그>"}
          type="text"
          name="clubTags"
          value={form.clubTags} 
          onChange={handleChange} 
          />
          <b className={styles.b1}>동아리 태그</b>
        </div>
        <div className={styles.clubDescription}>
          <div className={styles.clubMembersChild} />
          <input className={styles.clubDescInput}
          onFocus={() => {
            setIsInputClicked(true);
          }}
          // 클릭되어 있지 않을 때 작동(input 이외의 영역이 클릭되었을 때)
          onBlur={() => {
            setIsInputClicked(false);
          }}
          placeholder={isInputClicked === true ? "" : "<동아리 설명>"}
          type="text"
          name="description"
          value={form.description} 
          onChange={handleChange} 
          />
          <b className={styles.b1}>동아리 설명</b>
        </div>
        <div className={styles.clubName}>
          <div className={styles.clubMembersChild} />
          <input className={styles.clubNameInput}
          onFocus={() => {
            setIsInputClicked(true);
          }}
          // 클릭되어 있지 않을 때 작동(input 이외의 영역이 클릭되었을 때)
          onBlur={() => {
            setIsInputClicked(false);
          }}
          placeholder={isInputClicked === true ? "" : "<동아리 이름>"}
          type="text"
          name="clubName"
          value={form.clubName} 
          onChange={handleChange} 
          />
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
          propWidth="1280px"
          propRight="unset"
          onApplicationContainerClick={onApplicationContainerClick}
          onListContainerClick={onListContainerClick}
          onSearchContainerClick={onSearchContainerClick}
          onClabUTextClick={onClabUTextClick}
          onLogoIconClick={onLogoIconClick}
        />
        <div className={styles.labIdPassword}>
          <div className={styles.labIdPasswordChild} />
          <b className={styles.b14}>아이디</b>
          <input className={styles.idInput}
          onFocus={() => {
            setIsInputClicked(true);
          }}
          // 클릭되어 있지 않을 때 작동(input 이외의 영역이 클릭되었을 때)
          onBlur={() => {
            setIsInputClicked(false);
          }}
          placeholder={isInputClicked === true ? "" : "<아이디>"}
          type="text"
          name="username"
          value={form.username} 
          onChange={handleChange} 
          />
          <div className={styles.labIdPasswordItem} />
          <b className={styles.b16}>비밀번호</b>
          <input className={styles.pwInput}
          onFocus={() => {
            setIsInputClicked(true);
          }}
          // 클릭되어 있지 않을 때 작동(input 이외의 영역이 클릭되었을 때)
          onBlur={() => {
            setIsInputClicked(false);
          }}
          placeholder={isInputClicked === true ? "" : "<비밀번호>"}
          type="text"
          name="password"
          value={form.password} 
          onChange={handleChange} 
          />
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
