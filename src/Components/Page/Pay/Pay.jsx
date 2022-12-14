import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Pay.module.scss";
import { useSelector } from "react-redux";
import Button from "~/Components/UI/Button/Button";
import { setDataNull } from "~/Components/store/cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import NotPage from "~/Components/Page/NotPage/NotPage";
import {
	userOrdered,
	getUserOrdered,
	deleteUserOrdered,
} from "~/Components/store/order/orderSlice";

import PayItem from "./PayItem/PayItem";
const cx = classNames.bind(styles);
const Pay = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [loading, setLoading] = useState(true);
	const user = useSelector((state) => state.auth?.login?.data);

	const usersOrder = useSelector(userOrdered);

	const confirmOrderHandler = () => {
		dispatch(setDataNull());
		navigate("/");
	};

	const deleteOrderHandler = (id) => {
		setLoading(true);

		console.log(id);

		if (user?._id) {
			navigate(`/cancelorder/${id}`);
			return;
		}
		setLoading(false);
	};

	useEffect(() => {
		setLoading(true);

		// getAllUserOrder(dispatch);
		if (user?.username) {
			getUserOrdered(dispatch, user?._id);
			setLoading(false);
		}
	}, [dispatch, user?._id, user?.username, usersOrder?.orders?.length > 0]);

	if (loading) {
		return (
			<section style={{ textAlign: "center", color: "#000" }}>
				<p>Loading....</p>
			</section>
		);
	}

	return (
		<>
			{usersOrder?.length < 0 || !user?.username ? (
				<NotPage />
			) : (
				<form className={cx("container")}>
					<div className={cx("pay")}>
						<h2 className={cx("pay__title")}>
							Thông Tin Đơn Hàng Đã Đặt
						</h2>
						<div className={cx("pay__detail")}>
							<h3>Họ Tên</h3>
							<h3>Tên Sản Phẩm</h3>
							<h3>Số Lượng</h3>
							<h3>Xóa Sản Phẩm</h3>
							<h3>Giá Từng Sản Phẩm</h3>
							<h3>Thành Tiền</h3>
							<h3>Thời Gian</h3>
						</div>

						{/* <div className={cx("pay__name")}>
								<span>Tổng : {`${total?.toFixed(3)}`}</span>
							</div> */}
						<div style={{ textAlign: "center" }}>
							{usersOrder?.orders &&
								usersOrder?.orders?.length > 0 &&
								usersOrder?.orders?.map((cartOrder) => {
									return (
										<PayItem
											cartOrder={cartOrder}
											key={cartOrder?._id}
											deleteOrder={() =>
												deleteOrderHandler(
													cartOrder?._id
												)
											}
										/>
									);
								})}

							{usersOrder?.orders?.length === 0 && (
								<div
									style={{
										textAlign: "center",
										marginTop: "24px",
									}}
								>
									<img
										src="https://www.pngfind.com/pngs/m/272-2727925_continue-shopping-empty-cart-png-transparent-png.png"
										alt="payempty"
									/>
								</div>
							)}
						</div>

						<div className={cx("pay__actions")}>
							<Button
								primary
								onClick={confirmOrderHandler}
								to="/"
							>
								Tiếp Tục Mua Hàng
							</Button>
						</div>
					</div>
				</form>
			)}
		</>
	);
};

export default Pay;

//  (
// 	<div
// 		style={{
// 			textAlign: "center",
// 			marginTop: "24px",
// 		}}
// 	>
// 		<img
// 			src="https://www.pngfind.com/pngs/m/272-2727925_continue-shopping-empty-cart-png-transparent-png.png"
// 			alt="payempty"
// 		/>
// 	</div>
// )
