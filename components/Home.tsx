import { FC } from 'react';
import MatchesBoard from './MatchesBoard/index';
import ScoresBoard from './ScoresBoard/index';

const Home: FC = () => {
    return (
        <section
            style={{
                display: "grid",
                gridTemplateColumns: "auto auto",
            }}
        >
            <MatchesBoard />
            <ScoresBoard />
        </section>
    )
}

export default Home;
