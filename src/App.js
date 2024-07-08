// import React from 'react';
// import Home from "./Home";
// import SingleMovie from "./SingleMovie";
// import Error from './Error';
// import {Routes,Route} from "react-router-dom";
// import "./App.css"

// const  App = () => {
//   return (
//   <>
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="movie/:id" element={<SingleMovie />} />
//                 <Route path="*" element={<Error />} />
//             </Routes>
//     </>
//   );
// };

//export default App



import React from 'react';
import Home from "./Home";
import SingleMovie from "./SingleMovie";
import Error from './Error';
import Login from './Login';
import Signup from './Signup';
import { Routes, Route } from "react-router-dom";
import Header from './Header';
import "./App.css"

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<SingleMovie />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
