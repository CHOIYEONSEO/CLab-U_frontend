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
        setQuestion(""); // 채팅을 보낸 후 입력 필드 초기화
      }
    },
    [mutate]
  );

  const activeEnter = (e) => {
    if (e.key === "Enter") {
      sendChat(question);
      setQuestion(""); // Enter 키를 눌렀을 때 입력 필드 초기화
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
      <div className={styles.chatContainer}>
        {history.map((chat, index) => (
          <div
            key={index}
            className={`${styles.chat} ${
              chat.sender === "me" ? styles.myChat : styles.aiChat
            }`}
          >
            <div className={styles.chatContent}>{chat.content}</div>
          </div>
        ))}
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
          onClick={() => sendChat(question)}
        />
      </div>
    </div>
  );
};

export default Search;