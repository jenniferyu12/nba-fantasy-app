import React, { useState, useEffect } from 'react';
import { data, stats } from 'nba.js';

const PlayerDetails = () => {
    const [imageURL, setImageURL] = useState('');
    const [player, setPlayer] = useState(null);
    const [details, setDetails] = useState(null);

    const fetchPlayerHeadshot = () => {
        data.players( { year: '2020' } ).then(res => {
            console.log(res.league.standard);
            const playerList = res.league.standard;
            console.log(playerList);
            const id = playerList.filter(player => player.lastName === "Adebayo")[0].personId;
            console.log(id);
            setPlayer(id);
            console.log(player);
            setImageURL(`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${id}.png`);
        });
    };

    const fetchPlayerID = () => {
        /*fetch("https://balldontlie.io/api/v1/games/32881")
            .then(res => res.json())
            .then(result => {
                console.log(result);
            });*/
    }

    const fetchStats = () => {
        /*fetch("https://www.balldontlie.io/api/v1/season_averages?player_ids[]=4")
            .then(res => res.json())
            .then(result => {
                setDetails(result.data);
            });*/
        console.log(player);
        stats.playerInfo({ LeagueID: '20', PlayerID: { player.toString() } }).then(res => console.log(res));
    }



    useEffect(() => {
        fetchPlayerHeadshot();
        fetchPlayerID();
        fetchStats();
    }, []);

    return (
        <>
            <h2>Bam</h2>
            <img src={imageURL} alt="bam"/>
            <p>{JSON.stringify(details)}</p>
        </>
    );
};

export default PlayerDetails;