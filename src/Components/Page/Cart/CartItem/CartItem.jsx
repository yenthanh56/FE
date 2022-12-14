import React from "react";
import classNames from "classnames/bind";
import styles from "./CartItem.module.scss";
import Button from "~/Components/UI/Button/Button";
const cx = classNames.bind(styles);
const CartItem = (props) => {
	const { mainDeal, addItem, decreaseItem, clearItem } = props;
	// const price = `${mainDeal?.price.toFixed(3)} đ`;
	const amount = mainDeal?.cartQuantity;
	const totalOneProduct = `${(
		mainDeal?.cartQuantity * mainDeal?.price ||
		mainDeal?.cartQuantity * mainDeal?.currentPrice
	).toFixed(3)} đ`;

	return (
		<>
			<li className={cx("cartitem")}>
				<div className={cx("cartitem__title")}>
					<img src={mainDeal?.image} alt={mainDeal?.title} />
					<h4 className={cx("cartitem__title__name")}>
						{mainDeal?.title}
					</h4>
				</div>

				<div className={cx("cartitem__amount")}>
					<p>{amount}</p>
				</div>

				<div className={cx("cartitem__actions")}>
					<Button onClick={decreaseItem}>-</Button>

					<Button onClick={addItem}>+</Button>
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
