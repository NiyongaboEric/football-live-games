import { FC, useContext } from 'react';
import { SharedImage } from '../../utils/components/SharedImage';
import { IGameStatsCard } from './types'
import { SharedButton } from '../../utils/components/SharedButton';
import { imagesIconsOptions } from '../../utils/loadImages';
import team1 from '../../public/static/1.png';
import { FootballContext } from '../../Context/FootballContext';
import { EmptyTeamsList } from '../../utils/components/EmptyTeamsList';
import { UploadTeams } from '../../utils/components/UploadMatches';
import { matchesProp } from '../../Context/types';


type teamsInfo = {
    teams: matchesProp,
}

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
    console.log(props.teams);
    console.log(props.teams);
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
                alt={`${props.teams} image`}
                width={40}
                height={40}
                team={`${props.teams.teamA}`}
            />
            <GameStatsCard
                time={"00:00"}
                goals={2}
                image={team1}
                alt={`${props.teams.teamB} image`}
                width={40}
                height={40}
                team={`${props.teams.teamB}`}
            />
        </div>
    )
}
const GameOptionsButton: FC = () => {
    return (
        <div style={{ margin: "15px 0" }}>
            {
                imagesIconsOptions.map((image, index) => (
                    <SharedButton
                        image={image.icon}
                        alt={image.name}
                        key={index}
                        width={20}
                        height={20}
                    />
                )
                )
            }
        </div>
    );
};

export const GameStatsBoard: FC = () => {
    const { matches } = useContext(FootballContext);
    
    return (
        <section style={{ background: "antiquewhite" }}>
            {
                matches.length === 0
                    ?
                        <EmptyTeamsList />
                    :
                        matches.map((item, index) => (
                            <div style={{
                                textAlign: "center",
                                borderRadius: "2px",
                                marginBottom: '3px',
                                padding: "10px 0px",
                                backgroundColor: "azure"
                            }}
                                key={index}
                            >
                                <span>Time: 00:00</span>
                                <GameStatsResult teams={item} />
                                <GameOptionsButton />
                            </div>
                        ))
            }
            <UploadTeams />
        </section>
    );
};
