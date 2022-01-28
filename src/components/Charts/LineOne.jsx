import React from 'react';
import { observer } from 'mobx-react-lite';
import chart from '../../store/store';
import { Line } from 'react-chartjs-2';
// import { Chart, ArcElement } from 'chart.js';
// Chart.register(ArcElement);

const LineOne = observer(() => {
  const data = {
    labels: chart.oneChartCords.map((item) => item.x),
    datasets: [
      {
        data: chart.oneChartCords.map((item) => item.y),
      },
    ],
  };
  return (
    <div>
      <div>Line One</div>
      <div>
        <Line data={data} />
      </div>
    </div>
  );
});

export { LineOne };
