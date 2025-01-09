import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode"; // Pastikan untuk menginstal library ini

const INITIAL_STATE = localStorage.getItem("refreshToken") ? true : false;

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(INITIAL_STATE);
  const [name, setName] = useState("");

  // Fungsi untuk mengambil nama pengguna dari refreshToken saat aplikasi dimuat
  useEffect(() => {
    const refreshToken = localStorage.getItem("refreshToken");
    if (refreshToken) {
      const decoded = jwtDecode(refreshToken); // Decode token untuk mengambil data pengguna
      setName(decoded.name); // Setel nama pengguna dari token
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, name, setName }}>
      {children}
    </AuthContext.Provider>
  );
};