import styles from "./styles/LocalePicker.module.css";
import { FC } from "react";
import { useRouter } from "next/router";

const LocalePicker: FC = () => {
  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const toggleLocale= (newLocale: string) => {
    const { pathname, asPath, query } = router
    router.push({ pathname, query }, asPath, { locale: newLocale })
  }

  return (
    <div className={styles.container}>
      <button onClick={()=>toggleLocale('en')} className={router.locale=='en' ? styles.chosen:""}>EN</button>
      <button onClick={()=>toggleLocale('eu')} className={router.locale=='eu' ? styles.chosen:""}>EU</button>
      <button onClick={()=>toggleLocale('es')} className={router.locale=='es' ? styles.chosen:""}>ES</button>
    </div>
  );

};
  
export default LocalePicker;