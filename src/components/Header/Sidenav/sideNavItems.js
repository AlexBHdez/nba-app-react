import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as FontAwesome from 'react-icons/lib/fa';
import style from './sideNav.css';
import { firebase } from '../../../firebase';

const SideNavItems = (props) => {

  const items = [
    {
      type: style.option,
      icon: <FontAwesome.FaHome/>,
      text: 'Home',
      link: '/',
      login: '',
    },
    {
      type: style.option,
      icon: <FontAwesome.FaFileTextO/>,
      text: 'News',
      link: '/news',
      login: '',
    },
    {
      type: style.option,
      icon: < FontAwesome.FaPlay /> ,
      text: 'Videos',
      link: '/videos',
      login: '',
    },
    {
      type: style.option,
      icon: <FontAwesome.FaDashboard />,
      text: 'dashboard',
      link: '/dashboard',
      login: false,
    },
    {
      type: style.option,
      icon: <FontAwesome.FaSignIn/>,
      text: 'sign-in',
      link: '/sign-in',
      login: true,
    },
    {
      type: style.option,
      icon: <FontAwesome.FaSignOut/>,
      text: 'sign-out',
      link: '/sign-out',
      login: false,
    },
  ]

  const element = (item, i) => (
    <div key={i} className={item.type}>
      <Link to={item.link}>
        {item.icon}
        {item.text}
      </Link>
    </div>
  )

  const restricted = (item, i) => {
    let template = null;

    if (props.user === null && item.login) {
      template = element(item, i);
    }

    if (props.user !== null && !item.login) {
      if (item.link === '/sign-out') {
        template = (
          <div 
            key={i} 
            className={item.type}
            onClick= {() => {
              firebase.auth().signOut()
                .then(()=> {
                  props.history.push('/');
                })
            }}
          >
              {item.icon}
              {item.text}
          </div>
        )
      } else {
        template = element(item, i);
      }
    }

    return template;
  }

  const showItems = () => {
    return items.map((item, i) => {
      return item.login !== '' ?
        restricted(item, i)
      : 
        element(item, i);
    })
  }

  return(
    <div>
      {showItems()}
    </div>
  )
}

export default withRouter(SideNavItems);