import 'bootstrap-webpack';
import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import App from './app';
import TopicDetail from './component/TopicDetail';
import Login from './component/Login';
import NewTopic from './component/NewTopic';
import EditTopic from './component/EditTopic';


// import { getTopicList } from './lib/client';

// getTopicList()
//     .then(ret => console.log(ret))
//     .catch(err => console.error(err));

const e = document.createElement('div');
e.id = 'app';
document.body.appendChild(e);


ReactDom.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/topic/:id" component={TopicDetail} />
      <Route path="login" component={Login} />
      <Route path="new" component={NewTopic} />
      <Route path="edit/:id" component={EditTopic} />
    </Route>
  </Router>
), e);