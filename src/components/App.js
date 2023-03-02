import React  from 'react';
import '../App.css';
import Navbar  from './Navbar';
import Login from './Login';
import Task from './Task';
import TaskList  from './TaskList';


function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Login />
      <Task />
      <TaskList />


    </div>
    
  );
}

export default App;
