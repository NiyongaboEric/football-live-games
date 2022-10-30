import { IimageProps } from '../../utils/types';

export type IGameStatsCard = {
    time: string;
    goals: number;
    team: string;
} & IimageProps;
