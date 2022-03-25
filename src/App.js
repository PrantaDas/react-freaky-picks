import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './Component/Products/Products';

function App() {
  return (
    <div className="App">
   <Header></Header>
   <Products></Products>
    </div>
  );
}

export default App;
