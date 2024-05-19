import FrameComponent2 from "../components/FrameComponent2";
import ResponseArea from "../components/ResponseArea";
import styles from "./Search.module.css";

const Search = () => {
  return (
    <div className={styles.search}>
      <FrameComponent2 />
      <ResponseArea />
    </div>
  );
};

export default Search;
