import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Pelayanan from './components/Pelayanan';
import Hubungi from './components/Hubungi';

function App() {
  return (
    <div>
    <div className="App">
      <NavigationBar />
      <Pelayanan />
      <Hubungi />
      </div>
    </div>
  );
}

export default App;
