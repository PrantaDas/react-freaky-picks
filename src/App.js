import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './Component/Products/Products';
import Question from './Component/Question/Question';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Products></Products>
      <Question></Question>
    </div>
  );
}

export default App;
