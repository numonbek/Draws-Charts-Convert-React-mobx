import React from 'react';
import { observer } from 'mobx-react-lite';
import chart from '../store/store';
// import { LineOne } from './LineOne';

const ChartOne = observer(() => {
  const textInput = React.useRef(null);

  return (
    <div>
      <div className="header">
        <div className="header__item">X</div>
        <div className="header__item">Y</div>
      </div>
      {chart.one.map((item, index) => {
        return (
          <div key={index} className="one__block">
            <input
              onInput={(e) => chart.onIputFunc(chart.one)}
              type="number"
              ref={textInput}
              onChange={(e) => (item.x = +e.target.value)}
            />
            <input
              onInput={(e) => chart.onIputFunc(chart.one)}
              type="number"
              onChange={(e) => (item.y = +e.target.value)}
            />
            <button id={item.id} onClick={(e) => chart.removeTodo(item.id)}>
              Delete
            </button>
          </div>
        );
      })}
      <button className="add" onClick={(e) => chart.addTodo(chart.one)}>
        Add
      </button>
      {/* <LineOne /> */}
    </div>
  );
});

export default ChartOne;
