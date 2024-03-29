import className from "classnames/bind";
import styles from "./Login.module.scss";
import Formlogin from "./Formlogin";
import { InputsLogin } from "./InputsLogin";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import Button from "~/Components/UI/Button/Button";

import { toast } from "react-toastify";
import { loginUser } from "~/Components/store/authSlice";
import { useDispatch } from "react-redux";

import axios from "axios";

const cx = className.bind(styles);
const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [values, setValues] = useState({
		username: "",
		password: "",
	});

	const onChangeValues = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const onSubmitHandler = async (e) => {
		e.preventDefault();

		if (!values.username) {
			toast.error("Bạn Chưa Nhập Tên Đăng Nhập");
			// usernameRef.current.focus();
			return;
		}
		if (!values.password) {
			toast.error("Bạn Chưa Nhập Mật Khẩu");
			// passwordRef.current.focus();
			return;
		}

		const newData = {
			username: values.username,
			password: values.password,
		};

		if (values.username && values.password) {
			await loginUser(newData, dispatch, navigate);
		}
	};

	return (
		<div className={cx("login")} onClick={() => navigate("/")}>
			<>
				<form
					className={cx("form")}
					onSubmit={onSubmitHandler}
					onClick={(e) => e.stopPropagation()}
				>
					<div className={cx("form__title")}>
						<span>Đăng Nhập</span>
						<FontAwesomeIcon
							icon={faUser}
							className={cx("form__title__icon")}
						/>
					</div>
					<Button className={cx("form__close")} to="/">
						<FontAwesomeIcon
							icon={faXmark}
							className={cx("form__close__icon")}
						/>
					</Button>
					{InputsLogin.map((input) => (
						<Formlogin
							key={input.id}
							{...input}
							value={values[input.name]}
							onChange={onChangeValues}
						/>
					))}
					<Button large>Đăng nhập</Button>
					<div className={cx("form__register")}>
						<span>
							Đăng ký tài khoản tại
							<Link to="/users/register">
								<span className={cx("form__register__title")}>
									đây!
								</span>
							</Link>
						</span>
					</div>

					{/* <div className={cx("form__social")}>
						<span
							className={cx("form__social__fb")}
							onClick={loginFacebookHandler}
						>
							<FontAwesomeIcon icon={faFacebook} />
						</span>
						<span className={cx("form__social__github")}>
							<FontAwesomeIcon icon={faGithub} />
						</span>
						<span
							className={cx("form__social__google")}
							onClick={loginGoogleHandler}
						>
							<FontAwesomeIcon icon={faGoogle} />
						</span>
					</div> */}
				</form>
			</>
		</div>
	);
};

export default Login;
{
	/* <div>
	Login Social Media
	<div className="loginButton google" onClick={google}>
		<img src={google} alt="" className="icon" />
		Google
	</div>
	<div className="loginButton facebook" onClick={facebook}>
		<img src={facebook} alt="" className="icon" />
		Facebook
	</div>
	<div className="loginButton github" onClick={github}>
		<img src={github} alt="" className="icon" />
		Github
	</div>
</div> */
}
