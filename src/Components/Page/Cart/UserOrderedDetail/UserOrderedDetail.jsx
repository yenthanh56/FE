import React, { useState } from "react";
import className from "classnames/bind";
import styles from "./UserOrderedDetail.module.scss";

const cx = className.bind(styles);

const UserOrderedDetail = () => {
	const [districts, setDistricts] = useState(["Chọn Quận/Huyện"]);
	const vietnamData = [
		{
			city: "Chọn/Tỉnh Thành Phố",
			district: ["Chọn Quận/Huyện"],
		},
		{
			city: "An Giang",
			district: [
				"Thành phố Long Xuyên",
				"Thành phố Châu Đốc",
				"Thị xã Tân Châu",
				"Huyện An Phú",
				"Huyện Châu Phú",
				"Huyện Châu Thành",
				"Huyện Chợ Mới",
				"Huyện Phú Tân",
				"Huyện Thoại Sơn",
				"Huyện Tịnh Biên",
				"Huyện Tri Tôn",
			],
		},
		{
			city: "Bà Rịa - Vũng Tàu",
			district: [
				"Thành phố Vũng Tàu",
				"Thị xã Bà Rịa",
				"Thị xã Phú Mỹ",
				"Huyện Châu Đức",
				"Huyện Côn Đảo",
				"Huyện Đất Đỏ",
				"Huyện Long Điền",
				"Huyện Tân Thành",
				"Huyện Xuyên Mộc",
			],
		},
		{
			city: "Thành phố Hồ Chí Minh",
			district: [
				"Quận 1",
				"Quận 2",
				"Quận 3",
				"Quận 4",
				"Quận 5",
				"Quận 6",
				"Quận 7",
				"Quận 8",
				"Quận 9",
				"Quận 10",
				"Quận 11",
				"Quận 12",
				"Quận BìnhTân",
				"Quận Bình Thạnh",
				"Quận Gò Vấp",
				"Quận Phú Nhuận",
				"Quận TânBình",
				"Quận Tân Phú",
				"Quận Thủ Đức",
				"Huyện Bình Chánh",
				"Huyện Cần Giờ",
				"Huyện Củ Chi",
				"Huyện Hóc Môn",
				"Huyện Nhà Bè",
			],
		},
	];
	const changCityHanler = (e) => {
		const city = e.target.value;
		console.log(city);
		if (!city) return;
		const search = vietnamData.filter((data) => data.city === city);
		if (search && search.length > 0) {
			setDistricts(search[0].district);
		}
	};
	return (
		<div className={cx("userinformation")}>
			c31=["Quận 1","Quận 2","Quận 3","Quận 4","Quận 5","Quận 6","Quận
			7","Quận 8","Quận 9","Quận 10","Quận 11","Quận 12","Quận Bình
			Tân","Quận Bình Thạnh","Quận Gò Vấp","Quận Phú Nhuận","Quận Tân
			Bình","Quận Tân Phú","Quận Thủ Đức","Huyện Bình Chánh","Huyện Cần
			Giờ","Huyện Củ Chi","Huyện Hóc Môn","Huyện Nhà Bè"]
		</div>
	);
};

export default UserOrderedDetail;
