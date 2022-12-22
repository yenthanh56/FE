import React from "react";
import className from "classnames/bind";
import styles from "./Admin.module.scss";
import AdminItem from "./AdminItem";
import { Link } from "react-router-dom";

const cx = className.bind(styles);
const arrUpload = [
	{
		id: "1",
		name: "dealhot",
		path: "/admin/thanhngo/updealhot",
	},
	{
		id: "2",
		name: "foryou",
		path: "/admin/thanhngo/upforyou",
	},
];

const Admin = () => {
	return (
		<div className={cx("admin")}>
			<div>
				<h3>Upload Data</h3>
			</div>
			<ul className={cx("admin__list")}>
				{arrUpload.map((item) => (
					<Link to={item.path} key={item.id}>
						<li>{item.name}</li>
					</Link>
				))}
			</ul>
		</div>
	);
};

export default Admin;
