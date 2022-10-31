import { createContext, useContext } from "react";
import { IFootballContextType } from './types';

export const footballContextDefaultValues: IFootballContextType = {
  matches: [],
  addNewMatches: () => {},
};

export const FootballContext = createContext<IFootballContextType>(
  footballContextDefaultValues
);
