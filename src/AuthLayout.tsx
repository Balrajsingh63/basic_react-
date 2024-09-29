/** @format */

import React from "react";
import Hearder from "./components/Hearder/Hearder";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function AuthLayout() {
	return (
		<>
			<Outlet />
		</>
	);
}

export default AuthLayout;
