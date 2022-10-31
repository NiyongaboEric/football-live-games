export type matchesProp = {
    gameType: string,
    currentTime: string,
    goals: number,
    teamA: string,
    lineupsTeamA: string,
    substituteTeamA: string,
    teamB: string,
    lineupsTeamB: string,
    substituteTeamB: string,
}

export interface IFootballContextType {
    matches: matchesProp[] | [],
    addNewMatches: (teams: 
        matchesProp[] | unknown | [] | 
        Promise<matchesProp[] | [] | unknown>
    ) => void,
};
