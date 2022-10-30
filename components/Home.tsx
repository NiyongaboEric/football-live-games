import React from 'react';
const Home: React.FC = () => {
    return (
        <section
            style={{
                display: "grid",
                gridTemplateColumns: "auto auto",
            }}
        >
            <h1>Matches</h1>
            <h1>Scores Board</h1>
        </section>
    )
}

export default Home;