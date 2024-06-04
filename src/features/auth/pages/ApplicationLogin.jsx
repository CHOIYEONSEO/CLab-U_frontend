import { useState } from "react";
import styles from "./ApplicationLogin.module.css";

const ApplicationLogin = () => {
  const [logInForm, setLogInForm] = useState({
    id: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogInForm({
      ...logInForm,
      [name]: value,
    });
  };

  const [isIdInputClicked, setIsIdInputClicked] = useState(false);
  const [isPasswdInputClicked, setIsPasswdInputClicked] = useState(false);

  return (
    <div className={styles.applicationLogin}>
      <div className={styles.content}>
        <div className={styles.loginForm}>
          <div className={styles.id}>
            <input
              className={styles.idInput}
              onFocus={() => {
                setIsIdInputClicked(true);
              }}
              onBlur={() => {
                setIsIdInputClicked(false);
              }}
              placeholder={isIdInputClicked === true ? "" : "아이디"}
              type="text"
              name="id"
              value={logInForm.id}
              onChange={handleChange}
            />
            <img className={styles.idIcon} alt="" src="/id-icon@2x.png" />
          </div>
          <div className={styles.passwd}>
            <input
              className={styles.passwdInput}
              onFocus={() => {
                setIsPasswdInputClicked(true);
              }}
              onBlur={() => {
                setIsPasswdInputClicked(false);
              }}
              placeholder={isPasswdInputClicked === true ? "" : "비밀번호"}
              type="password"
              name="password"
              value={logInForm.password}
              onChange={handleChange}
            />
            <img className={styles.passwdIcon} alt="" src="/passwd-icon@2x.png" />
          </div>
          <div className={styles.login}>
            <b className={styles.loginText}>로그인</b>
          </div>
            <b className={styles.boundaryText}>
              아이디와 비밀번호 찾기는 관리자에게 문의하세요
            </b>
        </div>
      </div>
    </div>
  );
};

export default ApplicationLogin;