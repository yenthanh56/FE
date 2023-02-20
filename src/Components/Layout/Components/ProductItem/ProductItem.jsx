import React from "react";
import className from "classnames/bind";
import styles from "./ProductItem.module.scss";
import { Link } from "react-router-dom";
const cx = className.bind(styles);

const ProductItem = (props) => {
	const { data, setSearchShow } = props;

	return (
		<Link
			to={`/productdetail/${data._id}`}
			onClick={() => setSearchShow(false)}
		>
			<div className={cx("productitem")}>
				<div className={cx("productitem__name")}>{data.title}</div>
			</div>
		</Link>
	);
};

export default ProductItem;
