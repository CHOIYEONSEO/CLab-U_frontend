import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "./Icon";
import Separator from "./Separator";
import styles from "./ContentPanel.module.css";

const ContentPanel = () => {
  const navigate = useNavigate();

  const onClubLogoImageClick = useCallback(() => {
    navigate("/club-detail");
  }, [navigate]);

  const onClubDescriptionClick = useCallback(() => {
    navigate("/club-detail");
  }, [navigate]);

  const onSeparatorClick = useCallback(() => {
    navigate("/club-detail");
  }, [navigate]);

  const onSeparator2Click = useCallback(() => {
    navigate("/club-detail");
  }, [navigate]);

  return (
    <section className={styles.contentPanel}>
      <div className={styles.clubBanner}>
        <div className={styles.clublogoParent}>
          <Icon
            propWidth="unset"
            propMinHeight="unset"
            propFlex="1"
            onImageClick={onClubLogoImageClick}
          />
          <textarea
            className={styles.frameChild}
            placeholder={`Members

???
`}
            rows={11}
            cols={14}
          />
        </div>
        <div className={styles.descriptionPanel}>
          <div className={styles.clubdescriptionParent}>
            <Separator
              propHeight="100%"
              propWidth="100%"
              propOutline="unset"
              propAlignSelf="unset"
              propPosition="absolute"
              propTop="0px"
              propLeft="0px"
              onSeparator1Click={onClubDescriptionClick}
            />
            <b className={styles.description}>
              B.E.S.T.는 Beat Enjoy Scream Trend의 준말로, 스트릿댄스(왁킹,
              락킹, 힙합, 팝핀, 블킨, 하우스, 소울, 얼반 등)를 연습하고 공연하는
              성균관대학교 자과캠 유일한 중앙 스트릿댄스 동아리입니다. 교내에서
              인정을 받는 동아리이고, 대외에서도 열심히 활동하며 입지를 다지고
              있습니다. 현재 자과캠 댄스 동아리 중 가장 큰 규모이고, 그런 만큼
              가장 좋은 장비들을 통해 동아리원들의 연습 환경을 위해 노력하고
              있습니다.
            </b>
          </div>
          <Separator
            propHeight="229px"
            propWidth="auto"
            propOutline="none"
            propAlignSelf="stretch"
            propPosition="relative"
            propTop="unset"
            propLeft="unset"
            onSeparator1Click={onSeparatorClick}
          />
          <Separator onSeparator1Click={onSeparator2Click} />
        </div>
      </div>
    </section>
  );
};

export default ContentPanel;
