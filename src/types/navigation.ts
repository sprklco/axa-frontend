export interface NavItem {
    label: string;
    href?: string;
    icon?: React.ReactNode;
    children?: NavItem[];
    variant?: 'primary' | 'secondary' | 'meta';
}
