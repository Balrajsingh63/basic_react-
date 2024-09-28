/** @format */

import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "../Layout";
import Home from "../App/Home/Home";
import About from "../App/About/About";
import AuthLayout from "../AuthLayout";
import Login from "../Auth/Login/Login";
import SignUp from "../Auth/signUp/SignUp";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "",
				element: <PrivateRoute element={<Home />} />, // Wrap with PrivateRoute
			},
			{
				path: "about",
				element: <PrivateRoute element={<About />} />, // Wrap with PrivateRoute
			},
		],
	},
	{
		element: <AuthLayout />,
		children: [
			{
				path: "login",
				element: <Login />,
			},
			{
				path: "signUp",
				element: <SignUp />,
			},
		],
	},
]);

// const router = createBrowserRouter(
// 	createRoutesFromElements(
// 		<>
// 			{/* Protected routes inside PrivateRoute */}
// 			<Route element={<PrivateRoute />}>
// 				<Route path='/' element={<Layout />}>
// 					<Route index element={<Home />} />
// 					<Route path='about' element={<About />} />
// 				</Route>
// 			</Route>

// 			{/* Public routes */}
// 			<Route element={<AuthLayout />}>
// 				<Route path='login' element={<Login />} />
// 				<Route path='signUp' element={<SignUp />} />
// 			</Route>
// 		</>,
// 	),
// );

export default router;
