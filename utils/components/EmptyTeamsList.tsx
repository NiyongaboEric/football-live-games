import Image from 'next/image';

import emptySVG from '../../public/static/empty-svg.svg';

export const EmptyTeamsList = () => {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
        }}>
            <Image src={emptySVG}         
                alt="Empty teams"
                height="15"
                width="15"
            />
            <p>No matches available</p>
            <div style={{ display: "none" }}>Icons made by
                <a href="https://www.freepik.com" title="Freepik">Freepik</a>
                    from
                <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
            </div>
        </div>
    );
};
