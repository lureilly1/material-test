import logo from './logo.svg';
import './App.css';
import SidebarGroup from './components/SidebarGroup';
import { useSelections } from '@motor-js/engine'

function App() {

  return (
    <div className="App">
      <SidebarGroup />
    </div>
  );
}

export default App;
