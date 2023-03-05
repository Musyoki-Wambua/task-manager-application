import React  from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar'
import AddTask from './AddTask';

function App() {
  return (
    <div className= "App">
      <h1 className='text-center display-4'> Welcome To Task Manager List</h1>
      <Navbar /> 
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <AddTask />
          </div>

        </div>
      </div>


    </div>
    
  );
}

export default App;
