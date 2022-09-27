import jwtDecode from "jwt-decode";
import React, { useState, useEffect, createContext } from "react";
import {
  getAccessTokenApi,
  getRefreshTokenApi,
  refreshAccessTokenApi,
  logout,
} from "../api/auth";

export const AuthContext = createContext();

export default function AuthProvider(props) {
  const { children } = props;
  const [user, setUser] = useState({
    user: null,
    isLoading: true,
  });

  useEffect(() => {
    checkUserLogin(setUser);
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

function checkUserLogin(setUser) {
  const accessToken = getAccessTokenApi();
  if (!accessToken) {
    const refreshToken = getRefreshTokenApi();

    if (!refreshToken) {
      console.log("No hay refresh Token");
      logout();
      setUser({
        user: null,
        isLoading: false,
      });
    } else {
      refreshAccessTokenApi(refreshToken);
      console.log("Se refresca el refreshAccessTokenApi");
    }
  } else {
    setUser({
      isLoading: false,
      user: jwtDecode(accessToken),
    });
  }
}
