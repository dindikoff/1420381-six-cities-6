import React from 'react';
import ReactDOM from 'react-dom';
import {offers} from './mocks/offers';
import {comments} from './mocks/comment';

import App from './components/app/app';

ReactDOM.render(
    <App
      offers={offers}
      comments={comments}
    />,
    document.querySelector(`#root`)
);
