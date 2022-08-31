import React from 'react';
import './Player.css'

const Player = ( { name, team, image, colorBackground } ) => {
    return (
        <div className='container-player'>
            <div className='header-player' style={{backgroundColor: colorBackground}}>
                <img src={image} alt={name} />
            </div>
            <div className='footer-player'>
                <h4 style={{color: colorBackground}}>{name}</h4>
                <h5>{team}</h5>
            </div>
        </div>
      );
}
 
export default Player;