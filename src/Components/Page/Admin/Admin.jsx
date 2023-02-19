import React, { useEffect, useState } from "react";
import className from "classnames/bind";
import styles from "./Admin.module.scss";
import AdminItem from "./AdminItem";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const cx = className.bind(styles);

const arrUpload = [
	{
		id: "1",
		name: "dealhot",
		path: "/admin/thanhngo/listdealhot",
	},
	{
		id: "2",
		name: "foryou",
		path: "/admin/thanhngo/upforyou",
	},
];

const Admin = () => {
	const [checkLogged, setCheckLogged] = useState(false);
	const navigate = useNavigate();
	const username = useSelector((state) => state.auth?.login?.data);

	useEffect(() => {
		if (!username && username?.admin === "false" && !checkLogged) {
			navigate("/users/login");
			setCheckLogged(false);
		}
	}, [username, checkLogged]);
	return (
		<div className={cx("admin")}>
			{/* <div>
				<h3>Upload Data</h3>
			</div> */}
			<table className={cx("table")}>
				<thead>
					<tr>
						<th>STT</th>
						<th>NAME</th>
					</tr>
				</thead>
				<tbody>
					{arrUpload.map((item) => (
						<tr key={item.id}>
							<td>{item.id}</td>
							<td>
								<Link to={item.path}>
									<li>{item.name}</li>
								</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>

			{/* <ul className={cx("admin__list")}>
				{arrUpload.map((item) => (
					<AdminItem item={item} key={item.id} />
				))}
			</ul> */}
		</div>
	);
};

export default Admin;
