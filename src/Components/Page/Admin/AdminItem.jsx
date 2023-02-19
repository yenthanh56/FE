import React from "react";
import { Link } from "react-router-dom";

const AdminItem = ({ item }) => {
	return (
		<Link to={item.path}>
			<li>{item.name}</li>
		</Link>
	);
};

export default AdminItem;
