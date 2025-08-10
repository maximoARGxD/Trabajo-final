import { createContext, useContext, useState } from "react";
import { addUser, findUser, getUsers } from "../hook/userStore";

const UserContext = createContext();

const UserProvider = (props) => {
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        const token = await response.json();
        setUser({ username, token });
        return true;
      }

      const found = findUser(username, password);
      if (found) {
        setUser({ username, token: "static-token" });
        return true;
      }

      return false;
    } catch (error) {
      console.error("Error en login:", error);
      return false;
    }
  };

  const register = async (username, email, password) => {
    const u = (username || "").trim();
    const e = (email || "").trim();
    const p = password || "";

    if (!u || !e || !p) {
      return { ok: false, message: "Completa todos los campos" };
    }

    const users = getUsers();
    const existsUsername = users.some((x) => x.username === u);
    const existsEmail = users.some((x) => x.email === e);

    if (existsUsername) {
      return { ok: false, message: "El username ya se encuentra en uso" };
    }

    if (existsEmail) {
      return { ok: false, message: "El correo ya se encuentra registrado" };
    }

    addUser({ username: u, email: e, password: p });
    return { ok: true, message: "Usuario registrado con éxito. Redirigiendo..." };
  };


  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ login, register, logout, user }}>
      {props.children}
    </UserContext.Provider>
  );
};

const useAuth = () => useContext(UserContext);

export { UserProvider, useAuth };