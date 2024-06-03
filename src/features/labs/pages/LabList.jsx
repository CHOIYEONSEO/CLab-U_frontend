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

  // const labs = [
  //   {
  //     id: 1,
  //     name: "인공지능을 활용한 보안",
  //     logoUrl: "/@2x.png",
  //   },
  //   {
  //     id: 2,
  //     name: "데이터 기반 융합 보안",
  //     logoUrl: "/-2@2x.png",
  //   },
  //   {
  //     id: 3,
  //     name: "컴퓨팅 플랫폼",
  //     logoUrl: "/-3@2x.png",
  //   },
  //   {
  //     id: 4,
  //     name: "시스템 보안",
  //     logoUrl: "/-4@2x.png",
  //   },
  //   {
  //     id: 5,
  //     name: "소프트웨어 공학",
  //     logoUrl: "/-5@2x.png",
  //   },
  //   {
  //     id: 6,
  //     name: "자연어 처리 연구실",
  //     logoUrl: "/-6@2x.png",
  //   },
  // ];

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
                style={{ maxHeight: "100%", maxWidth: "100%" }}
                alt=""
                src={lab.logoUrl}
              />
              <div>{lab.name}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default LabList;
