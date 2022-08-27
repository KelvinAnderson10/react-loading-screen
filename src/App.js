import logo from './logo.svg';
import './App.css';
import gif from './loadinggif.gif'


function App() {
  return (
    <div className='App'>
      <div className='loadingScreen'>
        <div className='loadingContainer'>
          <img className='gif' width="250px" height="250px" src={gif}></img>
          <p>Loading...</p>
        </div>
      </div>
    </div>
  );
}

export default App;
