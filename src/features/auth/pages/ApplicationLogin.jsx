import { useState } from "react";
import axios from "axios";
import styles from "./ApplicationLogin.module.css";
import { useNavigate, redirect } from "react-router-dom";

const ApplicationLogin = () => {
  const [logInForm, setLogInForm] = useState({
    username: "",
    password: "",
  });

  const [isIdInputClicked, setIsIdInputClicked] = useState(false);
  const [isPasswdInputClicked, setIsPasswdInputClicked] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogInForm({
      ...logInForm,
      [name]: value,
    });
  };

  const activeEnter = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(`/api/auth/login`, logInForm);
      if (response.status === 200) {
        window.alert("로그인 성공");
        navigate("/admin");
        window.location.reload(); //임시방편. Manage로 바뀌는데 지연있음.
      }
    } catch (error) {
      window.alert("로그인 실패");
      setErrorMessage("로그인에 실패했습니다. 아이디와 비밀번호를 확인하세요.");
    }
  };

  return (
    <div className={styles.applicationLogin}>
      <div className={styles.content}>
        <div className={styles.loginForm}>
          <div className={styles.id}>
            <input
              className={styles.idInput}
              onFocus={() => setIsIdInputClicked(true)}
              onBlur={() => setIsIdInputClicked(false)}
              placeholder={isIdInputClicked ? "" : "아이디"}
              type="text"
              name="username"
              value={logInForm.username}
              onChange={handleChange}
            />
            <img className={styles.idIcon} alt="" src="/id-icon@2x.png" />
          </div>
          <div className={styles.passwd}>
            <input
              className={styles.passwdInput}
              onFocus={() => setIsPasswdInputClicked(true)}
              onBlur={() => setIsPasswdInputClicked(false)}
              placeholder={isPasswdInputClicked ? "" : "비밀번호"}
              type="password"
              name="password"
              value={logInForm.password}
              onChange={handleChange}
              onKeyDown={(e) => activeEnter(e)}
            />
            <img className={styles.passwdIcon} alt="" src="/passwd-icon@2x.png" />
          </div>
          <div className={styles.login} onClick={handleLogin}>
            <b className={styles.loginText}>로그인</b>
          </div>
          {errorMessage && (
            <div className={styles.errorMessage}>{errorMessage}</div>
          )}
          <b className={styles.boundaryText}>
            아이디와 비밀번호 찾기는 관리자에게 문의하세요
          </b>
        </div>
      </div>
    </div>
  );
};

export default ApplicationLogin;
