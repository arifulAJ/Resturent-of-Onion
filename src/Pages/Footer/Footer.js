import React from 'react';
import logo from '../../image-folder/logo2.png'

const Footer = () => {
    return (
        <div  className='bg-info '>
            <img style={{width:"200px"}} src={logo} alt="" /> <span className="text-white text-center"> <>hot onion</> </span>
            <div className="text-white bg-red text-center">
            <h5>copyright <i class="far fa-copyright"></i> 2021 Hot Onion Restaurant &    multinational company</h5>
            </div>
           
        </div>
    );
};

export default Footer;