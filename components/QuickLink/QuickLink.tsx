import { FC } from "react";
import { IQuickLinkProps } from "./IQuickLinkProps";
import styles from "./QuickLink.module.scss";

const QuickLink:FC<IQuickLinkProps> = ({url, Icon, title, description}) => {
    return (
      <a className={styles.button} href={url} rel="noopener noreferrer" target="_blank">
        <span className={styles.icon}>{<Icon/>}</span>
        <div className={styles.text}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </a>
    );
  };
  
export default QuickLink;