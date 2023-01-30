
import './App.css';
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Работа", 5],
  ["Учеба", 7],
  ["Йога", 5],
  ["Развлечения", 2],
  ["Сон", 13],
];

export const options = {
  title: "Мои активности",
  is3D: true,
};

export function App() {
  return (
    <div className='App'>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>
  );
}

export default App;
