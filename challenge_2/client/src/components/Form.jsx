import React from 'react';
import axios from 'axios';
// import Chart from './Chart.jsx';
import _map from 'lodash/map';
import _each from 'lodash/each';
import { Line } from 'react-chartjs-2'; 

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      chartData: {},
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount () {
    axios.get('/getCoinData')
    .then(data => {
      data = data.data.bpi;
      let pricesArray = [];
      let datesArray = [];
      _each(data, (value, key) => {
          pricesArray.push(Number(value.toFixed(2)));
          datesArray.push(key);
      });
      let chartObject = {
        labels: datesArray,
        datasets:[
          {
            data: pricesArray
          }
        ]
      }
      console.log(chartObject);
      this.setState({
        chartData: chartObject
      })
    });
  }

  handleClick() {
    return;
  }

  render() {
    let { chartData } = this.state;
    return (
      <React.Fragment>
        <div id='form'>
          <button id='render-button' onClick={this.handleClick}>Render BTC Price Data</button>
        </div>
        <Line data={chartData}/>
      </React.Fragment>
    )
  }
}

export default Form;

/*
  /Switch the GET request for the data to be inside componentDidMount. 
  /Create a state property for your labels = ["BTC"]
  Create a state property for your datasets = [{

  }]
*/