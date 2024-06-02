import PropTypes from "prop-types";
import styles from "./Account.module.css";

const Account = ({ className = "" }) => {
  return (
    <div className={[styles.account, className].join(" ")}>
      <div className={styles.npc}>안녕하세요, NPC 님.</div>
      <img
        className={styles.freeIconX38189271}
        alt=""
        src="/freeiconx3818927-1@2x.png"
      />
      <img className={styles.account2Icon} alt="" src="/account-2@2x.png" />
      <div className={styles.div}>로그아웃하기</div>
    </div>
  );
};

Account.propTypes = {
  className: PropTypes.string,
};

export default Account;
