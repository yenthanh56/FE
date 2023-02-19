import React, { Fragment, useState } from "react";
import Login from "~/Components/Page/auth/Login/Login";
import NavBar from "../NavBar/NavBar";

const Header = () => {
	const [isShowModal, setIsShowModal] = useState(false);

	// const isshowModalHandler = () => {
	// 	setIsShowModal(true);
	// 	navigate("/users/login");
	// };
	const isCloseModalHandler = () => {
		setIsShowModal(false);
	};

	// const logoutHandler = () => {
	// 	setIsShowModal(false);
	// 	logoutUser(dispatch, navigate, accessToken);
	// 	logout();
	// };
	// const logout = () => {
	// 	window.open("http://localhost:5000/auth/logout", "_self");
	// };

	return (
		<Fragment>
			<NavBar setIsShowModal={setIsShowModal} isShowModal={isShowModal} />
			{isShowModal && <Login isCloseModal={isCloseModalHandler} />}
		</Fragment>
	);
};

export default Header;
