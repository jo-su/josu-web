import { FC } from "react";
import { INewTabLinkProps } from "./INewTabLinkProps";
import { ArrowUpRight } from 'react-feather';
import styles from "./NewTabLink.module.scss";

const NewTabLink:FC<INewTabLinkProps> = ({url, accentColor, name}) => {

    return (
      <a className={styles.link} style={accentColor ? { "--highlight": accentColor } as React.CSSProperties : {}} href={url} rel="noopener noreferrer" target="_blank">
        {name}
        <ArrowUpRight />
      </a>
    );
  };
  
export default NewTabLink;