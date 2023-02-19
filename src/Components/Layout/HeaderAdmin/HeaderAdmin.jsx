import React from "react";
import classNames from "classnames/bind";
import styles from "./HeaderAdmin.module.scss";

const cx = classNames.bind(styles);

const HeaderAdmin = () => {
	return (
		<header className={cx("headeradmin")}>
			<img src="/images/thanhngo.gif" alt="logo" className={cx("logo")} />

			<div className={cx("right")}>
				<h3>PAGE ADMIN</h3>
			</div>
		</header>
	);
};

export default HeaderAdmin;
