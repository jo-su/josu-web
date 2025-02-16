import MainCard from '../../components/MainCard/MainCard';
import styles from '../../styles/Home.module.scss';
import LocalePicker from '../../components/LocalePicker/LocalePicker';
import { useTranslations } from 'next-intl';
import FeaturedCard from '../../components/FeaturedCard/FeaturedCard';


const Homepage = () => {
  const t = useTranslations('common');
  
  return (
    <>
      <div className={styles.container}>
        <LocalePicker/>
        <div>
          <MainCard/>
          <FeaturedCard/>
        </div>
      </div>
    </>
  )
}

export default Homepage;
