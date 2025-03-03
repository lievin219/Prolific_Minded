// import Navbar from "./Components/Navbar/Navbar";
// import Footer from "./Components/Footer/Footer";
// import { Routes, Route } from "react-router-dom";
// import Home from "./Pages/Home";


// import Login from "./Pages/Login";
// import About from "./Pages/About";
// import { HashRouter as Router } from "react-router-dom";

// function App() {
//   return (

//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/About" element={<About/>} />
//           <Route path="/Home" element={<Home/>} />
//           <Route path="/login" element={<Login/>} />
//         </Routes>
//         <Footer />
//       </Router>
    
//   );
// }

// export default App;
import Navbar from "./Components/Navbar/Navbar";
import Contact from "./Pages/Contact";
import Booking from "./Pages/Booking";
import Footer from "./Components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import PaymentPage from "./Pages/PaymentPage";
import Login from "./Pages/Login";
import Service from "./Pages/Service";

import About from "./Pages/About";
import { HashRouter as Router } from "react-router-dom";

// import { AuthProvider } from "react-auth-kit";  // Import AuthProvider

function App() {
  return (
    
      <Router>
        <Navbar />
        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Book" element={<Booking />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Book" element={<Booking />} />
          <Route path="/Payment" element={<PaymentPage />} />


          <Route path="/Home" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
   
  );
}

export default App;
