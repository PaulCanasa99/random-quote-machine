import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { Row, Col, Button } from 'react-bootstrap';
import { Spring } from 'react-spring/renderprops';
class QuoteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '#16a085',
      quote: 'Random Quote',
      author: 'Random author',
    };
  }
  colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857',
  ];

  componentDidMount() {
    fetch(
      'https://andruxnet-random-famous-quotes.p.rapidapi.com/?cat=famous&count=10',
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'andruxnet-random-famous-quotes.p.rapidapi.com',
          'x-rapidapi-key':
            'OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V',
        },
      }
    )
      .then((response) => response.json())
      .then((result) => (this.quotes = result));
  }

  /*   componentDidMount() {
    const apiUrl = 'https://api.github.com/users/hacktivist123/repos';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log('This is your data', data));
  } */

  handleNewQuote = () => {
    const index = Math.floor(Math.random() * (this.colors.length - 1));
    console.log('click handled');
    const index2 = Math.floor(Math.random() * (this.quotes.length - 1));
    this.setState({
      color: this.colors[index],
      quote: this.quotes[index2].quote,
      author: this.quotes[index2].author,
    });
  };

  authorStyle = {
    fontSize: '0.5em',
    height: 'auto',
    clear: 'both',
    paddingTop: '20',
    textAlign: 'right',
  };
  quoteBoxStyle = {
    borderRadius: '3px',
    position: 'relative',
    margin: '10% auto auto auto',
    width: '450px',
    padding: '40px 50px',
    backgroundColor: 'white',
  };

  render() {
    let backStyle = {
      backgroundColor: this.state.color,
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    };
    let buttonStyle = {
      backgroundColor: this.state.color,
      border: 'black',
    };
    let quoteTextStyle = {
      textAlign: 'center',
      width: '450',
      height: 'auto',
      clear: 'both',
      fontWeight: '500',
      fontSize: '1.75em',
      color: this.state.color,
    };
    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {(props) => (
          <div style={backStyle}>
            <div id="quote-box" style={this.quoteBoxStyle}>
              <div style={quoteTextStyle} className="quote-text">
                <FontAwesomeIcon
                  style={{ fontSize: '1.0em', marginRight: '0.4em' }}
                  icon={faQuoteLeft}
                />
                <span id="text">{this.state.quote}</span>
                <div style={this.authorStyle} id="author">
                  -{this.state.author}
                </div>
                <Row>
                  <Col xs={1}>
                    <Button
                      style={buttonStyle}
                      id="tweet-quote"
                      title="Tweet this quote"
                      href={
                        'https://twitter.com/intent/tweet?hashtags=quotes&text=' +
                        this.state.quote +
                        ' ' +
                        this.state.author
                      }
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </Button>
                  </Col>
                  <Col xs={{ offset: 6 }}>
                    <Button
                      onClick={this.handleNewQuote}
                      style={buttonStyle}
                      id="new-quote"
                    >
                      New Quote
                    </Button>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

export default QuoteBox;
