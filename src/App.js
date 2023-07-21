
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateEmployee from './app/pages/CreateEmployee';
import EmployeeList from './app/pages/EmployeeList';
import Error from './app/pages/Error';
import Header from './app/components/Header';
import './app/styles/app.css'

function App() {
  return (
    <div className='main-container'>
    <Router>
      <Header/>
      <Routes>
        <Route index element={<CreateEmployee />} />
        <Route path='/EmployeeList' element={<EmployeeList />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
