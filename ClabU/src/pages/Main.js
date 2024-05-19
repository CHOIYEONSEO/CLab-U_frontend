import Navigation2 from "../components/Navigation2";
import RightNavbar from "../components/RightNavbar";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <div className={styles.main}>
      <Navigation2 />
      <RightNavbar />
    </div>
  );
};

export default Main;
