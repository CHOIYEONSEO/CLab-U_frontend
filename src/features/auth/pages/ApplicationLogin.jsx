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
      <div className={styles.boundary}>
        <b className={styles.b}>
          아이디와 비밀번호 찾기는 관리자에게 문의하세요
        </b>
      </div>
      <div className={styles.login} to="/">
        <b className={styles.b1}>로그인</b>
      </div>
      <div className={styles.passwd}>
        <input
          className={styles.passwdInput}
          onFocus={() => {
            setIsPasswdInputClicked(true);
          }}
          // 클릭되어 있지 않을 때 작동(input 이외의 영역이 클릭되었을 때)
          onBlur={() => {
            setIsPasswdInputClicked(false);
          }}
          placeholder={isPasswdInputClicked === true ? "" : "비밀번호"}
          type="password"
          name="passwd"
          value={logInForm.password}
          onChange={handleChange}
        />
        <img className={styles.passwdIcon} alt="" src="/passwd-icon@2x.png" />
      </div>
      <div className={styles.id}>
        <input
          className={styles.idInput}
          onFocus={() => {
            setIsIdInputClicked(true);
          }}
          // 클릭되어 있지 않을 때 작동(input 이외의 영역이 클릭되었을 때)
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
    </div>
  );
};

export default ApplicationLogin;
