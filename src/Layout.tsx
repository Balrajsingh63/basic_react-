/** @format */

import React from "react";
import Hearder from "./components/Hearder/Hearder";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
	return (
		<>
			<Hearder />
			<Outlet />
			<Footer />
		</>
	);
}

export default Layout;
