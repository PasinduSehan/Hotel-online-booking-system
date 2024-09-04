import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddEmployee from './Components/AddEmployee';
import Navbar from './Components/Navbar';
import EmployeeList from './Components/EmployeeList';
import UpdateEmployee from './Components/UpdateEmployee';

import AddEmployeee from './Components/AddEmployeee';

function App() {
  
  return (
  <>
  <BrowserRouter>
  <Navbar />
  <Routes>
  <Route index element={<EmployeeList />} />
    <Route path="/" element={<EmployeeList />}></Route>
    <Route path="/employeeList" element={<EmployeeList />} />
    <Route path="/addEmployee" element={<AddEmployee />} />
    <Route path="/editEmployee/:id" element={<UpdateEmployee />} />

    <Route path="/addEmployeee" element={<AddEmployeee />} />
  </Routes>

  </BrowserRouter>
 
  </>
 
 
  );
}
export default App;

