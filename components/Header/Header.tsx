import NewTabLink from "../NewTabLink/NewTabLink";
import { useTranslation, Trans } from 'next-i18next'

const Header = () => {

  const { t } = useTranslation('common');

  return (
    <div>
      <h1>JOSU GARRALDA</h1>
      <h2>{t('position')}</h2>
      <br/>
      <h3>
        <span style={{color: "#d87272"}}>
          {t('now')+": "}  
        </span>
        <span style={{opacity: 0.8}}>
          <Trans i18nKey='nowText' t={t}>
            Software developer & DevOps @ <NewTabLink name="Vicomtech" url="https://www.vicomtech.org" />
          </Trans>
        </span>
      </h3>
      {/*<h4 style={{display: "flex", alignItems: "center", gap: "5px"}}><MapPin size="16px" color="DarkCoral"/> Donostia</h4>*/}
    </div>
  );
};
  
export default Header;
