export type matchesProp = {
    id: string,
    gameType: string,
    currentTime: string,
    goals: number,
    teamA: string,
    lineupsTeamA: string,
    substituteTeamA: string,
    teamB: string,
    lineupsTeamB: string,
    substituteTeamB: string,
    isGameStarted: boolean,
}

export type FootballProps = {
    children: React.ReactNode;
  };

export type IClockTimerProp = {
    countSeconds: number;
    countMinutes: number;
    countHours: number;
}

export interface IFootballContextType {
    matches: matchesProp[] | [],
    addNewMatches: (teams: 
        matchesProp[] | unknown | [] | 
        Promise<matchesProp[] | [] | unknown>
    ) => void,
    addStartMatchClockTimer: (matchID: string) => void,
    handleUpdateTime: (timeProp: IClockTimerProp, matchID: string) => void,
    addPauseMatchClockTimer: () => {},
    addStopMatchClockTimer: () => {},
};
