// import React, {useEffect} from 'react';
// import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from '../src/container/Main'; // Rename MainSection.js to Main.jsx
import SignIn from '../src/container/Signin';
import Login from '../src/container/Login';
import Header from './container/Header';
// import { useAuth0 } from "@auth0/auth0-react";
// import Main_panel from './container/Main_panel';
import Mainpanel from './container/Mainpanel';
import Applyloan from './container/Applyloan';


function App() {
  // const { isAuthenticated, isLoading } = useAuth0();
  // const navigate = useNavigate();
 
  return (
    <Router>
      <Header/>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mainpanel" element={<Mainpanel />} /> 
          <Route path="/apply" element={<Applyloan/>} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
