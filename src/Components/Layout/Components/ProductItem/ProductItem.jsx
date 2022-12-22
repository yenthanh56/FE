import React from "react";
import className from "classnames/bind";
import styles from "./ProductItem.module.scss";
const cx = className.bind(styles);

const ProductItem = (props) => {
	const { data } = props;

	return (
		<div className={cx("productitem")}>
			<div className={cx("productitem__name")}>{data.name}</div>
		</div>
	);
};

export default ProductItem;
