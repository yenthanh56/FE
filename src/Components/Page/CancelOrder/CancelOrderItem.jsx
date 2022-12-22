import React, { useEffect } from "react";
import className from "classnames/bind";
import styled from "./CancelOrderItem.module.scss";

const cx = className.bind(styled);

const CancelOrderItem = (props) => {
	const { order } = props;

	return (
		<li className={cx("cancelitem")}>
			<div>{order.titleProduct}</div>
			<div>{order.amount}</div>
			<div>{order.priceTotal}</div>
		</li>
	);
};

export default CancelOrderItem;
