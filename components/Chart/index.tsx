import { useState, useEffect } from 'react';
import { VictoryChart, VictoryLine, VictoryAxis } from 'victory';

type GraphData = {
  views: {
    [date: string]: number;
  };
};

const Chart = () => {
  const [graphData, setGraphData] = useState<GraphData | null>(null);

  useEffect(() => {
    const fetchGraphData = async () => {
      const response = await fetch('https://fe-task-api.mainstack.io/');
      const data = await response.json();
      setGraphData(data.graph_data);
    };

    fetchGraphData();
  }, []);

  if (!graphData) {
    return <div>Loading...</div>;
  }

  const data = Object.entries(graphData.views).map(([date, value]) => ({
    x: new Date(date),
    y: value,
  }));

  return (
    <VictoryChart>
      <VictoryLine data={data} />
      <VictoryAxis
        tickFormat={(date) => new Date(date).toLocaleDateString()}
        style={{ tickLabels: { fontSize: 10, padding: 5 } }}
      />
      <VictoryAxis dependentAxis />
    </VictoryChart>
  );
};

export default Chart;
