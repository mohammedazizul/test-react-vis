import { 
  HorizontalGridLines, 
  LineSeries, 
  MarkSeries, 
  VerticalBarSeries, 
  VerticalGridLines, 
  XAxis, XYPlot, YAxis 
} from 'react-vis';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
import { readRemoteFile } from 'react-papaparse';
import csvFile from './data/data-csv.csv'
import { useEffect, useRef, useState } from 'react';

function App() {

  const hasSetData = useRef(false); // fix netlify error of : React Hook useEffect has a missing dependency
  const [fileData, setFileData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(
    () => {
      if(!hasSetData.current){
        readRemoteFile(csvFile,{
          download: true,
          header: true,
          dynamicTyping: true,
          complete: (results) => {
            console.log("csv-file-data: ", results.data);
            setFileData(results.data);
            setLoading(false);
            hasSetData.current = true;
            console.log(fileData);
          }
        });
      }
    },
    [fileData]
  );

  // const data = [
  //   {x: 0, y: 8},
  //   {x: 1, y: 5},
  //   {x: 2, y: 4},
  //   {x: 3, y: 9},
  //   {x: 4, y: 1},
  //   {x: 5, y: 7},
  //   {x: 6, y: 6},
  //   {x: 7, y: 3},
  //   {x: 8, y: 2},
  //   {x: 9, y: 0}
  // ];

  return (
    <div className="App">

      <div className="center">
        <span>data from csv file</span>
        {
          !loading ? (
            <p>{JSON.stringify(fileData)}</p>
          ) : (
            <div>Loading...</div>
          )
        }
      </div>

      <h1>test plot with csv file data</h1>

      <div className="center">

        <div className="center">
          <XYPlot height={300} width={300} color="red">
            <VerticalBarSeries data={fileData}></VerticalBarSeries>
            <XAxis></XAxis>
            <YAxis></YAxis>
          </XYPlot>
          <span>Vertical Bar Plot</span>
        </div>

        <div className="center">
          <XYPlot height={300} width={300}>
            <LineSeries data={fileData}></LineSeries>
            <VerticalGridLines></VerticalGridLines>
            <HorizontalGridLines></HorizontalGridLines>
            <XAxis></XAxis>
            <YAxis></YAxis>
          </XYPlot>
          <span>Line Plot</span>
        </div>

        <div className="center">
          <XYPlot height={300} width={300} color="blue">
            <MarkSeries data={fileData}></MarkSeries>
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
