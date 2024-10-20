import logo from './logo.svg';
import './App.css';
import AddTask from './components/AddTask';

function App() {
  return (
    <div className="app">
      <>
        <h1 className="text-2xl font-bold py-4 pl-6">Task Tracker</h1>
        <p className="text-xl pl-6">Hi There</p>
        <div className="flex flex-row items-center">
          <p className="text-xl pl-6">Click</p>
          <AddTask/>
          <p className="text-xl">to add new button</p>
        </div>
      </>
    </div>
  );
}

export default App;
