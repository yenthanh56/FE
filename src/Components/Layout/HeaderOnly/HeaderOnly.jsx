import React from "react";
import Header from "../Components/Header/Header";
import { useSelector } from "react-redux";
import { selectAllUser } from "~/Components/store/authSlice";
import HeaderAdmin from "../HeaderAdmin/HeaderAdmin";
import { useNavigate } from "react-router-dom";
import Login from "~/Components/Page/auth/Login/Login";

const HeaderOnly = ({ children }) => {
	const userAdmin = useSelector(selectAllUser);
	const navigate = useNavigate();
	console.log(userAdmin);

	return (
		<div>
			{userAdmin?.admin === "true" ? <HeaderAdmin /> : <Header />}
			<main>{children}</main>
		</div>
	);
};

export default HeaderOnly;
