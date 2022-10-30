import { FC } from 'react';
import { IimageProps } from './types';

import { SharedImage } from './SharedImage';

export const SharedButton: FC<IimageProps> = (props: IimageProps) => {
    return (
    <button style={{ 
        cursor: "pointer",
        margin: "0 10px",
     }}>
            <SharedImage 
                image={props.image}
                alt={props.alt}
                height={props.height}
                width={props.width}
            />
        </button>
    );
};
