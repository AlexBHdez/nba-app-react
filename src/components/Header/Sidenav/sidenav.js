import React from 'react';
import SimpleSideNav from 'react-simple-sidenav';

import SideNavItems from './sideNavItems';

const Sidenav = (props) => {
  return (
    <div>
      <SimpleSideNav
        showNav={props.showNav}
        onHideNav={props.onHideNav}
        navStyle={{
          backgroundColor: '#242424',
          maxWidth: '220px',
        }}
      >
        <SideNavItems {...props}/>
      </SimpleSideNav>
    </div>
  )
}

export default Sidenav;