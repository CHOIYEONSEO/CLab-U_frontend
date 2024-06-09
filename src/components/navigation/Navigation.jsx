import PropTypes from "prop-types";
import { useCallback, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../fonts/Font.css";
import Account from "../Account";
import Account1 from "../Account1";
import PortalPopup from "../PortalPopup";
import styles from "./Navigation.module.css";
import axios from "axios";

const Navigation = ({ className = "", logIn, account1, logo }) => {
  const [isAccountOpen, setAccountOpen] = useState(false);
  const [isLogined, setIsLogined] = useState(false);
  const [name, setName] = useState("");

  const checkLoginStatus = async () => {
    try {
      const response = await axios.get(`/api/users/me`);
      const loginStatus = response.data;
      const isLogined = loginStatus.activated;
      return isLogined;
    } catch (error) {
      return false;
    }
  };

  const getName = async () => {
    try {
      const response = await axios.get(`/api/users/me`);
      const loginStatus = response.data;
      const name = loginStatus.name;
      console.log(name);
      return name;
    } catch (error) {
      return false;
    }
  };

  useEffect(() => {
    const fetchLoginStatus = async () => {
      const status = await checkLoginStatus();
      setIsLogined(status);
    };
    fetchLoginStatus();
    const fetchLoginStatusAndName = async () => {
      const loginedStatus = await checkLoginStatus();
      setIsLogined(loginedStatus);

      if (loginedStatus) {
        const userName = await getName();
        setName(userName);
      }
    };

    fetchLoginStatusAndName();
  }, []);

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
          <div className={styles.list1}>List</div>
        </NavLink>
        {
          (name === 'clabu') ? (
            <NavLink className={styles.application} to="/admin">
              <div className={styles.application1}>Manage</div>
            </NavLink>
          ) : (
            isLogined ? (
              <NavLink className={styles.application} to="/labs/update">
                <div className={styles.application1}>Update</div>
              </NavLink>
            ) : (
              <NavLink className={styles.application} to="/labs/form">
                <div className={styles.application1}>Application</div>
              </NavLink>
            )
          )
        }
        
        
        <div className={styles.logIn}>
          <img
            className={styles.loginIcon}
            alt=""
            src={account1}
            onClick={openAccount}
          />
        </div>
      </nav>
      {isLogined &&
        isAccountOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAccount}
        >
          <Account name={name} onClose={closeAccount} />
        </PortalPopup>
      )}
      {!(isLogined) && isAccountOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAccount}
        >
          <Account1 onClose={closeAccount} />
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
