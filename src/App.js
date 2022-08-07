import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import RegisterVolunteer from './Pages/RegisterVolunteer/RegisterVolunteer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register-volunteer/:title" element={<RegisterVolunteer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
