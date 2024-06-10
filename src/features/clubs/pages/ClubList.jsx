import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import styles from "./ClubList.module.css";
import { useFetchClubs } from "../hooks/query";

const ClubList = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get("keyword");

  const { data: clubs, isLoading } = useFetchClubs(keyword);

  const [clubQuery, setclubQuery] = useState("");

  const activeEnter = (e) => {
    if (e.key === "Enter") {
      setSearchParams({ keyword: clubQuery });
    }
  };

  useEffect(() => {
    console.log(clubs);
  }, [clubs]);

  return (
    <div className={styles.clubList}>
      <div className={styles.tab}>
        <Link className={styles.club} to="/clubs">
          <b>club</b>
        </Link>
        <Link className={styles.lab} to="/labs">
          lab
        </Link>
      </div>
      <div className={styles.nameSearch}>
        <img
          className={styles.search154734Icon}
          alt=""
          src="/search-154734@2x.png"
        />
        <input
          className={styles.typeHere}
          placeholder="동아리명으로 검색"
          type="text"
          value={clubQuery}
          onChange={(e) => setclubQuery(e.target.value)}
          onKeyDown={(e) => activeEnter(e)}
        />
      </div>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <div className={styles.grid}>
          {clubs.map((club) => (
            <Link key={club.id} to={`/clubs/${club.id}`}>
              <img
                alt=""
                src={club.logoUrl ? club.logoUrl : '/SKKU.webp'}
              />
              <div className={styles.gridName}>{club.name}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ClubList;