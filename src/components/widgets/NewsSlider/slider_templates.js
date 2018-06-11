import React from 'react';
import { Link } from 'react-router-dom';

// Slider -> también necesita los cdn css en el index
import Slick from 'react-slick';
import styles from './slider.css';

const SliderTemplates = (props) => {

  let template = null;

  const settings = {
    dots: true,
    infinit: true,
    arrows: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // Este linea va a traer el objeto settings que viene de las props y sustituirá si hay algo nuevo a las propiedades anteriores.
    ...props.settings,
  }

  switch(props.type) {
    case ('featured'):
      template = props.data.map((item, i) => {
        return(
          <div key={i}>
            <div className={styles.featured_item}>
              <div className={styles.featured_image}
                style={{
                  backgroundImage: `url(${item.image})`
                }}
              ></div>
              <Link to={`/articles/${item.id}`}>
                <div className={styles.featured_caption}>
                  {item.title}
                </div>
              </Link>
            </div>
          </div>
        )
      })
      break;
    default:
      template = null;
  }

  return(
    <div>
      <Slick {...settings} >
        {template}
      </Slick>
    </div>
  )
}

export default SliderTemplates;