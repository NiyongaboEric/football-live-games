import { createContext } from "react";
import { IFootballContextType } from './types';

export const footballContextDefaultValues: IFootballContextType = {
  matches: [],
  addNewMatches: () => {},
  addStartMatchClockTimer: () => {},
  handleUpdateTime: () => {},
  addPauseMatchClockTimer: () => true,
  addStopMatchClockTimer: () => true,
};

export const FootballContext = createContext<IFootballContextType>(
  footballContextDefaultValues
);
