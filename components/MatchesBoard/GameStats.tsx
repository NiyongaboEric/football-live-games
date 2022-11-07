import { FC, useCallback, useContext, useEffect, useMemo, useState } from 'react';

import { SharedImage } from '../../utils/components/SharedImage';
import { IGameStatsCard, teamsInfo, matchesInfo, gameOptionType } from './types'
import { SharedButton } from '../../utils/components/SharedButton';
import { imagesIconsOptions } from '../../utils/loadImages';
import team1 from '../../public/static/1.png';
import { FootballContext } from '../../Context/FootballContext';
import { EmptyTeamsList } from '../../utils/components/EmptyTeamsList';
import { UploadTeams } from '../../utils/components/UploadMatches';
import { matchesProp } from '../../Context/types';
import { useClockTimer } from '../../utils/useClockTimer';

const GameStatsCard: FC<IGameStatsCard> = (props: IGameStatsCard) => {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <SharedImage
                image={props.image}
                alt={props.alt}
                width={props.width}
                height={props.height}
            />
            <span>{props.team}</span>
            <span style={{ marginLeft: '1.5rem', fontWeight: 'bold' }}>{props.goals}</span>
        </div>
    );
};

const GameStatsResult: FC<teamsInfo> = (props: teamsInfo) => {
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
            }}>
            <GameStatsCard
                time={"00:00"}
                goals={2}
                image={team1}
                alt={`${props.matches} image`}
                width={40}
                height={40}
                team={`${props.matches.teamA}`}
            />
            <GameStatsCard
                time={"00:00"}
                goals={2}
                image={team1}
                alt={`${props.matches.teamB} image`}
                width={40}
                height={40}
                team={`${props.matches.teamB}`}
            />
        </div>
    )
}

const GameOptionsButton: FC<gameOptionType> = ({ currentMatch, addStartMatchClockTimer, handleUpdateTime }) => {
    // const { handleUpdateTime } = useContext(FootballContext);
    // const { countHours, countMinutes, countSeconds } = useClockTimer(60, currentMatch);
    // useClockTimer(60, currentMatch, handleUpdateTime);
    // useEffect(() => {
    //     //
    //     // 
    //     handleUpdateTime({ countHours, countMinutes, countSeconds }, currentMatch.id )
    // }, [countHours, countMinutes, countSeconds, currentMatch.id, handleUpdateTime]);
    // // [countHours, countMinutes, countSeconds, currentMatch.id, handleUpdateTime]

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
            if (countSeconds === 60) {
                setCountMinutes((prev: number): number => (prev + 1))
                setCountSeconds(0);
            }

            // 60 minutes is equal to 1 hour
            if (countMinutes === 60 ) {
                setCountHours((prev: number): number => (prev + 1))
                setCountMinutes(0);
            }
            
            const id = setInterval(timer, 1000);
            return () => clearInterval(id);
        }, [countHours, countMinutes, countSeconds, currentMatch, handleUpdateTime]
        );
        
        useCallback(() => handleUpdateTime({
            countHours, countMinutes, countSeconds 
        },
        currentMatch.id
        ), [countHours, countMinutes, countSeconds, currentMatch.id, handleUpdateTime]);



    
    return (
        <div style={{ margin: "15px 0" }}>
            <SharedButton
                image={imagesIconsOptions[0].icon}
                alt={imagesIconsOptions[0].name}
                width={20}
                height={20}
                handleClick={() => addStartMatchClockTimer(currentMatch.id )}
            />
            <SharedButton
                image={imagesIconsOptions[1].icon}
                alt={imagesIconsOptions[1].name}
                width={20}
                height={20}
                handleClick={() => true}
            />
            <SharedButton
                image={imagesIconsOptions[2].icon}
                alt={imagesIconsOptions[2].name}
                width={20}
                height={20}
                handleClick={() => true}
            />
            <SharedButton
                image={imagesIconsOptions[3].icon}
                alt={imagesIconsOptions[3].name}
                width={20}
                height={20}
                handleClick={() => true}
            />
        </div>
    );
};

const GameStatsBoardMain: FC<matchesInfo> = (props: matchesInfo) => {
    return (
        <>
            {
                props.matches.map((match: matchesProp, index: number) => (
                    <div style={{
                        textAlign: "center",
                        borderRadius: "2px",
                        marginBottom: '3px',
                        padding: "10px 0px",
                        backgroundColor: "azure"
                    }}
                        key={index}
                    >
                        <span>Time: {match.currentTime}</span>
                        <GameStatsResult matches={match} />
                        <GameOptionsButton 
                            currentMatch={match} 
                            addStartMatchClockTimer={props.addStartMatchClockTimer}
                            handleUpdateTime={props.handleUpdateTime}
                        />
                    </div>
                ))
            }
        </>
    );
};

export const GameStatsBoard: FC = () => {
    const { matches, addStartMatchClockTimer, handleUpdateTime } = useContext(FootballContext);
    // console.log(matches);

    return (
        <section style={{ background: "antiquewhite" }}>
            {
                matches.length === 0
                    ?
                        <EmptyTeamsList />
                    :
                        <GameStatsBoardMain 
                            matches={matches}
                            addStartMatchClockTimer={addStartMatchClockTimer}
                            handleUpdateTime={handleUpdateTime}
                        />
            }
            <UploadTeams />
        </section>
    );
};
