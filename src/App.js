
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateEmployee from './app/pages/CreateEmployee';
import EmployeeList from './app/pages/EmployeeList';
import Error from './app/pages/Error';

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
