import React from 'react';
import Player from '../Player/Player';
import './MyTeam.css'

const MyTeam = (props) => {
    return ( 
        <section className='container_my-team-position' style={{ backgroundColor: props.secondColor }}>
            <h3 style={{borderBottomColor: props.firstColor}} >{props.positionName}</h3>
            <Player />
        </section>
     );
}
 
export default MyTeam;