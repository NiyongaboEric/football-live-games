import pauseSVG from '../public/static/pause-svg.svg';
import playSVG from  '../public/static/play-svg.svg';
import stopSVG from '../public/static/stop-svg.svg';
import editSVG from '../public/static/edit-svg.svg';
import { IimageIconsOptions } from './types';

export const imagesIconsOptions: Array<IimageIconsOptions> = [
    {
        name: 'Play',
        icon: playSVG,
    },
    {
        name: 'Pause',
        icon: pauseSVG,
    },
    {
        name: 'Stop',
        icon: stopSVG,
    },
    {
        name: 'Edit',
        icon: editSVG,
    },
];
