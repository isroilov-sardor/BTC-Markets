import './App.css';
import Header from './components/Header';
import List from './components/List';
import Pluses from './components/Pluses';

function App() {
  return (
    <div className="all">
      <div className="container all-container">
        <Header/>
        <List></List>
        <Pluses></Pluses>
      </div>
    </div>
  )
}
export default App;