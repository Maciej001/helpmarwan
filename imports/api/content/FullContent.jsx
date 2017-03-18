import React from 'react';
import { FullStory } from './FullStory.jsx'
import Form from './Form.jsx'
import './FullContent.css'

export const FullContent = ({}) => (
  <div className='FullContent'>
    <Form />
    <FullStory />
    <Form />
  </div>
);
