import React, { Component } from 'react';
import ReactGA  from 'react-ga';
import { Header } from '/imports/api/Header.jsx'
import { Content } from '/imports/api//content/Content.jsx'
import { FullContent } from '/imports/api/content/FullContent.jsx'

import './App.css'

class App extends Component {
  render() {
    ReactGA.initialize( GOOGLE_TRACKING_ID );

    return (
      <div className="App">
        <Header />
        <Content />
        <FullContent />
      </div>
    )
  }
}
export default App;
