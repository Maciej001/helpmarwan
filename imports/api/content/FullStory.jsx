import React from 'react';

import './FullStory.css'

const article = [
  `My name is <a href="https://twitter.com/nowakowskipl">Maciej</a>. I met Marwan on Twitter, where I look for prospective clients for the coding bootcamps I organise in exotic locations. At first, he was just a fellow geek, with an interest in a web application framework that I offered a course in. A potential client. A few tweets later, however, I realised that he was a refugee. With no money to spare on a fancy course. `,
  "Marwan used to live a comfortable middle class life, complete with a high-flying career in IT and a lovely house in the suburbs of Tripoli, where he lived with his wife and two young kids. He lost it all overnight, when civil war broke out in Libya. Determined to survive, Marwan and his family set off on a journey that was supposed to take them to the safe haven of Europe. But when they reached the border with Algeria, Marwan’s wife suffered from shell shock. She didn’t know where she was, couldn’t remember her name, and no longer recognised her own family. ",
  "They don’t let you cross the border when you don’t know who you are. So Marwan had to make a choice. He could either head back to the war zone with the whole family or he could cross that border with the children. In the end, Marwan took the children across the border leaving his wife taking her own decision.",
  "Marwan and his kids finally reached Spain, where they obtained refugee status. Living in a refugee centre, far away from the life he used to know, Marwan is trying to piece his life back together. He’s cleaning houses and driving a cab to support his family while - wait for it - doing a PhD in Artificial Intelligence. He’s bartering his ICT skills for Spanish lessons. He’s coaching a kid’s football team. And his children? They have settled very well in the local school. His daughter, who came to Spain without any Spanish, is now top of her class.",
  "When I heard his story, I offered him a free place on my course. Then, my partner and I organised a crowdfunding campaign to cover the cost of tickets, accommodation, and food. Thanks to the generosity of our friends, colleagues and clients, we managed to bring Marwan, together with his kids, to Gran Canaria. And they had a blast there! Marwan learnt marketable skills, met fellow web developers and made numerous professional connections. His kids had their first holiday since leaving the war zone. I thought: finally! A happy ending to another gruesome refugee story. And then I learnt about the ticking clock…",
  "Marwan’s temporary residency, which he obtained as a refugee in Spain, is running out on April 20th. The Spanish government now considers Libya a safe place and they want to send him back there. When you look at the photos of sites that are 1 km away from Marwan’s former home, you will know why he’s not keen to go back. The only option for him to stay in Europe is to get a year-long full-time job contract? He’s knocked on many doors but so far all have remained shut. No one wants to hire a refugee. Even one with his qualifications and credentials. But this man deserves to get his former life back. His family cannot go back to the hell that awaits them there. Would you help us stop the clock ticking? Do you know anybody who could offer him a one-year full-time job contract. If yes, contact us with the form below. And share his story with friends and on social media, please!",
];


const photos = [
  {
    url: "https://s3.eu-west-2.amazonaws.com/helpmarwan/marwan7.jpg",
    text: "Marwan arrived to join the Meteor in Flip Flops coding camp"
  },
  {
    url: "https://s3.eu-west-2.amazonaws.com/helpmarwan/marwan2.jpg",
    text: "Marwan learning Meteor.js with Jaap"
  },
  {
    url: "https://s3.eu-west-2.amazonaws.com/helpmarwan/marwan3.jpg",
    text: "Marwan and other participants at Meteor in Flip Flops, Las Palmas"
  },
  {
    url: "https://s3.eu-west-2.amazonaws.com/helpmarwan/marwan4.jpg",
    text: "Sacha, Marwan, Xavier and I"
  },
  {
    url: "https://s3.eu-west-2.amazonaws.com/helpmarwan/marwan5.jpg",
    text: "Marwan presenting his project"
  },
  {
    url: "https://s3.eu-west-2.amazonaws.com/helpmarwan/marwan6.jpg",
    text: "Last photo before going back home, Soppa de Azul"
  },

]

