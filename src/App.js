import React, { Component } from 'react';
import QuoteBox from './components/quoteBox';
import { Spring } from 'react-spring/renderprops';

class App extends Component {
  state = {
    color: null,
  };
  render() {
    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {(props) => <QuoteBox />}
      </Spring>
    );
  }
}

export default App;
