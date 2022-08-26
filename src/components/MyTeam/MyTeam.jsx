import React from 'react';
import './MyTeam.css'

const MyTeam = (props) => {
    return ( 
        <section className='container_my-team-position'>
            <h3>{props.positionNome}</h3>
        </section>
     );
}
 
export default MyTeam;