export const FullStory = () => (
  <div className="FullStory">
    <h1>Marwan's Story</h1>

    <div className="Paragraph">
      <p>
        My name is
        {` `}
        <a href="https://twitter.com/nowakowskipl">Maciej</a>.
        {` `}
        I met Marwan on Twitter, where I look for prospective clients for the
        {` `}
        <a href="https://www.reactinflipflops.com">coding bootcamps</a>
        {` `}
        I organise in exotic locations. At first, he was just a fellow geek, with an interest in a web application framework that I offered a course in. A potential client. A few tweets later, however, I realised that he was a refugee. With no money to spare on a fancy course.
      </p>
      <img className="Image" src={photos[0].url} alt=""/>
      <span className="Subtitle">
        Marwan arrived to join the
        {` `}
        <a className="LinkImage" href="https://www.meteorinflipflops.com/">Meteor in Flip Flops</a>
        {` `}
        camp
      </span>
    </div>

    <div className="Paragraph">
      <p>
        Marwan used to live a comfortable middle class life, complete with a high-flying career in IT and a lovely house in the suburbs of Tripoli, where he lived with his wife and two young kids. He lost it all overnight, when
        {` `}
        <a href="https://en.wikipedia.org/wiki/Libyan_Civil_War_(2014%E2%80%93present)">civil war broke out in Libya</a>
        {` `}
        . Determined to survive, Marwan and his family set off on a journey that was supposed to take them to the safe haven of Europe. But when they reached the border with Algeria, Marwan’s wife suffered from shell shock. She didn’t know where she was, couldn’t remember her name, and no longer recognised her own family.
      </p>
      <img className="Image" src={photos[1].url} alt=""/>
      <span className="Subtitle">
        Marwan learning Meteor.js with
        {` `}
        <a className="LinkImage" href="https://www.facebook.com/jaap.mengers">Jaap</a>
      </span>
    </div>

    <div className="Paragraph">
      <p>{article[2]}</p>
      <img className="Image" src={photos[2].url} alt=""/>
      <span className="Subtitle">
        Marwan and other participants at
        {` `}
        <a className="LinkImage" href="Meteor in Flip Flops">Meteor in Flip Flops</a>
        {` `}
        , Las Palmas
      </span>
    </div>

    <div className="Paragraph">
      <p>{article[3]}</p>
      <img className="Image" src={photos[3].url} alt=""/>
      <span className="Subtitle">
        <a className="LinkImage" href="https://twitter.com/SachaGreif">Sacha Greif</a>,
        {` `}
        <a className="LinkImage" href="https://twitter.com/ghabi2">Marwan</a>,
        {` `}
        <a className="LinkImage" href="https://twitter.com/xav_cz">Xavier Cazalot</a>,
        {` `} and
        {` `}
        <a className="LinkImage" href="https://twitter.com/nowakowskipl">I</a>
      </span>
    </div>

    <div className="Paragraph">
      <p>
        When I heard his story, I offered him a free place on my course. Then, my partner and I organised a
        {` `}
        <a href="https://www.gofundme.com/help-marwan">crowdfunding campaign</a>
        {` `}
        to cover the cost of tickets, accommodation, and food. Thanks to the generosity of our friends, colleagues and clients, we managed to bring Marwan, together with his kids, to Gran Canaria. And they had a blast there! Marwan learnt marketable skills, met fellow web developers and made numerous professional connections. His kids had their first holiday since leaving the war zone. I thought: finally! A happy ending to another gruesome refugee story. And then I learnt about the ticking clock…
      </p>
      <img className="Image" src={photos[4].url} alt=""/>
      <span className="Subtitle">
        <a className="LinkImage" href="https://twitter.com/ghabi2">Marwan</a>
        {` `}
        presenting his team's project
      </span>
    </div>

    <div className="Paragraph">
      <p>{article[5]}</p>
      <img className="Image" src={photos[5].url} alt=""/>
      <span className="Subtitle">

        Last photo before going back home.
        {` `}
        <a className="LinkImage" href="https://twitter.com/jonisaksholm">Joni</a>,
        {` `}
        <a className="LinkImage" href="https://twitter.com/nowakowskipl">I</a>,
        {` `}
        <a className="LinkImage" href="https://www.facebook.com/alecs.navio">Alecs</a>
        {` `} and
        {` `}
        <a className="LinkImage" href="https://twitter.com/ghabi2">Marwan</a> at
        {` `}
        <a className="LinkImage" href="https://www.facebook.com/soppadeazul/">Soppa de Azul</a>.

      </span>
    </div>

  </div>
);
