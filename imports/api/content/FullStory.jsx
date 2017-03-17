import React from 'react';

import './FullStory.css'

const article = [
  "My name is Maciej. I met Marwan on Twitter. This is where I look for prospective clients for the coding bootcamps I organise in exotic locations. At first, he was just a fellow geek, with an interest in a web application framework that I offered a course in. A potential client. A few tweets later, however, I realised that he was a refugee. With no money to spare on a fancy course. ",
  "Marwan used to live a comfortable middle class life, complete with a high-flying career in IT and a lovely house in the suburbs of Tripoli, where he lived with his wife and two young kids. He lost it all overnight, when civil war broke out in Libya. Determined to survive, Marwan and his family set off on a journey that was supposed to take them to the safe haven of Europe. But when they reached the border with Algeria, Marwan’s wife suffered shell shock. She didn’t know where she was, couldn’t remember her name, and no longer recognised her own family. ",
  "They don’t let you cross the border when you don’t know who you are. So Marwan had to make a choice. He could either head back to the war zone with the whole family or he could cross that border with the children. In the end, Marwan took the children across the border leaving his wife taking her own decision.",
  "Marwan and his kids finally reached Spain, where they obtained refugee status. Living in a refugee centre, away from all he knows, Marwan is trying to piece his life back together. He’s cleaning houses and driving a cab to support his family while - wait for it - doing a PhD in Artificial Intelligence. He’s bartering his ICT skills for Spanish lessons. He’s coaching a kid’s football team. And his children? They have settled very well in the local school. His daughter, who came to Spain without any Spanish, is now top of her class.",
  "When I heard his story, I offered him a free place on my course. Then, my partner and I organised a crowdfunding campaign to cover the cost of tickets, accommodation, and food. Thanks to the generosity of our friends, colleagues and clients, we managed to bring Marwan, together with his kids, to Gran Canaria. And they had a blast there! Marwan learnt marketable skills, met fellow web developers and made numerous professional connections. His kids had their first holiday since leaving the war zone. I thought: finally! A happy ending to another gruesome refugee story. And then I learnt about the ticking clock…",
  "Marwan’s temporary residency, which he obtained as a refugee in Spain, is running out on the 20th April. The Spanish government now considers Libya a safe place for refugees to return to. And they want to send him back there. When you look at the photos of sites that are 1 km away from Marwan’s former home, you will know why he’s not keen to go back. The only option for him to stay in Europe is to get a year-long full time job contract. He’s knocked on many doors but so far all have remained shut. No one wants to hire a refugee. Even one with his qualifications and credentials. But this man deserves to get his former life back. His family cannot go back to the hell that awaits them there. Would you help us stop the clock ticking?",
];


const photos = [
  {
    url: "https://s3.eu-west-2.amazonaws.com/helpmarwan/marwan1.jpg",
    text: "Marwan learning React.js"
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
      <p>{article[0]}</p>
      <img className="Image" src={photos[0].url} alt=""/>
      <span className="Subtitle">{photos[0].text}</span>
    </div>

    <div className="Paragraph">
      <p>{article[1]}</p>
      <img className="Image" src={photos[1].url} alt=""/>
      <span className="Subtitle">{photos[1].text}</span>
    </div>

    <div className="Paragraph">
      <p>{article[2]}</p>
      <img className="Image" src={photos[2].url} alt=""/>
      <span className="Subtitle">{photos[2].text}</span>
    </div>

    <div className="Paragraph">
      <p>{article[3]}</p>
      <img className="Image" src={photos[3].url} alt=""/>
      <span className="Subtitle">{photos[3].text}</span>
    </div>

    <div className="Paragraph">
      <p>{article[4]}</p>
      <img className="Image" src={photos[4].url} alt=""/>
      <span className="Subtitle">{photos[4].text}</span>
    </div>

    <div className="Paragraph">
      <p>{article[5]}</p>
      <img className="Image" src={photos[5].url} alt=""/>
      <span className="Subtitle">{photos[5].text}</span>
    </div>

  </div>
);
