import { FC } from 'react';
import { GameStatsBoard } from './GameStats';

const MatchesBoard: FC = () => {
    return (
        <section>
            <h1>Matches</h1>
            <GameStatsBoard />
        </section>
    );
};

export default MatchesBoard;
