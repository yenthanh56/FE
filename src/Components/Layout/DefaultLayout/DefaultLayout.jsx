import React from "react";
import className from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
// import Sidebar from "../DefaultLayout/Sidebar/Sidebar";
const cx = className.bind(styles);
const DefaultLayout = ({ children, user }) => {
	return (
		<>
			<Header user={user} />

			<div className={cx("main")}>
				{/* <Sidebar /> */}
				<main className={cx("content")}>{children}</main>
			</div>

			<Footer />
		</>
	);
};

export default DefaultLayout;
