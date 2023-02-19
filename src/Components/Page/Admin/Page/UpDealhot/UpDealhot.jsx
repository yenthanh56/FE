import React, { useState } from "react";
import className from "classnames/bind";
import styles from "./UpDealhot.module.scss";
import { useDispatch } from "react-redux";
import { postDealHot } from "~/Components/store/DealHot/DealHotSlice";
import { makeRequest } from "~/axios";
import axios from "axios";
import Button from "~/Components/UI/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const cx = className.bind(styles);

const UpDealhot = ({ setOpenAddproduct }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [title, setTitle] = useState(null);
	const [image, setImage] = useState(null);
	const [price, setPrice] = useState(null);
	const [priceOld, setPriceOld] = useState(null);
	const [star, setStar] = useState(null);
	const [description, setDescription] = useState(null);
	const [percent, setPercent] = useState("");
	const [dealhot, setDealhot] = useState("");
	const [titleSell, setTitleSell] = useState("");
	const [sell, setSell] = useState(null);
	const [slug, setSlug] = useState("");

	const onSubmitHandler = async (e) => {
		e.preventDefault();
		// createDealHot(detail, dispatch);
		const data = new FormData();
		data.append("file", image);
		data.append("upload_preset", "uploads");

		try {
			const uploadRes = await axios.post(
				"https://api.cloudinary.com/v1_1/dsfoqe4fq/image/upload",
				data
			);

			const { url } = uploadRes.data;
			const newProduct = {
				title,
				image: url,
				price: Number(price),
				priceOld: Number(priceOld),
				star: Number(star),
				description,
				percent,
				dealhot,
				titleSell,
				sell: Number(sell),
				slug,
			};
			await postDealHot(newProduct, dispatch);
			setOpenAddproduct(false);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div
			className={cx("container")}
			onClick={() => setOpenAddproduct(false)}
		>
			<form
				onSubmit={onSubmitHandler}
				className={cx("formupdealhot")}
				onClick={(e) => e.stopPropagation()}
			>
				<div
					className={cx("close")}
					onClick={() => setOpenAddproduct(false)}
				>
					<FontAwesomeIcon icon={faXmark} />
				</div>
				<div className={cx("item")}>
					<label>Tên Sản Phẩm</label>
					<input
						type="text"
						name="title"
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<div className={cx("item")}>
					<label>File Hình Ảnh</label>
					<input
						type="file"
						name="image"
						onChange={(e) => setImage(e.target.files[0])}
					/>
				</div>
				<div className={cx("item")}>
					<label>Giá Mới</label>
					<input
						type="number"
						name="price"
						onChange={(e) => setPrice(e.target.value)}
					/>
				</div>
				<div className={cx("item")}>
					<label>Giá Cũ</label>
					<input
						type="number"
						name="priceOld"
						onChange={(e) => setPriceOld(e.target.value)}
					/>
				</div>
				<div className={cx("item")}>
					<label>Đánh Giá</label>
					<input
						type="number"
						name="star"
						onChange={(e) => setStar(e.target.value)}
					/>
				</div>
				<div className={cx("item")}>
					<label>Chi Tiết</label>
					<input
						type="text"
						name="description"
						onChange={(e) => setDescription(e.target.value)}
					/>
				</div>
				<div className={cx("item")}>
					<label>Giảm Giá</label>
					<input
						type="text"
						name="percent"
						onChange={(e) => setPercent(e.target.value)}
					/>
				</div>
				<div className={cx("item")}>
					<label>Logo Giảm Giá</label>
					<input
						type="text"
						name="dealhot"
						onChange={(e) => setDealhot(e.target.value)}
					/>
				</div>
				<div className={cx("item")}>
					<label>Tình Trạng</label>
					<input
						type="text"
						name="titleSell"
						onChange={(e) => setTitleSell(e.target.value)}
					/>
				</div>
				<div className={cx("item")}>
					<label>Đã Bán</label>
					<input
						type="number"
						name="sell"
						onChange={(e) => setSell(e.target.value)}
					/>
				</div>
				<div className={cx("item")}>
					<label>Link Liên Kết</label>
					<input
						type="text"
						name="slug"
						onChange={(e) => setSlug(e.target.value)}
					/>
				</div>

				<Button primary className={cx("add")}>
					Thêm
				</Button>
			</form>
		</div>
	);
};

export default UpDealhot;
