import { IClockTimerProp, matchesProp } from '../../Context/types';
import { IimageProps } from '../../utils/types';

export type IGameStatsCard = {
    time: string;
    goals: number;
    team: string;
} & IimageProps;

export type teamsInfo = {
    matches: matchesProp,
}

export type matchesInfo = {
    matches: matchesProp[] | [],
    addStartMatchClockTimer: (matchID: string) => void;
    handleUpdateTime: (timeProp: IClockTimerProp, matchID: string) => void;
} 

export type gameOptionType = {
    currentMatch: matchesProp,
    addStartMatchClockTimer: (matchID: string) => void;
    handleUpdateTime: (timeProp: IClockTimerProp, matchID: string) => void;
}
