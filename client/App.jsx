import React from 'react';
import { Header } from './Header.jsx'
import { Content } from './content/Content.jsx'
import { FullContent } from './content/FullContent.jsx'

export const App = () => (
  <div className="App">
    <Header />
    <Content />
    <FullContent />
  </div>
);
