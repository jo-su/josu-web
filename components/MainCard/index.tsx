import styles from './styles/MainCard.module.css'
import Profile from './Profile';
import Signature from '../Signature';


import React from 'react';
import Header from './Header/Header';
import QuickLinks from '../QuickLinks/QuickLinks';
import { useTranslation, Trans } from 'next-i18next'
import NewTabLink from '../NewTabLink';
import {MapPin, ArrowDown} from 'react-feather';

const MainCard = () => {
  const { t } = useTranslation('common');
    return (
      <div className={styles.card}>
        <Profile/>
        <div className={styles.content}>
          <br/><br/><br/><br/>
          <Header />
          <p>{t('description')}</p>
          <QuickLinks />
          <br/><br/><br/>
        </div>
        <Signature/>
      </div>
    );
  };
  
export default MainCard;