import React from 'react';
import ReactDOM from 'react-dom';
import {cards} from './mocks/offers';
import {comments} from './mocks/comment';

import App from './components/app/app';

ReactDOM.render(
    <App
      cards={cards}
      comments={comments}
    />,
    document.querySelector(`#root`)
);
