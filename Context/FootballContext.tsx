import { createContext, useContext } from "react";
import { IFootballContextType } from './types';

export const footballContextDefaultValues: IFootballContextType = {
  currentTime: 0,
};

export const FootballContext = createContext<IFootballContextType>(
  footballContextDefaultValues
);
