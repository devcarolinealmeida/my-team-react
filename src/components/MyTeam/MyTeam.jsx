import React from 'react';
import Player from '../Player/Player';

import './MyTeam.css'

const MyTeam = (props) => {
    return ( 
        (props.players.length > 0) ? <section className='container_my-team-position' style={{ backgroundColor: props.secondColor }}>
            <h3 style={{borderBottomColor: props.firstColor}} >{props.positionName}</h3>
            <div className='my-team-position-card'>
                {props.players.map( player => {
                    return <Player colorBackground={props.firstColor} key={player.name} name={player.name} team={player.team} image={player.image} toDelete={props.toDelete}/>
                })}
            </div>
        </section>
        : ''
     );
}
 
export default MyTeam;