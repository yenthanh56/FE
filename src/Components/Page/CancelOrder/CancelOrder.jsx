import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import className from "classnames/bind";
import styles from "./CancelOrder.module.scss";
import Button from "~/Components/UI/Button/Button";

import {
	userOrdered,
	getUserOrdered,
	cancelOrdered,
	deleteUserOrdered,
} from "~/Components/store/order/orderSlice";
import CancelOrderItem from "./CancelOrderItem";

const cx = className.bind(styles);

const CancelOrder = () => {
	const { id } = useParams();
	console.log(id);
	const whyCancelOrdered = [
		{
			id: "1",
			title: "Các khoản phí phụ thu",
		},
		{
			id: "2",
			title: "Quá nhiều bước",
		},
		{
			id: "3",
			title: "Quá đắt",
		},
		{
			id: "4",
			title: "An ninh không chắc chắn",
		},
		{
			id: "5",
			title: "Thiếu sự thân thiện với thiết bị di động",
		},
		{
			id: "6",
			title: "Không có chính sách hoàn trả miễn phí ",
		},
		{
			id: "7",
			title: "Không có hỗ trợ khách hàng trực tiếp",
		},
		{
			id: "8",
			title: "Khác",
		},
	];

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [checked, setChecked] = useState([]);
	const [textArea, setTextArea] = useState("");
	const usersOrder = useSelector(userOrdered);

	const user = useSelector((state) => state.auth?.login?.data);

	// onChangeHandler WhyCancelOrdered
	const onChangeCancelOrderHandler = (title) => {
		setChecked((pre) => {
			const isChecked = checked.includes(title);
			if (isChecked) {
				return checked.filter((item) => item !== title);
			} else {
				return [...pre, title];
			}
		});
	};

	// onChangeTextArea get content value

	const onChangeTextAreaHandler = (e) => {
		setTextArea(e.target.value);
	};

	const cancelOrderSubmitHandler = (e) => {
		e.preventDefault();
		const valueCancelOrdered = {
			checked: checked,
			content: textArea,
		};
		console.log(valueCancelOrdered);
		if (window.confirm("Bạn có chắc xóa hủy đơn hàng này không!!!")) {
			toast.success("Bạn đã hủy hơn hàng thành công");
			deleteUserOrdered(dispatch, id);
			navigate("/");
			return;
		}

		// console.log(valueCancelOrdered);
		// console.log(id);
	};

	useEffect(() => {
		if (user?.username) {
			getUserOrdered(dispatch, user?._id);
		}
	}, [dispatch, user?._id, user?.username, usersOrder?.orders?.length > 0]);

	return (
		<form className={cx("cancel")}>
			<h3 className={cx("cancel__title")}>Lý Do Hủy Đơn Hàng</h3>

			{/* <div className={cx("cancel__information__title")}>
				<h3>Tên Sản Phẩm</h3>
				<h3>Số Lượng</h3>

				<h3>Tổng</h3>
			</div>
			{usersOrder?.orders?.map((order) => (
				<div className={cx("cancel__information")} key={order?._id}>
					<ul>
						<CancelOrderItem order={order} />
					</ul>
				</div>
			))} */}
			<div className={cx("cancel__information__whycancel")}>
				{whyCancelOrdered.map((item) => (
					<div
						key={item.id}
						className={cx("cancel__information__whycancel__text")}
					>
						<label> {item.title}</label>
						<input
							type="checkbox"
							checked={checked.includes(item.title)}
							onChange={() =>
								onChangeCancelOrderHandler(item.title)
							}
						/>
					</div>
				))}
				{checked.includes("Khác") && (
					<div className={cx("cancel__information__textarea")}>
						<textarea
							rows="5"
							cols="30"
							type="text"
							defaultValue={textArea}
							onChange={onChangeTextAreaHandler}
						/>
					</div>
				)}
			</div>

			<div className={cx("cancel__information__actions")}>
				<Button primary onClick={(e) => cancelOrderSubmitHandler(e)}>
					Nhấn Hủy Đơn Hàng
				</Button>
				<Button primary to="/">
					{" "}
					Tiếp Tục Mua Hàng
				</Button>
			</div>
		</form>
	);
};

export default CancelOrder;
