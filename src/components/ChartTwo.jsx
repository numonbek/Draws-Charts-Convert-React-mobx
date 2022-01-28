import React from 'react';
import { observer } from 'mobx-react-lite';
import chart from '../store/store';

const ChartTwo = observer(() => {
  const textInput = React.useRef(null);

  return (
    <div>
      <div className="header">
        <div className="header__item">X</div>
        <div className="header__item">Y</div>
      </div>
      {chart.two.map((item, index) => {
        return (
          <div key={index} className="third__block">
            <input
              onInput={(e) => chart.onIputFunc(chart.two)}
              type="number"
              ref={textInput}
              onChange={(e) => (item.x = e.target.value)}
            />
            <input
              onInput={(e) => chart.onIputFunc(chart.two)}
              type="number"
              onChange={(e) => (item.y = e.target.value)}
            />
            <button id={item.id} onClick={(e) => chart.removeTodo(item.id)}>
              Delete
            </button>
          </div>
        );
      })}
      <button className="add" onClick={(e) => chart.addTodo(chart.two)}>
        Add
      </button>
    </div>
  );
});

export default ChartTwo;
