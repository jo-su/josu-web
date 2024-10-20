import QuickLink from "../QuickLink/QuickLink";
import styles from "./QuickLinks.module.scss";
import { Linkedin, Mail, File } from 'react-feather';
import { useTranslations } from "next-intl";

const QuickLinks = () => {

  const t = useTranslations('quick-links');

  return (
    <div className={styles.container}>
      <QuickLink url="https://www.linkedin.com/in/josu-garralda-5b2414140" title={t('linkedin.title')} description={t('linkedin.description')} Icon={Linkedin}/>
      <QuickLink url="mailto:josu.garralda@outlook.com" title={t('email.title')} description={t('email.description')} Icon={Mail}/>
      <QuickLink url="https://1drv.ms/u/s!AtL0l07yUJhjllxmJr3uQbpQW6e2?e=XKcwOJ" title={t('cv.title')} description={t('cv.description')} Icon={File}/>
    </div>
  );

};
  
export default QuickLinks;