import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import { FootballContext } from './FootballContext';
import { FootballProps, IClockTimerProp, IFootballContextType, matchesProp } from './types';


export const FootballProvider = (props: FootballProps) => {
  const [matches, setMatches] = useState<matchesProp[]>([]);
  
  const addNewMatches = (teams: any) => {
    return setMatches((prevTeams: matchesProp[]) =>  {
      const teamsWithIDs = teams.length > 0 ? teams.map((team: matchesProp) => {
        const id = uuidv4();
        team.id = id;
        team.currentTime = `00 : 00 : 00`;
        team.isGameStarted = false;
        return team;
      }) : teams;
      return [...prevTeams, ...teamsWithIDs]
    });
  };

  const addStartMatchClockTimer = (id: string) => {
    const startTimer = matches.map((item: matchesProp) => {      
      if (item.id === id) {
        return {
          ...item,
          isGameStarted: true,
        };
      }
      return item;
    });
    return setMatches(startTimer);
  };

  const handleUpdateTime = (timeProp: IClockTimerProp, matchID: string) => {
    // return setMatches((prev: matchesProp[]) => {
    //   return prev.map((teams) => {
    //     if (teams.id === matchID) {
    //       return {
    //         ...teams,
    //         currentTime: `${timeProp.countHours}: ${timeProp.countMinutes}: ${timeProp.countSeconds}`,
    //       }
    //     }
    //     return teams;
    //   })
    //   // console.log(prev, timeProp);
    //   // return prev;
    // })
    console.log(
      'context: ', timeProp
    );
    
    const startTimer = matches.map((item: matchesProp) => {
      if (item.id === matchID) {
        return {
          ...item,
          currentTime: `${timeProp.countHours}: ${timeProp.countMinutes}: ${timeProp.countSeconds}`,
        };
      }
      return item;
    });
    setMatches(startTimer);
  };

  const addPauseMatchClockTimer = () => true;
  const addStopMatchClockTimer = () => true;

  const value: IFootballContextType = {
    matches,
    addNewMatches,
    addStartMatchClockTimer,
    handleUpdateTime,
    addPauseMatchClockTimer,
    addStopMatchClockTimer,
  };

  return(
    <FootballContext.Provider value={value}>
      {props.children}
    </FootballContext.Provider>
  );
}
