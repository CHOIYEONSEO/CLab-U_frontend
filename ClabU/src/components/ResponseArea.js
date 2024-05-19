import styles from "./ResponseArea.module.css";

const ResponseArea = () => {
  return (
    <section className={styles.responseArea}>
      <div className={styles.responseContentParent}>
        <div className={styles.responseContent}>
          <div className={styles.firstchat}>
            <b className={styles.b}>
              인공지능 분야 연구실 중 학부생 인턴 모집하는 곳 있어요?
            </b>
          </div>
        </div>
        <div className={styles.firstchat1}>
          <div className={styles.assistantHeader}>
            <div className={styles.logoWrapper}>
              <img className={styles.logoIcon} alt="" src="/logo-2@2x.png" />
            </div>
            <div className={styles.div}>(캐릭터 이름)</div>
          </div>
          <div className={styles.div1}>
            <p className={styles.p}>(설명 ~~~)</p>
            <p className={styles.p1}>~</p>
            <p className={styles.p2}>~</p>
            <p className={styles.p3}>~</p>
            <p className={styles.p4}>~</p>
            <p className={styles.p5}>~</p>
          </div>
        </div>
        <div className={styles.textParent}>
          <b className={styles.text}>{`  `}</b>
          <img
            className={styles.inputfieldIcon}
            alt=""
            src="/inputfield@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default ResponseArea;
