import React, { useState, useRef } from "react";
import classNames from "classnames/bind";
import styles from "./Register.module.scss";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "~/Components/UI/Button/Button";

import { registerUser } from "~/Components/store/authSlice";
import Formlogin from "../Login/Formlogin";
const cx = classNames.bind(styles);

const Register = (props) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [values, setValues] = useState({
		username: "",
		email: "",
		password: "",
		cf_password: "",
	});

	const onChangeInputHandler = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	const InputRegister = [
		{
			id: "1",
			name: "username",
			type: "text",
			placeholder: "Tên Tài Khoản",
			errorMessage:
				"Tên tài khoản bắt buộc từ 3 đến 16 ký tự, không sử dụng ký tự đặc biệt",
			label: "Tên Tài Khoản",
			pattern: "^[A-Za-z0-9]{3,16}$",
			required: true,
		},
		{
			id: "2",
			name: "email",
			type: "email",
			placeholder: "Địa Chỉ Email",
			errorMessage: "Địa chỉ email không hợp lệ",
			label: "Email",
			pattern: "[a-z0-9]+@[a-z]+.[a-z]{2,3}",

			required: true,
		},
		{
			id: "3",
			name: "password",
			type: "password",
			placeholder: "Mật Khẩu",
			errorMessage:
				"Mật Khẩu bắt buộc từ 8 đến 20 ký tự,ít nhất 1 chữ cái,1 số, 1 ký tự đặc biệt",
			label: "Mật Khẩu",
			pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,

			required: true,
		},
		{
			id: "4",
			name: "cf_password",
			type: "password",
			placeholder: "Xác Nhận Mật Khẩu",
			errorMessage: "Mật khẩu không trùng khớp",
			label: "Xác Nhận Mật Khẩu",
			pattern: values.password,
			required: true,
		},
	];

	const onSubmitHandler = (e) => {
		e.preventDefault();

		const newData = {
			username: values.username,
			email: values.email,
			password: values.password,
			cf_password: values.cf_password,
		};

		registerUser(newData, dispatch, navigate);
	};

	return (
		<div className={cx("register")} onClick={() => navigate("/")}>
			<form
				className={cx("form")}
				onSubmit={onSubmitHandler}
				onClick={(e) => e.stopPropagation()}
			>
				<div className={cx("form__title")}>
					<span>Đăng ký Tài Khoản</span>
					<FontAwesomeIcon
						icon={faUser}
						className={cx("form__title__icon")}
					/>
				</div>
				{InputRegister.map((input) => (
					<Formlogin
						key={input.id}
						{...input}
						value={values[input.name]}
						onChange={onChangeInputHandler}
					/>
				))}

				<Button large>Đăng Ký</Button>
				<div className={cx("form__login")}>
					<span>
						Đăng nhập tài khoản tại
						<Link to="/users/login">
							<span className={cx("form__login__title")}>
								đây !
							</span>
						</Link>
					</span>
				</div>

				<Button className={cx("form__close")} to="/">
					<FontAwesomeIcon
						icon={faXmark}
						className={cx("form__close__icon")}
					/>
				</Button>
			</form>
		</div>
	);
};

export default Register;
