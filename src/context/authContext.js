import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    // ...pending
    setCurrentUser(
      {
        id: 1,
        name: "Kimmo Andora",
        profilePicture: "https://images.pexels.com/photos/6209798/pexels-photo-6209798.jpeg?auto=compress&cs=tinysrgb&w=1600"
      }
    )
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser])

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};