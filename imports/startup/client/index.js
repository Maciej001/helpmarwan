import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from './App.jsx';

Meteor.startup(() => {
  GOOGLE_TRACKING_ID = Meteor.settings.public.GOOGLE_TRACKING_ID;
  render(
    <App />,
    document.getElementById('root'),
  );
});
