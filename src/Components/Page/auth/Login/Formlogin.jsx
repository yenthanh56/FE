import styles from "./Formlogin.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";
import usePassWordToogle from "../hooks/usePassWordToogle";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const cx = classNames.bind(styles);

const Formlogin = (props) => {
	const [focused, setFocused] = useState(false);
	const { label, onChange, type, value, errorMessage, id, ...inputProps } =
		props;
	const [InputType, ToogleIcon] = usePassWordToogle();
	// const [isHiddenPassword, setIsHiddenPassword] = useState(true);
	// login social media
	// const google = () => {
	// 	window.open("http://localhost:5000/auth/google", "_self");
	// };

	// const github = () => {
	// 	window.open("http://localhost:5000/auth/github", "_self");
	// };

	// const facebook = () => {
	// 	window.open("http://localhost:5000/auth/facebook", "_self");
	// };

	const focusHandler = () => {
		setFocused(true);
	};

	// C1 show hide password
	// const renderEyesPassword = () => {
	// 	if (!value) {
	// 		return;
	// 	}
	// 	if (isHiddenPassword) {
	// 		return (
	// 			<FontAwesomeIcon
	// 				icon={faEye}
	// 				onClick={() => setIsHiddenPassword((prev) => !prev)}
	// 				className={cx("iconEyes")}
	// 			/>
	// 		);
	// 	}
	// 	if (!isHiddenPassword) {
	// 		return (
	// 			<FontAwesomeIcon
	// 				icon={faEyeSlash}
	// 				onClick={() => setIsHiddenPassword((prev) => !prev)}
	// 				className={cx("iconEyes")}
	// 			/>
	// 		);
	// 	}
	// };

	return (
		<div className={cx("form__control")}>
			<label>{label}</label>
			<div className={cx("relative")}>
				<input
					{...inputProps}
					onChange={onChange}
					onBlur={focusHandler}
					onFocus={() =>
						inputProps.name === "confirmPassword" &&
						setFocused(true)
					}
					focused={focused.toString()}
					required
					// type={isHiddenPassword ? "password" : "text"} // c1
					type={type === "password" ? InputType : undefined}
				/>
				{type === "password" && (
					<span className={cx("form__control__toggle")}>
						{ToogleIcon}
					</span>
				)}
				{/* {type === "password" && renderEyesPassword()}  */}
				<span className={cx("form__control__err")}>{errorMessage}</span>
			</div>
		</div>
	);
};

export default Formlogin;

// <div className={cx("form__title")}>
// 	<span>Welcome</span>
// 	<FontAwesomeIcon
// 		icon={faUser}
// 		className={cx("form__title__icon")}
// 	/>
// </div>
// <div className={cx("form__control")}>
// 	<label>Username</label>
// 	<input
// 		type="text"
// 		value={username}
// 		onChange={nameOnchangeHandler}
// 		ref={usernameRef}
// 	/>
// </div>
// <div className={cx("form__control")}>
// 	<label htmlFor="password">Mật Khẩu</label>
// 	<input
// 		type="password"
// 		value={password}
// 		onChange={passwordOnchangeHandler}
// 		ref={passwordRef}
// 	/>
// </div>
