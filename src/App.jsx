import './App.css';
import Header from './components/Header';
import List from './components/List';
import Pluses from './components/Pluses';
import Program from './components/Program';
import Trade from './components/Trade';
import Wallet from './components/Wallet';

function App() {
  return (
    <div className="all">
      <div className="all-container">
        <Header />
        <List></List>
        <Pluses></Pluses>
        <Trade></Trade>
        <Wallet></Wallet>
        <Program></Program>
      </div>
    </div>
  )
}
export default App;