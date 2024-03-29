import styles from './Profile.module.scss'
import React,{useState} from 'react';
import Modal from 'react-modal';
import ProfileStory from '../ProfileStory/ProfileStory';
import { useTranslation, Trans } from 'next-i18next'

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
    borderColor: 'var(--border)',
    maxWidth: '90vw',
    maxHeight: '90vh'
  },
  overlay: {
    zIndex: 1500,
    background: 'var(--overlay-background)',
  }
};

Modal.setAppElement('#__next');

const Profile = () => {

  const { t } = useTranslation('common');

  const [modalIsOpen, setModalIsOpen] = useState(false);

    function openModal() {
      setModalIsOpen(true);
    }
  
    function closeModal() {
      setModalIsOpen(false);
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
            <div 
              className={styles.pic}
              style={{backgroundImage: "url(/images/vicom-profilepic.webp)"}}
            >
            </div>
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