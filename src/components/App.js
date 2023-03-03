import React  from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar  from './Navbar';
import Login from './Login';
import Task from './Task';
import TaskList  from './TaskList';
import Signup from './SignUp';
import TaskItem from './TaskItem';
import Homepage from './Homepage';
import TaskDetails from './TaskDetails';


function App() {
  return (
    <div className="App">
      <Homepage />
      {/* <Signup /> */}
      {/* <Login />  */}
      {/* <Task /> */}
      {/* <TaskDetails /> */}
      {/* <TaskItem  /> */}
      {/* <TaskList /> */}
    </div>
    
  );
}

export default App;
