import React, { FC, useState } from "react";
import { IProfileStoryProps } from "./models/IProfileStoryProps";
import Stories from "react-insta-stories";
import styles from './styles/ProfileStory.module.css'
import { useTranslation } from "react-i18next";

const ProfileStory: FC<IProfileStoryProps> = ({close}) => {
  
  const storyContent = {
      width: 'auto',
      maxWidth: '100%',
      maxHeight: '90vh',
      margin: 'auto',
      border:0,
      backgroundColor: 'var(--background)'
  }

  const { t } = useTranslation('story');
  const t2 = useTranslation('common').t;

  const [ currentId, setCurrentId ] = useState(0);

  const stories = [
    {
      content: () => {
        return (
          <div className={styles.storyContainer}>
            <div className={styles.storyContent}>
              <br/>
              <h1>{t('1.hi')+' 👋'}</h1>
              <br/>
              <h1>{t('1.myName')+' 🙆🏽‍♂️'}</h1>
              <br/>
              <h2>{t('1.niceToMeetYou')}</h2>
            </div>
          </div>
        );
      }
    },
    {
      duration: 4000,
      content: () => {
        return (
          <div className={styles.storyContainer}>
            <div className={styles.storyContent}>
              <h1>{t('2.notReady')}</h1>
              <h1>😔</h1>
            </div>
          </div>
        );
      }
    },
    {
      duration: 5000,
      content: () => {
        return (
          <div className={styles.storyContainer}>
            <div className={styles.storyContent}>
              <h3>{t('3.however')}</h3>
            </div>
          </div>
        );
      }
    }
]


  return (
    <>
      <button className={styles.close_button} onClick={()=>{close()}}>
        {t2('close')}
      </button>
      <Stories 
        stories={stories}
        defaultInterval={3000}
        storyStyles={storyContent}
        loop={false}
        keyboardNavigation={true}
        currentIndex={currentId}
        onStoryEnd={() => {
          setCurrentId(currentId => currentId + 1);
        }}
        onAllStoriesEnd={(s:any, st:any) => {
          setCurrentId(currentId => 0);
          close();
      }}
        onStoryStart={() => {
          setCurrentId(currentId => (currentId + 1) - 1);
        }}
      />
    </>
  );
}



export default ProfileStory;