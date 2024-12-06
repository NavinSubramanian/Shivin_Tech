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
import BlogList from './Pages/BlogList';
import BlogPage from './Pages/BlogPage';
import Terms from './Pages/Terms';
import Privacy from './Pages/Privacy';
import ScrollToTop from './Components/Utils/ScrollToTop';

function App() {
  const [showPopup, setShowPopup] = useState(false);

  // Show popup automatically after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  // Function to open the popup when the button is clicked
  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const onClose = () => {
    setShowPopup(false);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      {showPopup && <Popup onClose={onClose} />}
      <Routes>
        <Route
          path="/"
          element={<Homepage onOpenPopup={handleOpenPopup} />}
        ></Route>
        <Route
          path="/admin"
          element={<AdminPage onOpenPopup={handleOpenPopup} />}
        ></Route>
        <Route
          path="/about"
          element={<AboutUs onOpenPopup={handleOpenPopup} />}
        ></Route>
        <Route
          path="/blogs"
          element={<BlogList onOpenPopup={handleOpenPopup} />}
        ></Route>
        <Route
          path="/blogs/:id"
          element={<BlogPage onOpenPopup={handleOpenPopup} />}
        ></Route>
        <Route
          path="/courses"
          element={<Courselist onOpenPopup={handleOpenPopup} />}
        ></Route>
        <Route
          path="/courses/:name"
          element={<SeperateCourse onOpenPopup={handleOpenPopup} />}
        ></Route>
        <Route
          path="/courses/:name/enquire"
          element={<Enquire onOpenPopup={handleOpenPopup} />}
        ></Route>
        <Route path='/terms' element={<Terms />}></Route>
        <Route path='/privacy' element={<Privacy />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
