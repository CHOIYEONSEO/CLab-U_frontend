import { useCallback, useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useChatMutation } from "../hooks/query";
import styles from "./Search.module.css";

const Search = () => {
  const [searchParams] = useSearchParams();
  const { mutate, isPending, isSuccess } = useChatMutation();

  const [history, setHistory] = useState([]);
  const [question, setQuestion] = useState("");

  const sendChat = useCallback(
    (query) => {
      console.log(query);
      if (query.trim().length > 0) {
        setHistory((prev) => [...prev, { sender: "me", content: query }]);
        mutate(query, {
          onSuccess: (data) => {
            setHistory((prev) => [...prev, { sender: "ai", content: data }]);
          },
          onError: (error) => {
            setHistory((prev) => [
              ...prev,
              { sender: "ai", content: error.message },
            ]);
          },
        });
      }
    },
    [mutate]
  );

  const activeEnter = (e) => {
    if (e.key === "Enter") {
      sendChat(question);
    }
  };

  useEffect(() => {
    const query = searchParams.get("query");
    if (query && query.trim().length > 0) {
      sendChat(query);
    }
    return () => {
      setHistory([]);
    };
  }, [searchParams, sendChat]);

  useEffect(() => {
    console.log(history);
  }, [history]);

  return (
    <div className={styles.search}>
      <div className={styles.firstchat}>
        <div className={styles.div}>Clab-U</div>
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
        <div className={styles.div}>Clab-U</div>
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
              <span className={styles.span}>..</span>
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
        <input
          className={styles.typeHere}
          placeholder="무엇이든 물어보세요!"
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => activeEnter(e)}
        />
        <img
          className={styles.icon}
          alt=""
          src="/icon@2x.png"
          onClick={sendChat}
        />
        <img
          className={styles.icon}
          alt=""
          src="/icon@2x.png"
          onClick={sendChat}
        />
      </div>
    </div>
  );
};

export default Search;
