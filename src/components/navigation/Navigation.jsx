import PropTypes from "prop-types";
import { useCallback, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../fonts/Font.css";
import Account from "../Account";
import PortalPopup from "../PortalPopup";
import styles from "./Navigation.module.css";

const Navigation = ({ className = "", logIn, account1, logo }) => {
  const [isAccountOpen, setAccountOpen] = useState(false);

  const openAccount = useCallback(() => {
    setAccountOpen(true);
  }, []);

  const closeAccount = useCallback(() => {
    setAccountOpen(false);
  }, []);

  return (
    <>
      <nav
        className={[styles.navigation, className].join(" ")}
        style={{
          width: "100%",
        }}
      >
        <Link to="/">
          <img className={styles.logoIcon} alt="" src={logo} />
        </Link>
        <Link className={styles.clabu} to="/">
          Clab-U
        </Link>

        <NavLink className={styles.search} to="/search">
          <div className={styles.search1}>Search</div>
        </NavLink>
        <NavLink className={styles.list} to="/labs">
          <div className={styles.application1}>List</div>
        </NavLink>
        <NavLink className={styles.application} to="/labs/form">
          <div className={styles.application1}>Application</div>
        </NavLink>
        <div className={styles.application1}>
          <Link to="/login">
            <img className={styles.loginIcon} alt="" src={logIn} />
          </Link>
          <img
            className={styles.account1Icon}
            alt=""
            src={account1}
            onClick={openAccount}
          />
        </div>
      </nav>
      {isAccountOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAccount}
        >
          <Account onClose={closeAccount} />
        </PortalPopup>
      )}
    </>
  );
};

Navigation.propTypes = {
  className: PropTypes.string,
  logIn: PropTypes.string,
  account1: PropTypes.string,
  logo: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propRight: PropTypes.any,
};

export default Navigation;
