import React from "react";
import className from "classnames/bind";
import styles from "./Card.module.scss";
const cx = className.bind(styles);

const Card = () => {
	return (
		<div className={cx("container")}>
			<div className={cx("card")}>
				<div className={cx("card__image")}>
					<img src="" alt="" />
				</div>
				<div className={cx("card__content")}>
					<h3 className={cx("card__title")}>Title</h3>
					<p className={cx("card__description")}>
						lorem ipsum dolor sit amet, consectetur adipiscing
					</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
