import React from 'react';
import './Player.css'

const Player = ( { name, team, image } ) => {
    return (
        <div className='container-player'>
            <div className='header-player'>
                <img src={image} alt={name} />
            </div>
            <div className='footer-player'>
                <h4>{name}</h4>
                <h5>{team}</h5>
            </div>
        </div>
      );
}
 
export default Player;