import { Fragment, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import className from "classnames/bind";
import { Routes, Route } from "react-router-dom";
import styles from "./App.scss";

import "react-toastify/dist/ReactToastify.css";
import { DefaultLayout } from "./Components/Layout";
import { publicRouters } from "./Components/Router";

const cx = className.bind(styles);
const App = () => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const getUser = () => {
			fetch("http://localhost:4000/auth/login/success", {
				method: "GET",
				credentials: "include",
				withCredentials: true,
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
					"Access-Control-Allow-Credentials": true,
				},
			})
				.then((response) => {
					if (response.status === 200) return response.json();
					throw new Error("authentication has been failed!");
				})
				.then((resObject) => {
					setUser(resObject.user);
				})
				.catch((err) => {
					console.log(err);
				});
		};
		getUser();
	}, []);
	console.log(user);
	return (
		<div className={cx("app")}>
			<Routes>
				{publicRouters.map((route, index) => {
					const Page = route.component;
					let Layout = DefaultLayout;
					if (route.layout) {
						Layout = route.layout;
					} else if (route.layout === null) {
						Layout = Fragment;
					}
					return (
						<Route
							key={index}
							path={route.path}
							element={
								<Layout user={user}>
									<Page />
								</Layout>
							}
						/>
					);
				})}
			</Routes>
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
