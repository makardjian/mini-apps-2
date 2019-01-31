import React from 'react';
import axios from 'axios';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    axios.get('/getCoinData')
    .then(data => {
      console.log(data);
    })
  }

  render() {
    return (
      <div id='form'>
        <button id='render-button' onClick={this.handleClick}>Render BTC Price Data</button>
      </div>
    )
  }
}

export default Form;