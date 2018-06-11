import React, { Component } from 'react';
// import axios from 'axios';
// import { API_URL } from '../../../config';
import { firebase, firebaseArticles, firebaseLooper } from '../../../firebase';

import SliderTemplates from './slider_templates';

class NewsSlider extends Component {

  state = {
    news: [],
  }

  // Before render
  componentWillMount() {
    // axios.get(`${API_URL}/articles?_start=${this.props.start}&_end=${this.props.amount}`)
    //   .then(response => {
    //     this.setState({
    //       news: response.data,
    //     })
    //   })
    firebaseArticles.limitToFirst(3).once('value')
      .then((snapshot) => {
        const news = firebaseLooper(snapshot);

        // De esta manera, estamos re-renderizando la app por cada iteración, por lo tanto no es muy buena práctica.
        // news.forEach((item, i) => {
        //   firebase.storage().ref('images').child(item.image).getDownloadURL()
        //   .then(imageURL => {
        //     news[i].image = imageURL;
        //     this.setState({
        //       news,
        //     })
        //   })
        // });

        const asyncFunction = (item, i, cb) => {
          firebase.storage().ref('images').child(item.image).getDownloadURL()
          .then(imageURL => {
            news[i].image = imageURL;
            cb();
          })
        }
        
        // Después del map, requests = [promise1, promise2, promise3]
        let requests = news.map((item, i) => {
          return new Promise((resolve) => {
            asyncFunction(item, i, resolve)
          })
        })

        // Al ejecutar el promise, esperará hasta que el map haya acabado.
        Promise.all(requests).then(() => {
          this.setState({
            news,
          })
        })

      })
  }

  render() {
    return(
      <SliderTemplates data={this.state.news} type={this.props.type} settings={this.props.settings}/>
    )
  }
}

export default NewsSlider;