import React from 'react';
import { Switch } from 'react-router-dom';

import Layout from './hoc/Layout/layout';
import Home from './components/Home/home';
import NewsArticle from './components/Articles/News/Post/index';
import VideoArticle from './components/Articles/Videos/Video/index';
import News from './components/News/news';
import Videos from './components/Videos/videos';
import Signin from './components/Signin/signin';
import Dashboard from './components/Dashboard/dashboard';

import PrivateRoutes from './components/AuthRoutes/privateRoutes';
import PublicRoutes from './components/AuthRoutes/publicRoutes';

const Routes = (props) => {

  return (
    <Layout user={props.user}>
      <Switch>
        <PublicRoutes {...props} restricted={false} path="/videos/:id" exact component={VideoArticle} />
        <PublicRoutes {...props} restricted={false} path="/articles/:id" exact component={NewsArticle} />
        <PublicRoutes {...props} restricted={false} path="/news" exact component={News} />
        <PublicRoutes {...props} restricted={false} path="/videos" exact component={Videos} />
        <PrivateRoutes {...props} path="/dashboard" exact component={Dashboard} />
        <PublicRoutes {...props} restricted={true} path="/sign-in" exact component={Signin} />
        <PublicRoutes {...props} restricted={false} path="/" exact component={Home} />
      </Switch>
    </Layout>
  )
}

export default Routes;
