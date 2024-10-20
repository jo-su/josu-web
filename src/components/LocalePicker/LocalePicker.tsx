'use client'

import styles from "./LocalePicker.module.scss";
import { FC } from "react";
import { Link } from "../../i18n/routing";
import { useLocale } from "next-intl";

const LocalePicker: FC = () => {
  const locale = useLocale();


  return (
    <>
    <div className={styles.container}>
      <Link className={locale === "en" ? styles.chosen : ""} locale="en" href={"en"}>EN</Link>
      <Link className={locale === "eu" ? styles.chosen : ""} locale="eu" href={"eu"}>EU</Link>
      <Link className={locale === "es" ? styles.chosen : ""} locale="es" href={"es"}>ES</Link>
    </div>
    </>
  );

};
  
export default LocalePicker;