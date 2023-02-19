import { Fragment, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import className from "classnames/bind";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import styles from "./App.scss";

import "react-toastify/dist/ReactToastify.css";
import { DefaultLayout } from "./Components/Layout";
import { publicRouters } from "./Components/Router";
import { useSelector } from "react-redux";

const cx = className.bind(styles);
const App = () => {
	const username = useSelector((state) => state.auth?.login?.data);

	const navigate = useNavigate();

	// useEffect(() => {
	// 	const getUser = () => {
	// 		fetch("http://localhost:5000/auth/login/success", {
	// 			method: "GET",
	// 			credentials: "include",
	// 			withCredentials: true,
	// 			headers: {
	// 				Accept: "application/json",
	// 				"Content-Type": "application/json",
	// 				"Access-Control-Allow-Credentials": true,
	// 			},
	// 		})
	// 			.then((response) => {
	// 				if (response.status === 200) return response.json();
	// 				throw new Error("authentication has been failed!");
	// 			})
	// 			.then((resObject) => {
	// 				setUser(resObject.user);
	// 			})
	// 			.catch((err) => {
	// 				console.log(err);
	// 			});
	// 	};
	// 	getUser();
	// }, []);
	// console.log(user);

	return (
		<div className={cx("app")}>
			<div>
				<Routes>
					{publicRouters.map((route, index) => {
						const Page = route.component;
						const Admin = route.check;
						const Error = route.error;
						let path =
							route.path === "/admin/thanhngo" ||
							"/admin/thanhngo/listdealhot"
								? route.path === "/admin/thanhngo"
								: route.path;
						let Layout = DefaultLayout;
						if (route.layout) {
							Layout = route.layout;
						} else if (route.layout === null) {
							Layout = Fragment;
						}

						return (
							<Route
								exact
								key={index}
								path={route.path === path ? path : route.path}
								element={
									(!username &&
										route.path === "/admin/thanhngo") ||
									(!username &&
										route.path ===
											"/admin/thanhngo/listdealhot") ? (
										<Admin />
									) : (
										<Layout>
											<Page />
										</Layout>
									)
								}
							/>
						);
					})}
				</Routes>
			</div>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</div>
	);
};

export default App;
