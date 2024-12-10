// import { Routes ,Route} from 'react-router-dom'
// import {useState} from 'react'
// import Navbar from './Components/Navbar/Navbar'
// import Home from './Pages/Home/Home'
// import Video from './Pages/Video/video'


// const App = () => {

//      const [sidebar,setSidebar] = useState(true);


//   return (
//     <>
//     <Navbar setSidebar={setSidebar}/>
//      <Routes>
//       <Route path='/' element={<Home sidebar={sidebar}/>}/>
//       <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
//      </Routes>

//     </>
//   )
// }

// export default App;

import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Video from './Pages/Video/video';

const App = () => {
  const [sidebar, setSidebar] = useState(true);

  return (
    <>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        {/* Passing the sidebar state as a prop to Home */}
        <Route path="/" element={<Home sidebar={sidebar} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
   
    </>
  );
};

export default App;
