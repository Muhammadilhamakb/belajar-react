import { useRouteError } from "react-router-dom";
import Logo from "../components/Elements/Logo";

const ErrorRoute = () => {
  const error = useRouteError();

  // Menangani kasus di mana `error` mungkin null
  const status = error?.status || 404;
  const statusText = error?.statusText || "Not Found";

  return (
    <div className="flex justify-center min-h-screen items-center bg-special-mainBg flex-col">
      <Logo />
      <h1 className="text-2xl font-bold mt-3 mb-1">Sorry,</h1>
      <p>{status} || {statusText}</p>
    </div>
  );
};

export default ErrorRoute;