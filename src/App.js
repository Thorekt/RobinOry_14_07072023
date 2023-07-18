
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateEmployee from './components/CreateEmployee';
import EmployeeList from './components/EmployeeList';
import Error from './components/Error';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<CreateEmployee />} />
        <Route path='/EmployeeList' element={<EmployeeList />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
