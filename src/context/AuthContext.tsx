/** @format */

// AuthContext.js
import React, { createContext, useContext, useState } from "react";

// Create the AuthContext
const AuthContext = createContext({});

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);

// AuthProvider component to wrap around the app
export const AuthProvider = ({ children }: any) => {
	const [user, setUser] = useState(null); // Replace this logic with your real authentication logic

	// Login function
	const login = (userData: any) => {
		setUser(userData);
		localStorage.setItem("user", JSON.stringify(userData)); // Optional: Save to local storage
	};

	// Logout function
	const logout = () => {
		setUser(null);
		localStorage.removeItem("user"); // Optional: Clear from local storage
	};

	return (
		<AuthContext.Provider value={{ user, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
