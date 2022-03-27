import './App.css';
import Chart from './components/chart/Chart';
import Header from './components/main/Header';
import Nav from './components/nav/Nav'

function App() {
  return (
    <div className="app">
      <div className='nav'>
        <Nav />
      </div>
      <div className="main">
        <Header />
        <Chart />
      </div>
    </div>
  );
}

export default App;
