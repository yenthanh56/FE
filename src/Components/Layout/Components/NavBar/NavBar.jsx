import React, { useEffect, useState } from "react";
import className from "classnames/bind";
// import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Tippy from "@tippyjs/react/headless";
import styles from "./Navbar.module.scss";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCaretDown,
	faPlus,
	faStore,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	getAllUser,
	logoutUser,
	selectAllUser,
} from "~/Components/store/authSlice";
import Button from "~/Components/UI/Button/Button";
import Search from "../Search/Search";
import HeaderCart from "../HeaderCart/HeaderCart";
import { mainNav } from "../fakecategoryHeader/mainNav";
import Stylecategory from "../Stylecategory/Stylecategory";
import { setDataNull } from "~/Components/store/cartSlice";
import GetCookie from "~/Components/hooks/getCookie";
import RemoveCookie from "~/Components/hooks/removeCookie";
const cx = className.bind(styles);
const mainAccounts = [
	{
		path: "/pay",
		display: "Đơn hàng của tôi",
	},
	{
		path: "/quanlidoitra",
		display: "Quản lý đổi trả",
	},
	{
		path: "/thongbao",
		display: "Thông báo của tôi",
		notice: 0,
	},
	{
		path: "/taikhoancuatoi",
		display: "Tài khoản của tôi",
	},
	{
		path: "/nhanxetcuatoi",
		display: "Nhận xét sản phẩm của tôi",
	},
	{
		path: "/chinhsachdoitra",
		display: "Chính sách đổi trả",
	},
];

const NavBar = ({ setIsShowModal }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const username = useSelector(selectAllUser);

	const { currentUser } = useSelector((state) => state.auth);

	const [open, setOpen] = useState(false);
	const isshowModalHandler = () => {
		if (!username) {
			setIsShowModal(true);
			navigate("/users/login");
		} else {
			setIsShowModal(true);
		}
	};

	const logoutHandler = () => {
		setIsShowModal(false);
		logoutUser(dispatch, navigate);

		dispatch(setDataNull());
	};

	return (
		<>
			<header className={cx("navbar")}>
				<div className={cx("navbar__menu")}>
					<div className={cx("navbar__logo")}>
						<Link to="/">
							<img
								src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png"
								alt="tiki"
							/>
						</Link>
					</div>
					<div className={cx("navbar__mid")}>
						<div className={cx("navbar__mid__search")}>
							<Search />
						</div>
					</div>
					<div className={cx("navbar__rigth")}>
						{/* account  */}
						{currentUser || (username && username?.username) ? (
							<Tippy
								interactive
								placement="bottom-start"
								delay={200}
								visible={open}
								onClickOutside={() => setOpen(false)}
								render={(attrs) => (
									<div
										className={cx("box")}
										tabIndex="-1"
										{...attrs}
									>
										<p>Tài khoản</p>
										<span className={cx("box__username")}>
											{username?.username ||
												currentUser?.username}
										</span>
										{username?.admin === true && (
											<Link to={"/admin/thanhngo"}>
												<div
													className={cx("box__admin")}
												>
													Page Admin
												</div>
											</Link>
										)}
										{mainAccounts.map((item, index) => (
											<Link to={item.path} key={index}>
												<div
													className={cx("box__item")}
												>
													{item.display}

													{item.notice === 0 ? (
														<span
															className={cx(
																"box__item__notice"
															)}
														>
															{item.notice}
														</span>
													) : (
														""
													)}
												</div>
											</Link>
										))}

										<Button
											text
											onClick={logoutHandler}
											className={cx("logout")}
										>
											Đăng Xuất
										</Button>
									</div>
								)}
							>
								<div
									className={cx("navbar__account")}
									onClick={() => setOpen((pre) => !pre)}
								>
									<div
										className={cx("navbar__account__icon")}
									>
										{/* icon */}
										<span
											className={cx(
												"navbar__account__user__avatar"
											)}
										>
											<img
												src={
													username?.avatar ||
													currentUser.avatar
												}
												alt={
													username?.avatar ||
													currentUser.avatar
												}
											/>
										</span>
									</div>
									<div
										className={cx("navbar__account__user")}
									>
										<div
											className={cx(
												"navbar__account__user__item"
											)}
										>
											<span className={cx("caretdown")}>
												<i>
													<FontAwesomeIcon
														icon={faCaretDown}
													/>
												</i>
											</span>
										</div>
									</div>
								</div>
							</Tippy>
						) : (
							<Link
								to="/users/login"
								className={cx("navbar__account")}
								onClick={isshowModalHandler}
							>
								<div className={cx("navbar__account__icon")}>
									{/* icon */}
									<FontAwesomeIcon icon={faUser} />
								</div>
								<div className={cx("navbar__account__user")}>
									<div
										className={cx(
											"navbar__account__user__login"
										)}
									>
										Đăng nhập / Đăng ký
									</div>
									<div
										className={cx(
											"navbar__account__user__register"
										)}
									>
										Tài khoản
										{/* <span>ten ...</span> */}
										<i>
											<FontAwesomeIcon
												icon={faCaretDown}
											/>
										</i>
									</div>
								</div>
							</Link>
						)}

						<HeaderCart />
					</div>
				</div>

				<div className={cx("navbar__bottom")}>
					<div className={cx("navbar__bottom__title")}>
						FREESHIP
						<span>
							<FontAwesomeIcon icon={faPlus} />
						</span>
					</div>
					<div className={cx("navbar__bottom__mid")}>
						<nav>
							<ul className={cx("navbar__mid__list")}>
								{mainNav.map((nav, index) => (
									<Link
										to={nav.path}
										key={index}
										className={cx(
											"navbar__mid__list__item"
										)}
									>
										<li>
											<span>{nav.display}</span>
										</li>
									</Link>
								))}
							</ul>
						</nav>
					</div>
					<div className={cx("navbar__bottom__mybuy")}>
						<Link to="/banhang">
							<span className={cx("navbar__bottom__mybuy__icon")}>
								<FontAwesomeIcon icon={faStore} />
							</span>
							Bán hàng cùng Tiki
						</Link>
					</div>
				</div>
			</header>
			<div className={cx("navbar__category")}>
				<Stylecategory />
			</div>
		</>
	);
};

export default NavBar;
