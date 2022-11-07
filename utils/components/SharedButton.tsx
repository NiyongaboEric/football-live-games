import { FC } from 'react';

import { IButtonOption } from '../types';
import { SharedImage } from './SharedImage';

export const SharedButton: FC<IButtonOption> = (props: IButtonOption) => {
    return (
    <button style={{
            cursor: "pointer",
            margin: "0 10px",
        }}
        onClick={props.handleClick}
    >
        <SharedImage 
            image={props.image}
            alt={props.alt}
            height={props.height}
            width={props.width}
        />
    </button>
    );
};
