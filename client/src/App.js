
import './App.css';
import Header from './components/Header';
import InputBox from './components/InputBox';
import TodoTitle from './components/TodoTitle';

function App() {
  return (
    <div className="App">
      <Header />
      <TodoTitle />
      <InputBox />
    </div>
  );
}

export default App;
