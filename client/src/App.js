import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './App.css';

import Homepage from './Pages/Homepage';
import Courselist from './Pages/Courselist';
import SeperateCourse from './Pages/SeperateCourse';
import Popup from './Components/Popup';
import Enquire from './Pages/Enquire';
import AdminPage from './Pages/AdminPage';
import AboutUs from './Pages/AboutUs';

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

  }, []);

  const onClose = () => {
    setShowPopup(false);
  }

  return (
    <BrowserRouter>
        {showPopup && (
          <Popup onClose={onClose} />
        )}
        <Routes>
          <Route path="/" Component={Homepage}></Route>
          <Route path="/admin" Component={AdminPage}></Route>
          <Route path="/about" Component={AboutUs}></Route>
          <Route path="/courses" Component={Courselist}></Route>
          <Route path="/courses/:name" Component={SeperateCourse}></Route>
          <Route path="/courses/:name/enquire" Component={Enquire}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
