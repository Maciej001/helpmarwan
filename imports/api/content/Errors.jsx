import React from 'react';
import './Errors.css';

export const Errors = ({ errors }) => (
  <div className='Errors'>
    {
      errors.map( ( error, index ) => <h1 key={index}>{error}</h1> )
    }
  </div>
);
