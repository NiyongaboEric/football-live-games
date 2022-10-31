import { FC, useState } from "react";
import { FootballContext } from './FootballContext';
import { IFootballContextType, matchesProp } from './types';

type FootballProps = {
  children: React.ReactNode;
};

export const FootballProvider = (props: FootballProps) => {
  const [matches, setMatches] = useState<matchesProp[]>([]);
  const addNewMatches = (teams: any) => {
    console.log(teams, typeof teams);

    return setMatches((prevTeams: matchesProp[]) => {
      return [...prevTeams, ...teams]
    });
  }

  const value: IFootballContextType = {
    matches,
    addNewMatches,
  };

  return(
    <FootballContext.Provider value={value}>
      {props.children}
    </FootballContext.Provider>
  );
}
