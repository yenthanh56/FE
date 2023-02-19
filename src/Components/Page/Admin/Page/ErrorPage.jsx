import React from "react";
import classNames from "classnames/bind";
import styles from "./ErrorPage.module.scss";
import Button from "~/Components/UI/Button/Button";

const cx = classNames.bind(styles);

const ErrorPage = () => {
	return (
		<div className={cx("wrapper")}>
			<div className={cx("content")}>
				<h1>
					Cảnh Báo!!! Hãy Rời Khởi Ngay Lập Tức Trước Khi Quá Muộn!
				</h1>
				<Button primary className={cx("outpage")} to="/">
					Nhấn Chọn Để Rời Khỏi
				</Button>
			</div>
		</div>
	);
};

export default ErrorPage;
