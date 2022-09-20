// import React from "react";
// import "./App.scss";
// import { ReactDOM } from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// function App() {
//     return (
//       <Router>
//         <div className="app">
//           <h1>Sistema de Rutas Basicas</h1>
  
//           <Link to="/">Home</Link>
//           <br />
//           <Link to="/contact">Contact</Link>
//           <br />
//           <Link to="/users">Users</Link>
//           <br />
  
//           <Routes>
//             <Route exact path="/" element={<Home />} />
//             <Route exact path="/contact" element={<Contact />} />
//             <Route exact path="/users" element={<Users />} />
//             <Route path="*" element={<Error404 />} />
//           </Routes>
//         </div>
//       </Router>
//     );
//   }
  
//   function Home() {
//     return <h2>Estamos en el componente Home</h2>;
//   }
  
//   function Contact() {
//     return <h2>Estas en el componente Contactos</h2>;
//   }
  
//   function Users() {
//     return <h2>Estas en el componente Usuarios </h2>;
//   }
//   function Error404() {
//     return <h2>Error 404.... </h2>;
//   }
//   export default App;