import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import './Footer.css'

const Footer = () => {
    return ( 
        <footer>
            <section className='container-footer'>
                <img src="images/my-team.png" alt="Logo my team"/>
                <p>Dev Caroline Almeida</p>
                <div>
                    <a href="https://github.com/devcarolinealmeida/my-team-react"><AiFillGithub className='footer-icons' size={25} /></a> 
                    <a href="http://www.linkedin.com/in/devcaroline"><AiFillLinkedin className='footer-icons' size={25}/></a>
                    
                </div>
            </section>
        </footer>
     );
}
 
export default Footer;