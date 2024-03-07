import type { iconPaths } from '@data/iconPaths';

export default interface FooterLink {
    label: string;
    href: string;
    icon: keyof typeof iconPaths;
}
