import { ArcSeries, HorizontalGridLines, LineSeries, MarkSeries, VerticalBarSeries, VerticalGridLines, XAxis, XYPlot, YAxis } from 'react-vis';
import './App.css';
import '../node_modules/react-vis/dist/style.css';

function App() {

  const data = [
    {x: 0, y: 8},
    {x: 1, y: 5},
    {x: 2, y: 4},
    {x: 3, y: 9},
    {x: 4, y: 1},
    {x: 5, y: 7},
    {x: 6, y: 6},
    {x: 7, y: 3},
    {x: 8, y: 2},
    {x: 9, y: 0}
  ];

  return (
    <div className="App">
      <h1>test plot with fake data</h1>

      <div className="center">
        <div className="center">
          <XYPlot height={300} width={300}>
            <VerticalBarSeries data={data}></VerticalBarSeries>
            <XAxis></XAxis>
            <YAxis></YAxis>
          </XYPlot>
          <span>Vertical Bar Plot</span>
        </div>

        <div className="center">
          <XYPlot height={300} width={300}>
            <LineSeries data={data}></LineSeries>
            <VerticalGridLines></VerticalGridLines>
            <HorizontalGridLines></HorizontalGridLines>
            <XAxis></XAxis>
            <YAxis></YAxis>
          </XYPlot>
          <span>Line Plot</span>
        </div>

        <div className="center">
          <XYPlot height={300} width={300}>
            <MarkSeries data={data}></MarkSeries>
            <VerticalGridLines></VerticalGridLines>
            <HorizontalGridLines></HorizontalGridLines>
            <XAxis></XAxis>
            <YAxis></YAxis>
          </XYPlot>
          <span>Series Plot</span>
        </div>

      </div>

    </div>
  );
}

export default App;
