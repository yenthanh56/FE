import React, { useState } from "react";
import className from "classnames/bind";
import styles from "./UpDealhot.module.scss";
import { useDispatch } from "react-redux";
import { createDealHot } from "~/Components/store/DealHot/DealHotSlice";
import { makeRequest } from "~/axios";

const cx = className.bind(styles);

const UpDealhot = () => {
	const dispatch = useDispatch();
	const [image, setImage] = useState(null);
	const [detail, setDetail] = useState({
		title: "",
		image: "",
		price: "",
		priceOld: "",
		star: "",
		description: "",
		percent: "",
		dealhot: "",
		titleSell: "",
		sell: "",
		slug: "",
	});

	const onChangeHandler = (e) => {
		const { name, value } = e.target;
		if (name === image) {
			const file = e.target.files[0];
			file.preview = URL.createObjectURL(file);
			setImage(file);
		}
		setDetail((pre) => {
			return {
				...pre,
				[name]: value,
			};
		});
	};

	const onSubmitHandler = async (e) => {
		e.preventDefault();
		// createDealHot(detail, dispatch);

		console.log(detail);
	};

	return (
		<form onSubmit={onSubmitHandler} className={cx("formupdealhot")}>
			<div>
				<label>Title</label>
				<input type="text" name="title" onChange={onChangeHandler} />
			</div>
			<div>
				<label>Image</label>
				<input type="file" name="image" onChange={onChangeHandler} />
			</div>
			<div>
				<label>Price</label>
				<input type="text" name="price" onChange={onChangeHandler} />
			</div>
			<div>
				<label>PriceOld</label>
				<input type="text" name="priceOld" onChange={onChangeHandler} />
			</div>
			<div>
				<label>Star</label>
				<input type="text" name="star" onChange={onChangeHandler} />
			</div>
			<div>
				<label>Description</label>
				<input
					type="text"
					name="description"
					onChange={onChangeHandler}
				/>
			</div>
			<div>
				<label>Percent</label>
				<input type="text" name="percent" onChange={onChangeHandler} />
			</div>
			<div>
				<label>Dealhot</label>
				<input type="text" name="dealhot" onChange={onChangeHandler} />
			</div>
			<div>
				<label>TitleSell</label>
				<input
					type="text"
					name="titleSell"
					onChange={onChangeHandler}
				/>
			</div>
			<div>
				<label>Sell</label>
				<input type="text" name="sell" onChange={onChangeHandler} />
			</div>
			<div>
				<label>Slug</label>
				<input type="text" name="slug" onChange={onChangeHandler} />
			</div>
			<button>add</button>
		</form>
	);
};

export default UpDealhot;
