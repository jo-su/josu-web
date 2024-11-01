'use client'

import styles from './Profile.module.scss'
import React,{useState} from 'react';
import Modal from 'react-modal';
import ProfileStory from '../ProfileStory/ProfileStory';
import { useTranslations } from 'next-intl';
import { usePostHog } from 'posthog-js/react';
import Image from "next/image";

import profileImage from '../../../public/images/vicom-profilepic.webp';

const modalStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding:0,
    margin:0,
    border:'none',
    background: 'transparent !important',
    width: 'calc(80vh * 0.5625)',
    height: '80vh',
  },
  overlay: {
    zIndex: 1500,
    background: 'var(--overlay-background)',
  }
};

//Modal.setAppElement('#__next');

const Profile = () => {

  const t = useTranslations('common');

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const posthog = usePostHog();

  function openModal() {
    setModalIsOpen(true);
    posthog.capture('story', {
      action: "open"
    });
  }

  function closeModal() {
    setModalIsOpen(false);
    posthog.capture('story', {
      action: "close"
    });
  }

    return (
      <>
          <svg className={styles.spinning_msg} viewBox="0 0 500 500">
            <defs>
              <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="circle">
              </path>
            </defs>
            <text>
              <textPath href="#circle">
                {t('profileCircleText')}
              </textPath>
            </text>
          </svg>
          <div className={styles.gradient} onClick={openModal}>
            <Image className={styles.pic} src={profileImage} alt={'Josu Garralda - '+t('profileCircleText')} priority={true} placeholder={'blur'}/>
          </div>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={modalStyle}
          contentLabel="Story"
        >
          <ProfileStory close={closeModal}/>
        </Modal>
      </>
    );
  };
  
export default Profile;