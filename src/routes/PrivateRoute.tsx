/** @format */

/** @format */

import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ element }: any) => {
	const { user }: any = useAuth(); // Access the user state from context
	console.log("user ******", user);

	return true ? element : <Navigate to='/login' />;
};

export default PrivateRoute;
