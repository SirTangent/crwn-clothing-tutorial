import React from "react";
import {Link} from "react-router-dom";

import {auth} from '../../firebase/firebase.utils';

import { ReactComponent as Crown } from '../../assets/crown.svg'

import './header.scss'

const Header = ({currentUser}) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Crown className='logo'/>
        </Link>
        <div className="options">
            <Link className='option navlink' to='/shop'>
                SHOP
            </Link>
            <Link className='option navlink' to='/contact'>
                CONTACT
            </Link>
            {
                currentUser ?
                    <div className='option navlink' onClick={() => auth.signOut()}>
                        &#9660; SIGN OUT
                    </div>
                    :
                    <Link className='navlink' to='/signin'>
                        &#9660; SIGN IN
                    </Link>
            }
        </div>
    </div>
);

export default Header;