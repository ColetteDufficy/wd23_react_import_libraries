import './App.css';
import CodingLanguages from './containers/CodingLanguage';
import languageList from './components/StudentList';
import Student from './components/Student';
import MyResponsiveAreaBump from './components/BumpChart';
import MyResponsiveLine from './components/LineChart';
import dataBump from './components/Data';
import lineData from './components/LineData';
import ApiDataContainer from './containers/ApiContainer';

function App() {
  
  return (
    <>
    <div id="apidata">
      < ApiDataContainer/>
    </div>

    <CodingLanguages />
    <div id="chart">
      < MyResponsiveAreaBump data={dataBump}/>
    </div>
    <div id="lineChart">
      < MyResponsiveLine data={lineData}/>
    </div>
    
    </>
  );
}

export default App;
