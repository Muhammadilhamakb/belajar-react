import BalancePage from "./pages/balance";
import DashboardPage from "./pages/dashboard";
import ErrorRoute from "./pages/errorRoute";
import ForgotPassword from "./pages/forgotPassword";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";

import { createBrowserRouter, RouterProvider } from "react-router-dom";



const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <DashboardPage/>,
      errorElement: <ErrorRoute/>,
    },
     
    {
      path: "/login",
      element: <SignInPage/>
    },
    {
      path: "/register",
      element: <SignUpPage/>
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword/>
    },
    {
      path: "/balance",
      element: <BalancePage/>
    }
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;