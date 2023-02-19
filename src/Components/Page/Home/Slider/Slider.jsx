import React, { useEffect, useState } from "react";
import className from "classnames/bind";
import styles from "./Slider.module.scss";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper/core";
import { mainSlider } from "../../../fakeData/mainSlider";
import Loading from "./loading";
import Loading1 from "./loading1";

const cx = className.bind(styles);

const Slider = () => {
	const [loading, setLoading] = useState(true);
	SwiperCore.use([Autoplay]);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, [1500]);
	}, []);

	// if (loading) {
	// 	return (
	// 		<div style={{ textAlign: "center" }}>
	// 			<p>Loading...</p>
	// 		</div>
	// 	);
	// }

	return (
		<div className={cx("slider")}>
			{loading ? (
				<Loading />
			) : (
				<Swiper
					grabCursor={true}
					autoplay={{ delay: 2000 }}
					modules={[Navigation, Pagination, Autoplay]}
					slidesPerView={1}
					navigation
					pagination={{ clickable: true }}
					className={cx("slider__top")}
				>
					{mainSlider.map((item, index) => (
						<SwiperSlide key={index}>
							<Link to={item.path}>
								<img src={item.image} alt="imageSlider" />
							</Link>
						</SwiperSlide>
					))}
				</Swiper>
			)}

			{loading ? (
				<Loading1 />
			) : (
				<div className={cx("slider__rigth")}>
					<img
						src="https://salt.tikicdn.com/cache/w400/ts/banner/6a/db/09/25456daf05eae0a1f7be018a5e108cb5.png.webp"
						alt="slider-rigth"
						className="slider__rigth__dealhot"
					/>
				</div>
			)}
		</div>
	);
};

export default Slider;
