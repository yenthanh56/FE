import React from "react";
import className from "classnames/bind";
import styles from "./Wrapper.module.scss";
const cx = className.bind(styles);

const Wrapper = (props) => {
	return <div className={cx("wrapper")}>{props.children}</div>;
};

export default Wrapper;
