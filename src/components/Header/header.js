import React from 'react';
import style from './header.css';
import { Link } from 'react-router-dom';

import * as FontAwesome from 'react-icons/lib/fa';
import SideNav from './Sidenav/sidenav';

const Header = (props) => {

  const navBars = () => (
    <div className="style.bars">
      <FontAwesome.FaBars
        onClick={props.onOpenNav}
        style={{
          color: '#dfdfdf',
          padding: '10px',
          cursor: 'pointer',
        }}
      />
    </div>
  )

  const logo = () =>(
      <Link to="/" className={style.logo}>
        <img src="/images/nba_logo.png" alt="nba app logo"/>
      </Link>
  )

  return(
    <header className={style.header}>
      <SideNav {...props}/>
      <div className={style.headerOpt}>
        { navBars() }
        { logo() }
      </div>
    </header>
  )
}

export default Header;