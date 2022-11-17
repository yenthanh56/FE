import React from "react";
import className from "classnames/bind";
import styles from "./CancelOrder.module.scss";

const cx = className.bind(styles);

const CancelOrder = () => {
	return <form className={cx("cancel")}>
            <h2>Thông Tin Xác Nhận Lý Do Hủy Đơn Hàng</h2>
    </form>;
};

export default CancelOrder;
