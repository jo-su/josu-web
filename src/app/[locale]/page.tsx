import MainCard from '../../components/MainCard/MainCard';
import styles from '../../styles/Home.module.scss';
import LocalePicker from '../../components/LocalePicker/LocalePicker';
import { useTranslations } from 'next-intl';


const Homepage = () => {
  const t = useTranslations('common');
  
  return (
    <>
      <div className={styles.container}>
        <LocalePicker/>
        <MainCard/>
      </div>
    </>
  )
}

export default Homepage;
