/** @format */

import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
	const { login }: any = useAuth(); // Use the login function from the context
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleLogin = (e: any) => {
		e.preventDefault();

		// Mock authentication (replace with your authentication logic)
		if (email === "user@example.com" && password === "password") {
			login({ email }); // Log in the user with email
		} else {
			setError("Invalid credentials");
		}
	};

	return (
		<div className='login-container'>
			<form onSubmit={handleLogin}>
				<div>
					<label>Email:</label>
					<input
						type='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>
				<div>
					<label>Password:</label>
					<input
						type='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>
				{error && <p style={{ color: "red" }}>{error}</p>}
				<button type='submit'>Login</button>
			</form>
		</div>
	);
};

export default Login;
