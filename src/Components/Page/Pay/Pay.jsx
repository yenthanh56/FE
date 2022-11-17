import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Pay.module.scss";
import { useSelector } from "react-redux";
import Button from "~/Components/UI/Button/Button";
import { setDataNull } from "~/Components/store/cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllUser } from "~/Components/store/authSlice";
import { selectAllCart } from "~/Components/store/cartSlice";
import { toast } from "react-toastify";
import NotPage from "~/Components/Page/NotPage/NotPage";
import {
	selectAllUserOrder,
	getAllUserOrder,
	userOrdered,
	getUserOrdered,
	deleteUserOrdered,
} from "~/Components/store/order/orderSlice";
// import UserOrderedItem from "../Cart/UserOrdered/UserOrderedItem";
import PayItem from "./PayItem/PayItem";
const cx = classNames.bind(styles);
const Pay = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [loading, setLoading] = useState(true);
	const user = useSelector((state) => state.auth?.login?.data);
	// const cart = useSelector(selectAllCart);

	const usersOrder = useSelector(userOrdered);

	const confirmOrderHandler = () => {
		dispatch(setDataNull());
		navigate("/");
	};

	const deleteOrderHandler = (id) => {
		console.log(id);
		deleteUserOrdered(dispatch, id);

		if (window.confirm("Bạn có chắc xóa hủy đơn hàng này không!!!")) {
			toast.success("Bạn đã hủy đơn hàng thành công");
		}
	};

	useEffect(() => {
		setLoading(true);
		if (user?.username) {
			getAllUserOrder(dispatch);
			getUserOrdered(dispatch, user?._id);
		}
		setLoading(false);
	}, [dispatch, user?._id, user?.username, usersOrder?.orders]);

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
						<div>
							{usersOrder?.orders &&
							usersOrder?.orders?.length > 0 ? (
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
								})
							) : (
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
