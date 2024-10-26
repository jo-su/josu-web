import React, { FC, useState } from "react";
import { IProfileStoryProps } from "./IProfileStoryProps";
import Stories, { WithSeeMore } from "react-insta-stories";
import styles from './ProfileStory.module.scss'
import { X } from "react-feather";
import { useTranslations } from "next-intl";
import Image from "next/image";

import story1 from '../../../public/images/story/josu.webp';
import story2 from '../../../public/images/story/introduction.webp';
import story3 from '../../../public/images/story/arrasate.webp';
import story4 from '../../../public/images/story/interestAreas.webp';
import story5 from '../../../public/images/story/senegal.webp';
import story6 from '../../../public/images/story/cooking.webp';
import story7 from '../../../public/images/story/palmtree.webp';

const ProfileStory: FC<IProfileStoryProps> = ({close}) => {

  const t = useTranslations('story');

  const [ currentId, setCurrentId ] = useState(0);

  const stories = [
    {
      duration: 5000,
      content: () => {
        return (
          <div className={styles.storyContainer} >
                <Image className={styles.storyImage} src={story1} alt={''} priority={true} placeholder={'blur'}/>
                <div className={styles.storyContent} >
                    <div
                      className={styles.storyBox}
                      style={{
                        backgroundColor: "var(--dark-overlay)",
                        color: "var(--white)",
                        marginTop: "1rem",
                        padding: "20px",
                        borderRadius:"1rem",
                        alignItems: "center"
                      }}
                    >
                      <h1>{t('1.hi')+' 👋'}</h1>
                      <h1>{t('1.myName')+' 🙆🏽‍♂️'}</h1>
                    </div>
                    <div
                      className={styles.storyBox}
                      style={{
                        backgroundColor: "var(--dark-overlay)",
                        color: "var(--white)",
                        marginTop: "20px",
                        padding: "10px",
                        borderRadius:"1rem",
                        textAlign: "center"
                      }}
                    >
                      <h3>{t('1.niceToMeetYou')}</h3>
                    </div>
                </div>
          </div>
        );
      }
    },
    {
      duration: 15000,
      content: () => {
        return (
            <div className={styles.storyContainer} >
                <Image className={styles.storyImage} src={story2} alt={'Kaixo'} priority={true} placeholder={'blur'}/>
                <div className={styles.storyContent} >
                    <div
                      className={styles.storyBox}
                      style={{
                        backgroundColor: "var(--dark-overlay)",
                        color: "var(--white)",
                        marginTop: "20px",
                        padding: "10px",
                        borderRadius:"1rem",
                        textAlign: "left"
                      }}
                    >
                      <h3>{t('2.introduction')}</h3>
                    </div>
                    <div
                      className={styles.storyBox}
                      style={{
                        backgroundColor: "var(--dark-overlay)",
                        color: "var(--white)",
                        marginTop: "5px",
                        padding: "10px",
                        borderRadius:"1rem",
                        textAlign: "left"
                      }}
                    >
                      <h3>{t('2.introduction2')}</h3>
                    </div>
                    <div
                      className={styles.storyBox}
                      style={{
                        backgroundColor: "var(--dark-overlay)",
                        color: "var(--white)",
                        marginTop: "5px",
                        padding: "10px",
                        borderRadius:"1rem",
                        textAlign: "left"
                      }}
                    >
                      <h3>{t('2.introduction3')}</h3>
                    </div>
                </div>
          </div>
        );
      }
    },
    {
      duration: 7000,
      content: () => {
        return (
            <div className={styles.storyContainer} >
                <Image className={styles.storyImage} src={story3} alt={''} priority={true} placeholder={'blur'}/>
                <div className={styles.storyContent} >
                    <div
                      className={styles.storyBox}
                      style={{
                        backgroundColor: "var(--dark-highlight)",
                        color: "var(--white)",
                        marginTop: "50px",
                        padding: "10px",
                        borderRadius:"1rem",
                        textAlign: "left"
                      }}
                    >
                      <h3>{t('3.university')}</h3>
                    </div>
                    <div
                      className={styles.storyBox}
                      style={{
                        backgroundColor: "var(--dark-highlight)",
                        color: "var(--white)",
                        marginTop: "300px",
                        padding: "10px",
                        borderRadius:"1rem",
                        textAlign: "left"
                      }}
                    >
                      <h3>{t('3.university2')}</h3>
                    </div>
                </div>
          </div>
        );
      }
    },
    {
      duration: 10000,
      content: () => {
        return (
            <div className={styles.storyContainer} >
                <Image className={styles.storyImage} src={story4} alt={''} priority={true} placeholder={'blur'}/>
                <div className={styles.storyContent} >
                    <div
                      className={styles.storyBox}
                      style={{
                        backgroundColor: "var(--light-highlight)",
                        color: "var(--black)",
                        marginTop: "250px",
                        padding: "10px",
                        borderRadius:"1rem",
                        textAlign: "left"
                      }}
                    >
                      <h4>{t('4.favAreas')}</h4>
                    </div>
                    <div
                      className={styles.storyBox}
                      style={{
                        backgroundColor: "var(--light-highlight)",
                        color: "var(--black)",
                        marginTop: "20px",
                        padding: "10px",
                        borderRadius:"1rem",
                        textAlign: "left"
                      }}
                    >
                      <h4>{t('4.favAreas2')}</h4>
                    </div>
                </div>
          </div>
        );
      }
    },
    {
      content: () => {
        return (
            <div className={styles.storyContainer} >
                <Image className={styles.storyImage} src={story5} alt={''} priority={true} placeholder={'blur'}/>
                <div className={styles.storyContent} >
                    <div
                      className={styles.storyBox}
                      style={{
                        backgroundColor: "var(--dark-highlight)",
                        color: "var(--white)",
                        marginTop: "50px",
                        padding: "10px",
                        borderRadius:"1rem",
                        textAlign: "center"
                      }}
                    >
                      <h3>{t('5.vacation')}</h3>
                    </div>
                    <div
                      className={styles.storyBox}
                      style={{
                        backgroundColor: "var(--dark-highlight)",
                        color: "var(--white)",
                        marginTop: "20px",
                        padding: "10px",
                        borderRadius:"1rem",
                        textAlign: "center"
                      }}
                    >
                      <h3>{t('5.vacation2')}</h3>
                    </div>
                </div>
          </div>
        );
      }
    },
    {
      content: () => {
        return (
            <div className={styles.storyContainer} >
                <Image className={styles.storyImage} src={story6} alt={''} priority={true} placeholder={'blur'}/>
                <div className={styles.storyContent} >
                    <div
                      className={styles.storyBox}
                      style={{
                        backgroundColor: "var(--dark-highlight)",
                        color: "var(--white)",
                        marginTop: "20px",
                        padding: "10px",
                        borderRadius:"1rem",
                        textAlign: "center"
                      }}
                    >
                      <h3>{t('6.cooking')}</h3>
                    </div>
                    <div
                      className={styles.storyBox}
                      style={{
                        backgroundColor: "var(--dark-highlight)",
                        color: "var(--white)",
                        marginTop: "20px",
                        padding: "10px",
                        borderRadius:"1rem",
                        textAlign: "center"
                      }}
                    >
                      <h3>{t('6.cooking2')}</h3>
                    </div>
                </div>
          </div>
        );
      }
    },
    {
      content: () => {
        return (
            <div className={styles.storyContainer} >
                <Image className={styles.storyImage} src={story7} alt={''} priority={true} placeholder={'blur'}/>
                <div className={styles.storyContent} >
                    <div
                      className={styles.storyBox}
                      style={{
                        backgroundColor: "var(--light-highlight)",
                        color: "var(--black)",
                        marginTop: "150px",
                        padding: "10px",
                        borderRadius:"1rem",
                        textAlign: "center"
                      }}
                    >
                      <h2>{t('7.wannaKnowMore')}</h2>
                    </div>
                    <div
                      className={styles.storyBox}
                      style={{
                        backgroundColor: "var(--dark-highlight)",
                        color: "var(--white)",
                        marginTop: "30px",
                        padding: "10px",
                        borderRadius:"1rem",
                        textAlign: "center"
                      }}
                    >
                      <h3>{t('7.contactMe')}</h3>
                    </div>
                </div>
          </div>
        );
      }
    }
]


  return (
    <>
      <button className={styles.close_button} onClick={()=>{close()}}>
        <X />
      </button>
      <Stories
        stories={stories}
        height={'80vh'}
        defaultInterval={7000}
        storyStyles={{position: "relative"}}
        storyContainerStyles={{ maxWidth: "calc(80vw - 2px)", overflow: "hidden" }}
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