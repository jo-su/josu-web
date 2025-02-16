import { Icon } from 'react-feather';

export interface INewTabLinkProps {
    type?: "newtablink" | "button"
    accentColor?: string;
    url: string;
    name: string;
    Icon?: Icon;
}