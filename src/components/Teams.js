import React, { useState, useEffect } from 'react';
import TeamCard from './TeamCard.js';

const Teams = () => {
    const [teams, setTeams] = useState(null);

    const fetchTeams = () => {
        fetch("http://data.nba.net/prod/v1/2020/teams.json")
            .then(res => res.json())
            .then(result => {
                const unfilteredTeams = result.league.standard;
                const filteredTeams = unfilteredTeams.filter(team => team.isNBAFranchise === true);
                setTeams(filteredTeams);
            });
    }
    
    useEffect(() => {
        fetchTeams();
    }, []);

    return (
        <>
            <p style={{padding: '1%', fontSize: '3em'}}>Select a team to view their current roster</p>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", alignContent: "center", padding: '1% 5%'}}>
                {teams && teams.map(team => (
                    <TeamCard
                        key = {team.teamId}
                        id = {team.teamId}
                        name = {team.fullName}
                        urlName = {team.urlName}
                    />
                ))}
            </div>
        </>
    );
};

export default Teams;