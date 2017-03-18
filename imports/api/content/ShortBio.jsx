import React from 'react';
import './ShortBio.css'

export const ShortBio = ({}) => (
  <div className="ShortBio">
    <h1>Do you know someone who can hire Marwan in web development? A 1-year contract can save his and his kids life!</h1>

    <div className="ShortBioParagraph">
      <div className="TopImageWrapper">
        <img className="TopImage" src="https://s3.eu-west-2.amazonaws.com/helpmarwan/marwan8.jpg" alt=""/>
      </div>
      <div className="ShortBioText">
        <p>
          Before the war in Libya, Marwan was a computer engineer just like you and me. Today he is a refugee living in Spain.
           His temporary residence permit expires on April 20th, and he will be sent back, together with his two young kids, to the war-torn Libya.
           Unless he gets a one year full-time job contract.
        </p>
      </div>
    </div>
  </div>
);
