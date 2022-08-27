import React from 'react';
import './Player.css'

const Player = () => {
    return (
        <div className='container-player'>
            <div className='header-player'>
                <img src="https://i.pinimg.com/originals/f2/22/2c/f2222ccb7e81f8c47028fa1e0074a94c.jpg" alt="Neymar Jr" />
            </div>
            <div className='footer-player'>
                <h4>Neymar Jr</h4>
                <h5>Paris Saint-Germain</h5>
            </div>
        </div>
      );
}
 
export default Player;