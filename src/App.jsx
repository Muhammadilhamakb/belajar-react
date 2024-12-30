import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import SignInPage from "./pages/signIn";
import SignUpPage from "./pages/signUp";
import ErrorRoute from "./pages/errorRoute";
import ForgotPassword from "./pages/forgotPassword";
import DashboardPage from "./pages/dashboard";
import BalancePage from "./pages/balance";
import GoalPage from "./pages/goal";
import ExpensePage from "./pages/expense";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";

const App = () => {
  const { isLoggedIn } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/login" />;
  };

  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <RequireAuth><DashboardPage/></RequireAuth>,
      errorElement: <ErrorRoute/>,
    },
    {
      path: "/error",
      element: <ErrorRoute/>,
    },
    {
      path: "/login",
      element: <SignInPage/>,
    },
    {
      path: "/register",
      element: <SignUpPage/>,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword/>,
    },
    {
      path: "/balance",
      element: <RequireAuth><BalancePage/></RequireAuth>,
    },
    {
      path: "/expense",
      element: <RequireAuth><ExpensePage/></RequireAuth>,
    },
    {
      path: "/goal",
      element: <RequireAuth><GoalPage/></RequireAuth>,
    }

  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;