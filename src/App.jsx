import './App.css';
import Header from './components/Header';
import List from './components/List';
import Pluses from './components/Pluses';
import Trade from './components/Trade';

function App() {
  return (
    <div className="all">
      <div className="container all-container">
        <Header/>
        <List></List>
        <Pluses></Pluses>
        <Trade></Trade>
      </div>
    </div>
  )
}
export default App;