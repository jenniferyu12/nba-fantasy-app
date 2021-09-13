import React, { useState, useEffect } from 'react';

const PlayerCard = ({ player, close }) => {
    const [lastSeasonStats, setLastSeasonStats] = useState(null);
    const [name, setName] = useState('');

    const fetchStats = () => {
        fetch(`https://data.nba.net/prod/v1/2020/players/${player.pid}_profile.json`)
            .then(res => res.json())
            .then(result => {
                setLastSeasonStats(result.league.standard.stats.regularSeason.season[0].total);
                console.log(result.league.standard.stats.regularSeason.season[0].total.apg);
            });
    }

    useEffect(() => {
        fetchStats();
    }, []); 

    return (
        <div style={{textAlign: 'center'}}>
            <h2 style={{color: 'white'}}>{player.fn} {player.ln} #{player.num}</h2>
            <p style={{color: 'white'}}>2020-2021 Season Statistics</p>
            <img src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.pid}.png`} 
                        alt={player.ln} 
                        style={{margin: '10px'}}/>
            {lastSeasonStats
            ? <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', textAlign:'left'}}>
                <div style={{backgroundColor: '#F3E8EE', padding: '0 1em', margin: '2em'}}>
                    <h3>Per-Game Averages</h3>
                    <p>Minutes: {lastSeasonStats.mpg}</p>
                    <p>Points: {lastSeasonStats.ppg}</p>
                    <p>Assists: {lastSeasonStats.apg}</p>
                    <p>Rebounds: {lastSeasonStats.rpg}</p>
                    <p>Turnovers: {lastSeasonStats.topg}</p>
                    <p>Steals: {lastSeasonStats.spg}</p>
                    <p>Blocks: {lastSeasonStats.bpg}</p>
                </div>
                <div style={{backgroundColor: '#F3E8EE', padding: '0 1em', margin: '2em'}}>
                    <h3>Shooting Percentages</h3>
                    <p>3 Point %: {lastSeasonStats.tpp}%</p>
                    <p>Free Throw %: {lastSeasonStats.ftp}%</p>
                    <p>Field Goal %: {lastSeasonStats.fgp}%</p>
                </div>
                <div style={{backgroundColor: '#F3E8EE', padding: '0 1em', margin: '2em'}}>
                    <h3>Season Totals</h3>
                    <p>Games Played: {lastSeasonStats.gamesPlayed}</p>
                    <p>Points: {lastSeasonStats.points}</p>
                    <p>Assists: {lastSeasonStats.assists}</p>
                    <p>Rebounds: {lastSeasonStats.totReb}</p>
                    <p>Turnovers: {lastSeasonStats.turnovers}</p>
                    <p>Steals: {lastSeasonStats.steals}</p>
                    <p>Blocks: {lastSeasonStats.blocks}</p>
                </div>
                <div style={{backgroundColor: '#F3E8EE', padding: '0 1em', margin: '2em'}}>
                    <h3>Season Shot Totals</h3>
                    <p>Field Goals Made: {lastSeasonStats.fgm}</p>
                    <p>Field Goals Attempted: {lastSeasonStats.fga}</p>
                    <p>Three Pointers Made: {lastSeasonStats.tpm}</p>
                    <p>Three Pointers Attempted: {lastSeasonStats.tpa}</p>
                    <p>Free Throws Made: {lastSeasonStats.ftm}</p>
                    <p>Free Throws Attempted: {lastSeasonStats.fta}</p>
                </div>
            </div>
            : <p style={{color: '#F3E8EE'}}>Loading...</p>}
        </div>
    );
};

export default PlayerCard;

