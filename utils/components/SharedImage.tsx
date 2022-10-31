import { FC } from 'react';

import Image from 'next/image';
import { IimageProps } from '.././types';

export const SharedImage: FC<IimageProps> = (props: IimageProps) => {
    return (
      <Image
        src={props.image}
        alt={props.alt}
        width={props.width}
        height={props.height}
      />
    );
};
