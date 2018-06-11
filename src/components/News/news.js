import React from 'react';

import NewsSlider from '../widgets/NewsSlider/slider';
import NewsList from '../widgets/NewsList/newsList';

const News = () => (
  <div>
    <NewsSlider
      type="featured"
      start={0}
      amount={5}
      settings={{
        dots: false,
      }}
    />
    <NewsList
      type="cardImage"
      loadmore="true"
      start={0}
      amount={10}
    />
  </div>
)

export default News;