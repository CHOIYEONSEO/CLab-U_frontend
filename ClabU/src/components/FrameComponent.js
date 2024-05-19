import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <section className={styles.loginFormContainerWrapper}>
      <div className={styles.loginFormContainer}>
        <form className={styles.boundary}>
          <div className={styles.inputFields}>
            <div className={styles.id}>
              <input
                className={styles.input}
                placeholder="   아이디"
                type="text"
              />
            </div>
            <div className={styles.passwd}>
              <input
                className={styles.input1}
                placeholder="   비밀번호"
                type="text"
              />
            </div>
          </div>
          <button className={styles.login}>
            <b className={styles.b}>로그인</b>
          </button>
          <div className={styles.accountOptions}>
            <div className={styles.frameParent}>
              <div className={styles.wrapper}>
                <b className={styles.b1}>회원가입</b>
              </div>
              <div className={styles.findIDLink}>
                <b className={styles.b2}>아이디찾기</b>
                <b className={styles.b3}>비밀번호찾기</b>
              </div>
            </div>
          </div>
        </form>
        <div className={styles.container}>
          <b className={styles.b4}>아이디 또는 비밀번호가 잘못되었습니다</b>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
