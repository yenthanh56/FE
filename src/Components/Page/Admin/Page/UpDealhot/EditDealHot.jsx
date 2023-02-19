import React, { useEffect, useState } from "react";
import className from "classnames/bind";
import styles from "./UpDealhot.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
	editDeal,
	getDealHotSlug,
	postDealHot,
	selectDetailDealHot,
} from "~/Components/store/DealHot/DealHotSlice";
import { makeRequest } from "~/axios";
import axios from "axios";
import Button from "~/Components/UI/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";

const cx = className.bind(styles);

const EditDealhot = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const detailDealhot = useSelector(selectDetailDealHot);
	const [title, setTitle] = useState(detailDealhot?.title);
	const [image, setImage] = useState(detailDealhot?.image);
	const [price, setPrice] = useState(detailDealhot?.price);
	const [priceOld, setPriceOld] = useState(detailDealhot?.priceOld);
	const [star, setStar] = useState(detailDealhot?.star);
	const [description, setDescription] = useState(detailDealhot?.description);
	const [percent, setPercent] = useState(detailDealhot?.percent);
	const [dealhot, setDealhot] = useState(detailDealhot?.dealhot);
	const [titleSell, setTitleSell] = useState(detailDealhot?.titleSell);
	const [sell, setSell] = useState(detailDealhot?.sell);
	const [slug, setSlug] = useState(detailDealhot?.slug);

	const { id } = useParams();
	const onSubmitHandler = async (e) => {
		e.preventDefault();
		// createDealHot(detail, dispatch);
		const data = new FormData();
		data.append("file", image);
		data.append("upload_preset", "uploads");

		try {
			const uploadRes = await axios.put(
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

			await editDeal(dispatch, id, newProduct);

			navigate("/admin/thanhngo/listdealhot");
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getDealHotSlug(dispatch, id);
	}, [dispatch, id]);

	return (
		<div className={cx("container")}>
			<form onSubmit={onSubmitHandler} className={cx("formupdealhot")}>
				<div
					className={cx("close")}
					onClick={() => navigate("/admin/thanhngo/listdealhot")}
				>
					<FontAwesomeIcon icon={faXmark} />
				</div>
				<div className={cx("item")}>
					<label>Tên Sản Phẩm</label>
					<input
						type="text"
						name="title"
						value={title}
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
						value={price}
						onChange={(e) => setPrice(e.target.value)}
					/>
				</div>
				<div className={cx("item")}>
					<label>Giá Cũ</label>
					<input
						type="number"
						name="priceOld"
						value={priceOld}
						onChange={(e) => setPriceOld(e.target.value)}
					/>
				</div>
				<div className={cx("item")}>
					<label>Đánh Giá</label>
					<input
						type="number"
						name="star"
						value={star}
						onChange={(e) => setStar(e.target.value)}
					/>
				</div>
				<div className={cx("item")}>
					<label>Chi Tiết</label>
					<input
						type="text"
						name="description"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</div>
				<div className={cx("item")}>
					<label>Giảm Giá</label>
					<input
						type="text"
						name="percent"
						value={percent}
						onChange={(e) => setPercent(e.target.value)}
					/>
				</div>
				<div className={cx("item")}>
					<label>Logo Giảm Giá</label>
					<input
						type="text"
						name="dealhot"
						value={dealhot}
						onChange={(e) => setDealhot(e.target.value)}
					/>
				</div>
				<div className={cx("item")}>
					<label>Tình Trạng</label>
					<input
						type="text"
						name="titleSell"
						value={titleSell}
						onChange={(e) => setTitleSell(e.target.value)}
					/>
				</div>
				<div className={cx("item")}>
					<label>Đã Bán</label>
					<input
						type="number"
						name="sell"
						value={sell}
						onChange={(e) => setSell(e.target.value)}
					/>
				</div>
				<div className={cx("item")}>
					<label>Link Liên Kết</label>
					<input
						type="text"
						name="slug"
						value={slug}
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

export default EditDealhot;
