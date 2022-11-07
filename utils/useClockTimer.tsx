import { useEffect, useState } from 'react';
import { IClockTimerProp, matchesProp } from '../Context/types';

export const useClockTimer = (maxRange: number, currentMatch: matchesProp): IClockTimerProp => {
    const [countSeconds, setCountSeconds] = useState<number>(0);
    const [countMinutes, setCountMinutes] = useState<number>(0);
    const [countHours, setCountHours] = useState<number>(0);

    useEffect(
        () => {
            if (!currentMatch.isGameStarted) return

            const timer = () => {
                setCountSeconds(countSeconds + 1);
            }

            // 60 seconds is equal to 1 minute
            if (countSeconds === maxRange) {
                setCountMinutes((prev: number): number => (prev + 1))
                setCountSeconds(0);
            }

            // 60 minutes is equal to 1 hour
            if (countMinutes === maxRange ) {
                setCountHours((prev: number): number => (prev + 1))
                setCountMinutes(0);
            }

            const id = setInterval(timer, 1000);
            return () => clearInterval(id);
        },
        [countHours, countMinutes, countSeconds, currentMatch, maxRange]
    );

    return {
        countHours,
        countMinutes,
        countSeconds,
    }
};
