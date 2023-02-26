import React, { useEffect, useState } from "react";
import className from "classnames/bind";
import styles from "./ProductDetail.module.scss";
import { toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";
import { getDealHotSlug } from "~/Components/store/DealHot/DealHotSlice";
import { selectDetailDealHot } from "~/Components/store/DealHot/DealHotSlice";
import Button from "~/Components/UI/Button/Button";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart } from "~/Components/store/cartSlice";

const cx = className.bind(styles);
const ProductDetail = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { id } = useParams();
	const product = useSelector(selectDetailDealHot);
	const username = useSelector((state) => state.auth?.login?.data);
	const { currentUser } = useSelector((state) => state.auth);

	const [quantity, setQuantity] = useState(1);

	// let total = useSelector((state) => state.cart.data?.cartTotalAmount);
	// total = `${total.toFixed(3)} đ`;
	const priceCurrent = `${product?.price?.toFixed(3)} đ`;
	const priceOld = `${product?.priceOld?.toFixed(3)} đ`;
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		window.scroll(0, 0);
		getDealHotSlug(dispatch, id);
		setLoading(false);
	}, [dispatch, id]);

	const decreeseQuantityBtn = (e) => {
		e.preventDefault();
		setQuantity((pre) => (pre === 1 ? 1 : pre - 1));
	};

	const increeseQuantityBtn = (e) => {
		e.preventDefault();
		setQuantity((pre) => pre + 1);
	};

	const addToCartHandler = (e) => {
		e.preventDefault();
		if (currentUser?.username || username?.username) {
			dispatch(
				addToCart({
					id: product?._id,
					title: product?.title,
					price: product?.price,
					image: product?.image,
					quantity,
				})
			);
			toast.success("Bạn đã Thêm vào giỏ hàng");
			return;
		} else {
			toast.error("Bạn phải đăng nhập để thêm sản phẩm vào giỏ hàng");
			navigate("/users/login");
			return;
		}
	};

	const formRenderItems = (
		<>
			<form className={cx("product")}>
				<img
					src={product?.image}
					alt={product?.title}
					className={cx("product__image")}
				/>
				<div className={cx("product__detail")}>
					<h1>{product?.title}</h1>
					<p>{product?.description}</p>

					<div className={cx("product__price")}>
						<span className={cx("product__price__current")}>
							{priceCurrent}
						</span>
						<span className={cx("product__price__old")}>
							{priceOld}
							<span
								className={cx(
									"product__price__old__underlined"
								)}
							></span>
						</span>
					</div>
					<div className={cx("product__sell")}>
						<span className={cx("product__sell__title")}>
							{product?.titleSell}
						</span>
						<span
							className={cx("product__sell__percent")}
						>{`${product?.sell} %`}</span>
					</div>
					<div className={cx("product__amount")}>
						<Button onClick={(e) => decreeseQuantityBtn(e)}>
							-
						</Button>
						<input
							type="text"
							value={Number(quantity)}
							className={cx("product__inputamount")}
						/>
						<Button onClick={(e) => increeseQuantityBtn(e)}>
							+
						</Button>
					</div>
				</div>
			</form>
			<div className={cx("product__btn")}>
				<Button
					large
					onClick={(e) => addToCartHandler(e)}
					className={cx("product__btn__add")}
				>
					Thêm Vào Giỏ Hàng
				</Button>
				<Button large to="/giohang" className={cx("product__btn__go")}>
					Đi Đến Giỏ Hàng
				</Button>
				<Button
					large
					to="/deal-hot"
					className={cx("product__btn__buy")}
				>
					Tiếp Tục Mua Hàng
				</Button>
			</div>
		</>
	);
	const notProduct = (
		<div className={cx("page__not")}>
			<p style={{ marginBottom: "8px" }}>Sản phẩm không tồn tại</p>
			<Button large to="/deal-hot">
				Tiếp tục mua hàng
			</Button>
		</div>
	);
	if (loading) {
		return (
			<section style={{ textAlign: "center", color: "#000" }}>
				<p>Loading....</p>
			</section>
		);
	}

	return <>{id === product?._id ? formRenderItems : notProduct}</>;
};

export default ProductDetail;
