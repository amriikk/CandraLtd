import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../Firebase/Firebase.Utils';

import './Header.scss';

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <Link className='option' to='/'>
            <h1 style={{color: 'slategray'}}>SURYA + CANDRA</h1>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            {
                currentUser ? 
                <div className='option' onClick={ () => auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/login'>LOGIN</Link>            
            }
        </div>
    </div>
)

export default Header;