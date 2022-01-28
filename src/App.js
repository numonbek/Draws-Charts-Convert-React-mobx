import React from 'react';
import './App.css';
import { Chart } from 'chart.js/auto';
import ChartOne from './components/ChartOne';
import { ChartThree } from './components/ChartThree';
import ChartTwo from './components/ChartTwo';
import { LineOne } from './components/Charts/LineOne';
import { LineTwo } from './components/Charts/LineTwo';
import { LineThird } from './components/Charts/LineThird';

function App() {
  return (
    <div className="App">
      <div className="coords">
        <div className="one">
          <ChartOne />
          <div className="lineOne">
            <LineOne />
          </div>
        </div>
        <div className="two">
          <ChartTwo />
          <div className="lineOne">
            <LineTwo />
          </div>
        </div>
        <div className="third">
          <ChartThree />
          <div className="lineOne">
            <LineThird />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
