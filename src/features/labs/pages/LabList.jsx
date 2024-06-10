import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import styles from "./LabList.module.css";
import { useFetchLabs } from "../hooks/query";

const LabList = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get("keyword");

  const { data: labs, isLoading } = useFetchLabs(keyword);

  const [labKeyword, setLabKeyword] = useState("");

  const activeEnter = (e) => {
    if (e.key === "Enter") {
      setSearchParams({ keyword: labKeyword });
    }
  };

  useEffect(() => {
    console.log(labs);
  }, [labs]);
  
  return (
    <div className={styles.labList}>
      <div className={styles.tab}>
        <Link className={styles.club} to="/clubs">
          club
        </Link>
        <b className={styles.lab}>lab</b>
      </div>
      <div className={styles.nameSearch}>
        <img
          className={styles.search154734Icon}
          alt=""
          src="/search-154734@2x.png"
        />
        <input
          className={styles.typeHere}
          placeholder="연구실명으로 검색"
          type="text"
          value={labKeyword}
          onChange={(e) => setLabKeyword(e.target.value)}
          onKeyDown={(e) => activeEnter(e)}
        />
      </div>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <div className={styles.grid}>
          {labs.map((lab) => (
            <Link key={lab.id} to={`/labs/${lab.id}`}>
              <img
                alt=""
                src={lab.logoUrl ? lab.logoUrl : '/SKKU.webp'}
              />
              <div className={styles.gridName}>{lab.name}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default LabList;