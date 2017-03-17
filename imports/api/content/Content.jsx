import React from 'react';
import Timer from './Timer.jsx'
import { ShortBio } from './ShortBio.jsx'
import './Content.css'

export const Content = ({}) => (
  <div className="Content">

    <div className="ShortStory">
      <Timer />
      <ShortBio />
    </div>

    <div className="TopImageWrapper">
      <img className="TopImage" src="https://s3.eu-west-2.amazonaws.com/helpmarwan/marwan7.jpg" alt=""/>
    </div>

  </div>
);
