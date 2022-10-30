import { FC } from 'react';
import { SharedImage } from '../../utils/SharedImage';
import team1 from '../../public/static/1.png';
import { IGameStatsCard } from './types'
import { SharedButton } from '../../utils/SharedButton';
import { imagesIconsOptions } from '../../utils/loadImages';


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

const GameStatsResult: FC = () => {
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
                alt="Team A"
                width={40}
                height={40}
                team="team A"
            />
            <GameStatsCard
                time={"00:00"}
                goals={2}
                image={team1}
                alt="Team A"
                width={40}
                height={40}
                team="team b"
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
    return (
        <section>
            <div style={{
                width: "80%",
                textAlign: "center",
                background: "antiquewhite",
                borderRadius: "2px",
                marginBottom: '3px',
                padding: "10px 0px",
            }}
            >
                <span>Time: 00:00</span>
                <GameStatsResult />
                <GameOptionsButton />
            </div>
        </section>
    );
};
