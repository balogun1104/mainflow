import { useState, useEffect } from "react";
import { VictoryChart, VictoryLine, VictoryAxis } from "victory";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import styles from "./chart.module.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  registerables,
} from "chart.js";

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

const Chart = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ...registerables
  );

  let xAxis;
  let yAxis;

  let DXAxis: any[];
  let DYAxis: any[];

  const [graphData, setGraphData] = useState({});
  const [location, setLocation] = useState<any[]>([]);
  const [company, setCompany] = useState<any[]>([]);

  useEffect(() => {
    const fetchGraphData = async () => {
      const response = await fetch("https://fe-task-api.mainstack.io/");
      const data = await response.json();
      setGraphData(data.graph_data.views);
      setLocation(data.top_locations);
      setCompany(data.top_sources);
    };

    fetchGraphData();
  }, []);

  // X and Y axis for line graph
  xAxis = Object.keys(graphData);
  yAxis = Object.values(graphData);

  // X and Y axis for country graph
  DXAxis = location.map((item) => {
    return item.country;
  });
  DYAxis = location.map((item) => {
    return item.count;
  });

  // X and Y axis for Country graph
  DXAxis = company.map((item) => {
    return item.source;
  });
  DYAxis = company.map((item) => {
    return item.count;
  });

  return (
    <>
      <div className={styles.line}>
        <Line
          options={options}
          data={{
            labels: xAxis,
            datasets: [
              {
                data: yAxis,
                borderColor: "#FF5403",
                backgroundColor: "rgba(255, 84, 3, 0.2)",
                fill: true,
              },
            ],
          }}
        />
      </div>

      <div className={styles.bottomChart}>
        <div className={styles.bottomChartCon}>
          <div className={styles.chartTitle}>
            <h2>Top Location</h2>
            <p>View full reports</p>
          </div>
          <div className={styles.chartMap}>
            <ul className={styles.countryList}>
              {location.map((item, ind) => {
                return (
                  <>
                    <li key={ind}>
                      {item.country} {item.percent}%
                    </li>
                  </>
                );
              })}
            </ul>
            <Doughnut
              data={{
                labels: DXAxis,
                datasets: [
                  {
                    // label: "# of Votes",
                    data: DYAxis,
                    backgroundColor: [
                      "rgba(255, 99, 132, 0.2)",
                      "rgba(54, 162, 235, 0.2)",
                      "rgba(255, 206, 86, 0.2)",
                      "rgba(75, 192, 192, 0.2)",
                      "rgba(153, 102, 255, 0.2)",
                      "rgba(255, 159, 64, 0.2)",
                    ],
                    borderColor: [
                      "rgba(255, 99, 132, 1)",
                      "rgba(54, 162, 235, 1)",
                      "rgba(255, 206, 86, 1)",
                      "rgba(75, 192, 192, 1)",
                      "rgba(153, 102, 255, 1)",
                      "rgba(255, 159, 64, 1)",
                    ],
                    borderWidth: 1,
                  },
                ],
              }}
            />
          </div>
        </div>
        <div className={styles.bottomChartCon}>
          <div className={styles.chartTitle}>
            <h2>Top Referral source</h2>
            <p>View full reports</p>
          </div>
          <div className={styles.chartMap}>
            <ul className={styles.countryList}>
              {company.map((item, ind) => {
                return (
                  <>
                    <li key={ind}>
                      {item.source} {item.percent}%
                    </li>
                  </>
                );
              })}
            </ul>
            <Doughnut
              data={{
                labels: DXAxis,
                datasets: [
                  {
                    // label: "# of Votes",
                    data: DYAxis,
                    backgroundColor: [
                      "rgba(255, 99, 132, 0.2)",
                      "rgba(54, 162, 235, 0.2)",
                      "rgba(255, 206, 86, 0.2)",
                      "rgba(75, 192, 192, 0.2)",
                      "rgba(153, 102, 255, 0.2)",
                      "rgba(255, 159, 64, 0.2)",
                    ],
                    borderColor: [
                      "rgba(255, 99, 132, 1)",
                      "rgba(54, 162, 235, 1)",
                      "rgba(255, 206, 86, 1)",
                      "rgba(75, 192, 192, 1)",
                      "rgba(153, 102, 255, 1)",
                      "rgba(255, 159, 64, 1)",
                    ],
                    borderWidth: 1,
                  },
                ],
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Chart;