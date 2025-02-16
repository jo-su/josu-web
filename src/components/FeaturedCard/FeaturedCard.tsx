import styles from './FeaturedCard.module.scss'
import Profile from '../Profile/Profile';
import Signature from '../Signature/Signature';


import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import bidaiaLogo from '../../../public/images/bidaia_logo.png';
import NewTabLink from '../NewTabLink/NewTabLink';

const FeaturedCard = () => {
  const t = useTranslations("featured");
    return (
      <div className={styles.card}>
        <div className={styles.content}>
          <Image className={styles.pic} src={bidaiaLogo} alt={'Bidaia logo'} priority={true} placeholder={'empty'}/>
          <div className={styles.innerContent}>
            <div className={styles.text}>
              <h4>{t('title')}</h4>
              <small>{t('subtitle')}</small>
            </div>
          </div>
        </div>
        <span className={styles.actions}>
              <NewTabLink url={'https://gitlab.com/bidaia-platform'} name={t('checkProject')} accentColor='#F97316'></NewTabLink>
              <NewTabLink url={'https://bidaia.garralda.eus'} name={t('goToApp')} accentColor='#F97316'></NewTabLink>
        </span>
      </div>
    );
  };
  
export default FeaturedCard;