import React, { useState, useEffect } from 'react';
import Roster from './Roster.js';

const TeamCard = ({ id, name, urlName }) => {
    const [expand, setExpand] = useState(false);

    const expandRoster = () => {
        if(expand === false) {
            setExpand(true);
        } else {
            setExpand(false);
        }
    }

    return (
        <div>
            { expand
                ? <Roster
                        id={id}
                        name={name}
                        urlName={urlName}
                        expandRoster={expandRoster}
                />
                : <div onClick={expandRoster} style={{ display:"grid", textAlign: "center", margin: "20px"}}>
                    <h2>{name}</h2>
                    <img src={`https://cdn.nba.com/logos/nba/${id}/global/L/logo.svg`} alt='logo' width='115px' style={{display: "block", margin: "auto"}}/>
                </div>
            }
        </div>
    );
};

export default TeamCard;