import React from "react";
import classNames from "classnames/bind";
import styles from "./CartItem.module.scss";
import Button from "~/Components/UI/Button/Button";
const cx = classNames.bind(styles);
const CartItem = (props) => {
	const { product, increaseItem, decreaseItem, clearItem } = props;
	// const price = `${product?.price.toFixed(3)} đ`;
	const amount = product?.quantity;
	const totalOneProduct = `${(
		product?.quantity * product?.price ||
		product?.quantity * product?.currentPrice
	).toFixed(3)} đ`;

	return (
		<>
			<li className={cx("cartitem")}>
				<div className={cx("cartitem__title")}>
					<img src={product?.image} alt={product?.title} />
					<h4 className={cx("cartitem__title__name")}>
						{product?.title}
					</h4>
				</div>

				<div className={cx("cartitem__amount")}>
					<p>{amount}</p>
				</div>

				<div className={cx("cartitem__actions")}>
					<Button onClick={decreaseItem}>-</Button>

					<Button onClick={increaseItem}>+</Button>
				</div>
				<div className={cx("cartitem__detele")}>
					<Button onClick={clearItem} small>
						Xóa
					</Button>
				</div>
				<div className={cx("cartitem__totaloneproduct")}>
					{totalOneProduct}
				</div>
			</li>
		</>
	);
};

export default CartItem;
