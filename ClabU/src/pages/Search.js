import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navigation1 from "../components/Navigation1";
import styles from "./Search.module.css";
import React, {useState} from "react";

const Search = () => {
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

  const onIconClick = useCallback(() => {
    
  }, [navigate]);

  const [question, setQuestion] = useState("");

  const activeEnter = (e) => {
    if(e.key === "Enter") {
      onIconClick();
    }
  }

  return (
    <div className={styles.search}>
      <div className={styles.firstchat}>
        <div className={styles.div}>(캐릭터 이름)</div>
        <div className={styles.clabuContainer}>
          <p className={styles.clabu}>
            소프트웨어융합대학의 동아리와 연구실을 쉽게 찾을 수 있도록 도와주는
            자연어 기반 대화형 검색 서비스인 CLab:U입니다!
          </p>
          <p className={styles.clabu}>&nbsp;</p>
          <p className={styles.p}>
            <b>{`무엇이든 물어보세요! `}</b>
          </p>
        </div>
        <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
      </div>
      <div className={styles.firstchat1}>
        <div className={styles.div}>(캐릭터 이름)</div>
        <div className={styles.div2}>
          <p
            className={styles.p}
          >{`율전 캠퍼스에서 학부연구생이 있는 인공지능 관련 연구실에는 다음과 같은 연구실이 있습니다. `}</p>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <span>자연어 처리 연구실 (고영중 교수)</span>
            </li>
            <li className={styles.li}>
              <span>인공지능을 활용한 보안연구실 (구형준 교수)</span>
            </li>
            <li className={styles.li}>
              <span>인공지능융합연구실 (김광수 교수)</span>
            </li>
            <li className={styles.li}>
              <span className={styles.span}>...</span>
            </li>
          </ul>
        </div>
        <img className={styles.logoIcon1} alt="" src="/logo@2x.png" />
      </div>
      <div className={styles.firstchat2}>
        <b className={styles.b}>
          율전 캠퍼스에 인공지능 관련 연구실 중 학부연구생이 있는 연구실이 있어?
        </b>
      </div>
      <div className={styles.inputfield}>
        <input className={styles.typeHere}
          placeholder="무엇이든 물어보세요!"
          type="text"
          value={question}
          onChange={(e)=>setQuestion(e.target.value)}
          onKeyDown={(e) => activeEnter(e)}
          />
        <img
          className={styles.icon}
          alt=""
          src="/icon@2x.png"
          onClick={onIconClick}
        />
        <img className={styles.icon}
        alt=""
        src="/icon@2x.png"
        onClick={onIconClick}
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
    </div>
  );
};

export default Search;
