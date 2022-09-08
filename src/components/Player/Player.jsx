import React from 'react';
import './Player.css';
import { AiFillCloseCircle } from 'react-icons/ai';

const Player = ( { name, team, image, colorBackground, toDelete } ) => {
    return (
        <div className='container-player'>
            <AiFillCloseCircle 
                size={25} 
                className='btn-delete' 
                onClick={() => toDelete(name)}
            />
            <div className='header-player' 
                style={{backgroundColor: colorBackground}}>
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