import { SpeedInsights } from "@vercel/speed-insights/react"
import './App.css';
import { ToDoList } from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <ToDoList /> 
      {/* returns only the list, the container */}
    </div>
  );
}

export default App;
