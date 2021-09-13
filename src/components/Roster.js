import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import PlayerCard from './PlayerCard.js';

const Roster = ({ id, name, urlName, expandRoster }) => {
    const [roster, setRoster] = useState(null);
    const [player, setPlayer] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const fetchRoster = () => {
        //fetch(`http://data.nba.net/prod/v1/2020/teams/${id}/roster.json`)
        fetch(`https://data.nba.net/v2015/json/mobile_teams/nba/2020/teams/${urlName}_roster.json`)
            .then(res => res.json())
            .then(result => {
                //const playerIDs = result.league.standard.players;
                //setRoster(playerIDs.map(player => player.personId));
                setRoster(result.t.pl);
            });
    }

    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }
    
   useEffect(() => {
        fetchRoster();
    }, []);

    return (
        <div style={{minHeight: '100vh', width: '100vw', backgroundColor: '#BACDB0', margin: '20px'}}>
            <div onClick={expandRoster} style={{ padding: '30px' }}>
                <h2>{name} Roster</h2>
                <img src={`https://cdn.nba.com/logos/nba/${id}/global/L/logo.svg`} alt='logo' width='250px' style={{display: "block", margin: "auto"}}/>
                <p>Select a player to view their 2020-21 season statistics</p>
            </div>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", alignContent: "center"}}>
            {roster && 
                roster.map(player => (
                    <div>
                        <img src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.pid}.png`} 
                        alt={player} 
                        onClick={() => {
                            openModal();
                            setPlayer(player);
                        }}
                        style={{margin: '10px'}}/>
                        <p>{player.fn} {player.ln} #{player.num}</p>
                    </div>
                ))
            }
            </div>
            <ReactModal 
                    contentLabel={ `${player.ln} statistics`}
                    isOpen={modalIsOpen} 
                    onRequestClose={closeModal}
                    style={{
                        content: {
                          position: 'absolute',
                          top: '3em',
                          left: '3em',
                          right: '3em',
                          bottom: '3em',
                          border: 'none',
                          background: '#475B63',
                          overflow: 'auto',
                          WebkitOverflowScrolling: 'touch',
                          borderRadius: '10px',
                          outline: 'none',
                          padding: '2em'
                        }
                      }}
                >
                <button onClick={closeModal} 
                    style={{backgroundColor: '#F3E8EE',
                            border: 'none',
                            outline: 'none',
                            borderRadius: '1px'
                }}>X</button>
                <PlayerCard player={player}/>
            </ReactModal>
        </div>
    );
};

export default Roster;