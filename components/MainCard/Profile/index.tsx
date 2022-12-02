import styles from './styles/Profile.module.css'
import React,{useState} from 'react';
import Modal from 'react-modal';
import ProfileStory from './ProfileStory';
import { useTranslation, Trans } from 'next-i18next'

const customStyles = {
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
      console.log("open modal");
      setModalIsOpen(true);
    }
  
    function closeModal() {
      setModalIsOpen(false);
    }

    return (
      <>
        <div className={styles.spinning_msg}>
          <svg viewBox="0 0 500 500">
            <defs>
              <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="circle">
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  dur="15s"
                  type="rotate"
                  from="0 250 250"
                  to="360 250 250"
                  repeatCount="indefinite"
                />
              </path>
            </defs>
            <text dy="80">
              <textPath xlinkHref="#circle">
                {t('profileCircleText')}
              </textPath>
            </text>
          </svg>
        </div>
        <div className={styles.gradient} onClick={openModal}>
          <div 
            className={styles.pic}
            style={{backgroundImage: "url(https://media-exp1.licdn.com/dms/image/C4E03AQEV879FtizJDw/profile-displayphoto-shrink_200_200/0/1620392571991?e=1674691200&v=beta&t=6RiczRCp6RPHKbgiRxweXEbuLC9jT7Eug202WF8oasc)"}}
          >
          </div>
        </div>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Story"
        >
          <ProfileStory close={closeModal}/>
        </Modal>
      </>
    );
  };
  
export default Profile;