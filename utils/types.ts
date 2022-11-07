import { StaticImageData } from 'next/image';

export interface IimageIconsOptions {
    icon: StaticImageData,
    name: string,
}

export interface IimageProps {
    width: number;
    height: number;
    alt: string;
    image: StaticImageData;
} 

export type IButtonOption = IimageProps & { handleClick: () => void }
