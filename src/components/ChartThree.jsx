import React from 'react';
import { observer } from 'mobx-react-lite';
import chart from '../store/store';

const ChartThree = observer(() => {
  const textInput = React.useRef(null);

  return (
    <div>
      <div className="header">
        <div className="header__item">X</div>
        <div className="header__item">Y</div>
      </div>
      {chart.third.map((item, index) => {
        return (
          <div key={index} className="two__block">
            <input value={item.x} ref={textInput} />
            <input value={item.y} />
          </div>
        );
      })}
      <button
        className="add"
        onClick={(e) => {
          chart.convert();
          chart.onIputFunc(chart.third);
        }}>
        Convert
      </button>
    </div>
  );
});

export { ChartThree };
