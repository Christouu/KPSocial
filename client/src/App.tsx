import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Leftbar from "./components/Leftbar/Leftbar";
import Rightbar from "./components/Rightbar/Rightbar";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";

function App() {
  const currentUser = true;

  //this layour is for repeating components
  //we are going to use navbar, left and right bar on almost every page , so it's a bad practise to repeat them on very page
  //we are using Outlet component from react-router-dom to achive this affect
  //add your repeating elements in this layout
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div style={{ display: "flex" }}>
          <Leftbar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <Rightbar />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children }: any) => {
    //this children will be our protected routes
    //home page and profile page
    if (!currentUser) return <Navigate to={"/login"} />;

    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      //here we are connecting our repeating components to our routers
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      //here we are adding the children if there are any to our routes
      //this seems like angular routing... (meh angular)
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },

    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
