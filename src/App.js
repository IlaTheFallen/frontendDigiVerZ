// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ThingsProvider } from './thingsContext';
import SigninComponent from './components/SigninComponent';
import HomeComponent from './components/HomeComponent';
import DataQualityComponent from './components/Data Quality Report/DataQualityComponent';
import ModelBuilderComponent from './components/Model Builder/ModelBuilderComponent';
import SalesForecastComponent from './components/Sales Forecasting/SalesForecastComponent';
import AlgorithmAnalyzerComponent from './components/Algorithm Analyzer/AlgorithmAnalyzerComponent';

function App() {
  return (
    <>
      <ThingsProvider>
        <Routes>
          <Route path="/" element={<SigninComponent />} />
          <Route path="/home" element={<HomeComponent />} />
          <Route path="/data-quality-report/*" element={<DataQualityComponent />} />
          <Route path="/model-builder/*" element={<ModelBuilderComponent />} />
          <Route path='/sales-forecast/*' element={<SalesForecastComponent />} />
          <Route path='/algorithm-analyzer/*' element={<AlgorithmAnalyzerComponent />} />
        </Routes>
      </ThingsProvider>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
