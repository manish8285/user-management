import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Users from './pages/Users';
import Home from './pages/Home';
import User from './pages/User';
import UpdateUser from './pages/UpdateUser';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position='bottom-center' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/edit-update' element={<UpdateUser />} />
        <Route path='/user' element={<User />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
