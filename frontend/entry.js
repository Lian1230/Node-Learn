import 'bootstrap-webpack';
import React from 'react';
import ReactDom from 'react-dom';
import App from './app';

import { getTopicList } from './lib/client';

getTopicList()
    .then(ret => console.log(ret))
    .catch(err => console.error(err));


ReactDom.render(<App />, document.body);