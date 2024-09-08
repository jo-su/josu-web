import styles from './MainCard.module.scss'
import Profile from '../Profile/Profile';
import Signature from '../Signature/Signature';


import React from 'react';
import Header from '../Header/Header';
import QuickLinks from '../QuickLinks/QuickLinks';
import { useTranslation, Trans } from 'next-i18next'

const MainCard = () => {
  const { t } = useTranslation('common');
    return (
      <div className={styles.card}>
        <Profile/>
        <div className={styles.content}>
          <Header />
          <p>{t('description')}</p>
          <QuickLinks />
        </div>
        <Signature/>
      </div>
    );
  };
  
export default MainCard;