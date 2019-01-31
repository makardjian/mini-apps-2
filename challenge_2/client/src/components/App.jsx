import React from 'react';
import Form from './Form.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      graph: {},
    }
  }

  render() {
    return(
      <div id='app'>
        <h1>BTC Historcal Price Data</h1>
        <Form/>
      </div>
    )
  }
}

export default App;