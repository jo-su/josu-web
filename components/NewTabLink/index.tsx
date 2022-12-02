import { FC } from "react";
import { INewTabLinkProps } from "./models/INewTabLinkProps";
import { ArrowUpRight } from 'react-feather';
import styles from "./styles/NewTabLink.module.css";

const NewTabLink:FC<INewTabLinkProps> = ({url, Icon, name}) => {
    return (
      <a className={styles.link} href={url} rel="noopener noreferrer" target="_blank">
        {name}
        <ArrowUpRight />
      </a>
    );
  };
  
export default NewTabLink;