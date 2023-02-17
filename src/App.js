import "./App.css"
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Navbar from "./components/navbar/Navbar"

function App() {

  const Layout = () => {

    return (
      <div>
        <Navbar/>
        <div style={{ display: 'flex' }}>

        </div>
      </div>
    )
  }

  const router = createBrowserRouter([
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
