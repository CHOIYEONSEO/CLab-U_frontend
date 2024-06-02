import { useState, useMemo, useCallback } from "react";
import Account from "./Account";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Navigation1.module.css";

const Navigation1 = ({
  className = "",
  logIn,
  account1,
  logo,
  propWidth,
  propRight,
  onApplicationContainerClick,
  onListContainerClick,
  onSearchContainerClick,
  onClabUTextClick,
  onLogoIconClick,
}) => {
  const [isAccountOpen, setAccountOpen] = useState(false);
  const navigationStyle = useMemo(() => {
    return {
      width: propWidth,
      right: propRight,
    };
  }, [propWidth, propRight]);

  const navigate = useNavigate();

  const onLogInImageClick = useCallback(() => {
    navigate("/application-login");
  }, [navigate]);

  const openAccount = useCallback(() => {
    setAccountOpen(true);
  }, []);

  const closeAccount = useCallback(() => {
    setAccountOpen(false);
  }, []);

  return (
    <>
      <div
        className={[styles.navigation, className].join(" ")}
        style={navigationStyle}
      >
        <img
          className={styles.logoIcon}
          alt=""
          src={logo}
          onClick={onLogoIconClick}
        />
        <div className={styles.clabu} onClick={onClabUTextClick}>
          Clab-U
        </div>
        
        
        <div className={styles.search} onClick={onSearchContainerClick}>
          <div className={styles.search1}>Search</div>
        </div>
        <div className={styles.list} onClick={onListContainerClick}>
          <div className={styles.application1}>List</div>
        </div>
        <div
          className={styles.application}
          onClick={onApplicationContainerClick}
        >
          <div className={styles.application1}>Application</div>
        </div>
        <div 
          className={styles.application1}>
        <img
          className={styles.loginIcon}
          alt=""
          src={logIn}
          onClick={onLogInImageClick}
        />
        <img
          className={styles.account1Icon}
          alt=""
          src={account1}
          onClick={openAccount}
        /></div>
        
        
        
      </div>
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

Navigation1.propTypes = {
  className: PropTypes.string,
  logIn: PropTypes.string,
  account1: PropTypes.string,
  logo: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propRight: PropTypes.any,

  /** Action props */
  onApplicationContainerClick: PropTypes.func,
  onListContainerClick: PropTypes.func,
  onSearchContainerClick: PropTypes.func,
  onClabUTextClick: PropTypes.func,
  onLogoIconClick: PropTypes.func,
};

export default Navigation1;
