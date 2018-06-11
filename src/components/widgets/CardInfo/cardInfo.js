import React from 'react';
import * as FontAwesome from 'react-icons/lib/fa';
import moment from 'moment';

import styles from './cardInfo.css';

const CardInfo = (props) => {

  const teamName = (teams, team) => {
    let data = teams.find((item) => {
      return item.teamId === team
    });
    if (data) {
      return data.name;
    }
  }

  const formatDate = (date) => {
    return moment(date).format('DD-MM-YY');
  }

  return(
    <div className={styles.card_info}>
      <span className={styles.team_name}>
        {teamName(props.teams, props.team)}
      </span>
      <span className={styles.date}>
        <FontAwesome.FaClockO />
        {formatDate(props.date)}
      </span>
    </div>
  )
}

export default CardInfo;