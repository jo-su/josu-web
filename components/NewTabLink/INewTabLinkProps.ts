import { Icon } from 'react-feather';

export interface INewTabLinkProps {
    type?: "newtablink" | "button" 
    url: string;
    name: string;
    Icon?: Icon;
}