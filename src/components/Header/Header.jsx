import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../Firebase/Firebase.Utils';
import CartIcon from '../Cart-Icon/Cart-Icon';
import Cart from '../Cart-Dropdown/Cart';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';


import './Header.scss';

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <Link className='option' to='/'>
            <h1 style={{color: 'navy'}}>CANDRA LTD.</h1>
        </Link>

        <div className='options'>
            <Link className='option' to='/shop'>
                shop
            </Link>
            <Link className='option' to='/contact'>
                contact
            </Link>
            <Link className='option' to='/resource'>
                links
            </Link>
            {
                currentUser ? 
                <div className='option' onClick={ () => auth.signOut()}>sign out</div>
                :
                <Link className='option' to='/login'>login</Link>            
            }
            <CartIcon />
        </div>
        {
            hidden ? null :
            <Cart />
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);