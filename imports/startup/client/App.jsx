import React from 'react';
import { Header } from '/imports/api/Header.jsx'
import { Content } from '/imports/api//content/Content.jsx'
import { FullContent } from '/imports/api/content/FullContent.jsx'

import './App.css'

export const App = () => (
  <div className="App">
    <Header />
    <Content />
    <FullContent />
  </div>
);
