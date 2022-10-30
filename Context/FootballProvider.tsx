import { FC, useState } from "react";
import { FootballContext, footballContextDefaultValues } from './FootballContext';
import { IFootballContextType } from './types';

type FootballProps = {
  children: React.ReactNode;
};

export const FootballProvider = (props: FootballProps) => {

  const [currentTime, setCurrentTime] = useState<number>(footballContextDefaultValues.currentTime);


  const value: IFootballContextType = {
    currentTime,
  };

  return(
    <FootballContext.Provider value={value}>
      {props.children}
    </FootballContext.Provider>
  );
}
