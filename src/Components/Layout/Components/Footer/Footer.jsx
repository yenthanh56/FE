import React from "react";
import className from "classnames/bind";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import { supportCustomer } from "~/Components/fakeData/displayFooter/supportCustomer";
import { aboutTiki } from "~/Components/fakeData/displayFooter/aboutTiki";
import { partnerOperate } from "~/Components/fakeData/displayFooter/partner";

// pay
import LogoTiki from "~/Components/fakeData/displayFooter/Logo/logoTiki.svg";
import LogoVisa from "~/Components/fakeData/displayFooter/Logo/logoVisa.svg";
import LogoBorder from "~/Components/fakeData/displayFooter/Logo/logoBorder.svg";
import LogoJcb from "~/Components/fakeData/displayFooter/Logo/logoJcb.svg";
import LogoAtm from "~/Components/fakeData/displayFooter/Logo/logoAtm.svg";
import LogoMomo from "~/Components/fakeData/displayFooter/Logo/logoMomo.svg";
import LogoZaloPay from "~/Components/fakeData/displayFooter/Logo/logoZalopay.svg";
import LogoMoca from "~/Components/fakeData/displayFooter/Logo/logoMoca.svg";
import LogoViettelPay from "~/Components/fakeData/displayFooter/Logo/logoViettelpay.svg";
import LogoVnPay from "~/Components/fakeData/displayFooter/Logo/logoVnpay.svg";
import LogoDolars from "~/Components/fakeData/displayFooter/Logo/logoDolars.svg";
import LogoPay from "~/Components/fakeData/displayFooter/Logo/logoPay.svg";
import LogoTikiNow from "~/Components/fakeData/displayFooter/Logo/logoTikiNow.svg";

// logo connect
import LogoFb from "~/Components/fakeData/displayFooter/socialMedia/logoFb.svg";
import LogoYt from "~/Components/fakeData/displayFooter/socialMedia/logoYt.svg";
import LogoZalo from "~/Components/fakeData/displayFooter/socialMedia/logoZalo.svg";

// Product Category

// 1
import { toyMomvsBaby } from "~/Components/fakeData/displayFooter/fakeCategory/toyMomvsBaby";
import { freshFood } from "~/Components/fakeData/displayFooter/fakeCategory/freshFood";
import { telephoneIpad } from "~/Components/fakeData/displayFooter/fakeCategory/telephoneIpad";
import { healthBeauty } from "~/Components/fakeData/displayFooter/fakeCategory/healthBeauty";
import { appliancesElectric } from "~/Components/fakeData/displayFooter/fakeCategory/appliancesElectric";

// 2
import { womenFashion } from "~/Components/fakeData/displayFooter/fakeCategory/womenFashion";
import { menFashion } from "~/Components/fakeData/displayFooter/fakeCategory/menFashion";
import { womenShoes } from "~/Components/fakeData/displayFooter/fakeCategory/womenShoes";
import { menShoes } from "~/Components/fakeData/displayFooter/fakeCategory/menShoes";
import { womenHandbag } from "~/Components/fakeData/displayFooter/fakeCategory/womenHandbag";
import { menHandbag } from "~/Components/fakeData/displayFooter/fakeCategory/menHandbag";

// 3
import { backpackSuitcase } from "~/Components/fakeData/displayFooter/fakeCategory/backpackSuitcase";
import { accessoryFashion } from "~/Components/fakeData/displayFooter/fakeCategory/accessoryFashion";
import { watchJewels } from "~/Components/fakeData/displayFooter/fakeCategory/watchJewels";
import { accessoryComputer } from "~/Components/fakeData/displayFooter/fakeCategory/accessoryComputer";
import { houseLife } from "~/Components/fakeData/displayFooter/fakeCategory/houseLife";
import { departmentStoreOnline } from "~/Components/fakeData/displayFooter/fakeCategory/departmentStoreOnline";

// 4
import { internationalGoods } from "~/Components/fakeData/displayFooter/fakeCategory/internationalGoods";
import { digitalDevice } from "~/Components/fakeData/displayFooter/fakeCategory/digitalDevice";
import { voucherService } from "~/Components/fakeData/displayFooter/fakeCategory/voucherService";
import { carMotorCycleBicycle } from "~/Components/fakeData/displayFooter/fakeCategory/carMotorCycleBicycle";
import { bookStoreTiki } from "~/Components/fakeData/displayFooter/fakeCategory/bookStoreTiki";

// 5
import { electronicRefrigeration } from "~/Components/fakeData/displayFooter/fakeCategory/electronicRefrigeration";
import { sportPicnic } from "~/Components/fakeData/displayFooter/fakeCategory/sportPicnic";
import { camera } from "~/Components/fakeData/displayFooter/fakeCategory/camera";

const cx = className.bind(styles);

const Footer = () => {
	return (
		<div className={cx("container")}>
			<footer className={cx("footer")}>
				<div className={cx("footer__information")}>
					<div className={cx("footer__information__support")}>
						<h4>H??? tr??? kh??ch h??ng</h4>
						<p>
							Hotline:<a href="tel:1900-6035">1900-6035</a>
							<span>(1000 ??/ph??t, 8-21h k??? c??? T7, CN)</span>
						</p>
						{supportCustomer.map((item, index) => (
							<Link to={item.path} key={index}>
								<p>{item.display}</p>
							</Link>
						))}
						<p>
							H??? tr??? kh??ch h??ng:{" "}
							<a href="mailto:hotro@tiki.vn">hotro@tiki.vn</a>
						</p>
						<p>
							B??o l???i b???o m???t:{" "}
							<a href="mailto:security@tiki.vn">
								security@tiki.vn
							</a>
						</p>
					</div>

					<div className={cx("footer__information__about")}>
						<h4>V??? Tiki</h4>
						{aboutTiki.map((item, index) => (
							<Link to={item.path} key={index}>
								<p>{item.display}</p>
							</Link>
						))}
					</div>

					<div className={cx("footer__information__partner")}>
						<h4>H???p t??c v?? li??n k???t</h4>
						{partnerOperate.map((item, index) => (
							<Link to={item.path} key={index}>
								<p>{item.display}</p>
							</Link>
						))}
						<div
							className={cx("footer__information__partnerimage")}
						>
							<h4>Ch???ng nh???n b???i</h4>
							<img
								src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png"
								alt="imageicon"
								width={32}
								style={{ marginRight: "8px" }}
							/>
							<img
								src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong.svg"
								alt="subcribe"
								width={83}
							/>
						</div>
					</div>

					<div className={cx("footer__information__methodpay")}>
						<h4>Ph????ng th???c thanh to??n</h4>
						<p
							className={cx(
								"footer__information__methodpay__icon"
							)}
						>
							<span>
								<img src={LogoTiki} alt="logoTiki" />
							</span>
							<span>
								<img src={LogoVisa} alt="logoVisa" />
							</span>
							<span>
								<img src={LogoBorder} alt="logoBorder" />
							</span>
							<span>
								<img src={LogoJcb} alt="logoJcb" />
							</span>
							<span>
								<img src={LogoAtm} alt="logoAtm" />
							</span>
							<span>
								<img src={LogoMomo} alt="logoMomo" />
							</span>
							<span>
								<img src={LogoZaloPay} alt="logoZaloPay" />
							</span>

							<span>
								<img src={LogoMoca} alt="logoMoca" />
							</span>
							<span>
								<img
									src={LogoViettelPay}
									alt="logoViettelPay"
								/>
							</span>
							<span>
								<img
									src={LogoVnPay}
									alt="logovnPay"
									width={30}
								/>
							</span>
							<span>
								<img src={LogoDolars} alt="logoDolars" />
							</span>
							<span>
								<img src={LogoPay} alt="logoPay" />
							</span>
						</p>
						<div>
							<h4>D???ch v??? giao h??ng</h4>
							<img src={LogoTikiNow} alt="logoTiki" />
						</div>
					</div>

					<div className={cx("footer__information__connect")}>
						<h4>K???t n???i v???i ch??ng t??i</h4>
						<div
							className={cx(
								"footer__information__connect__socialmedia"
							)}
						>
							<span>
								<img src={LogoFb} alt="logoFb" />
							</span>
							<span>
								<img src={LogoYt} alt="logoYt" />
							</span>
							<span>
								<img src={LogoZalo} alt="logoZalo" />
							</span>
						</div>
						<div>
							<h4>T???i ???ng d???ng tr??n ??i???n tho???i</h4>

							<div
								className={cx(
									"footer__information__connect__download"
								)}
							>
								<img
									src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/qrcode.png"
									alt="imageQr"
									width={80}
								/>
								<div
									className={cx(
										"footer__information__connect__download__main"
									)}
								>
									<img
										src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/appstore.png"
										alt="imageAppstore"
										width={122}
									/>
									<img
										src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/playstore.png"
										alt="imageGoogleplay"
										width={122}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className={cx("address-info")}>
					<p>
						Tr??? s??? ch??nh: T??a nh?? Viettel, S??? 285, ???????ng C??ch M???ng
						Th??ng 8, ph?????ng 12, qu???n 10, Th??nh ph??? H??? Ch?? Minh
					</p>
					<p>
						Tiki nh???n ?????t h??ng tr???c tuy???n v?? giao h??ng t???n n??i, ch??a
						h??? tr??? mua v?? nh???n h??ng tr???c ti???p t???i v??n ph??ng ho???c
						trung t??m x??? l?? ????n h??ng
					</p>
					<p>
						Gi???y ch???ng nh???n ????ng k?? Kinh doanh s??? 0309532909 do S???
						K??? ho???ch v?? ?????u t?? Th??nh ph??? H??? Ch?? Minh c???p l???n ?????u
						ng??y 06/01/2010 v?? s???a ?????i l???n th??? 23 ng??y 14/02/2022
					</p>
					<p>?? 2022 - B???n quy???n c???a C??ng ty TNHH Ti Ki</p>
				</div>

				<div className={cx("tiki__about")}>
					<h1>Tiki - Th???t nhanh, th???t ch???t l?????ng, th???t r???</h1>
					<h2>Tiki c?? t???t c???</h2>
					<p>
						V???i h??ng tri???u s???n ph???m t??? c??c th????ng hi???u, c???a h??ng uy
						t??n, h??ng ngh??n lo???i m???t h??ng t???&nbsp;
						<a href="https://tiki.vn/dien-thoai-smartphone/c1795">
							??i???n tho???i smartphone
						</a>
						&nbsp;t???i&nbsp;
						<a href="https://tiki.vn/di-cho-online">
							Rau c??? qu??? t????i
						</a>
						, k??m theo d???ch v??? giao h??ng si??u t???c TikiNOW, Tiki mang
						?????n cho b???n m???t tr???i nghi???m mua s???m online b???t ?????u b???ng
						ch??? t??n. Th??m v??o ????, ??? Tiki b???n c?? th??? d??? d??ng s??? d???ng
						v?? v??n c??c ti???n ??ch kh??c nh??&nbsp;
						<a href="https://tiki.vn/san-pham-so">
							mua th??? c??o, thanh to??n ho?? ????n ??i???n n?????c, c??c d???ch
							v??? b???o hi???m.
						</a>
					</p>
					<h2>Khuy???n m??i, ??u ????i tr??n ng???p</h2>
					<p>
						B???n mu???n s??n gi?? s???c, Tiki c??&nbsp;
						<a href="https://tiki.vn/deal-hot">
							gi?? s???c m???i ng??y
						</a>{" "}
						cho b???n! B???n l?? t??n ????? c???a c??c th????ng hi???u, c??c&nbsp;
						<a href="https://tiki.vn/khuyen-mai/thuong-hieu-chinh-hang-tiki">
							c???a h??ng Official ch??nh h??ng
						</a>
						&nbsp;??ang ch??? ????n b???n. Kh??ng c???n s??n m?? freeship, v??
						Tiki ???? c?? h??ng tri???u s???n ph???m trong&nbsp;
						<a href="https://tiki.vn/khuyen-mai/mien-phi-van-chuyen">
							ch????ng tr??nh Freeship+
						</a>
						, kh??ng gi???i h???n l?????t ?????t, ti???t ki???m th???i gian v??ng b???c
						c???a b???n. Mua th??m g??i&nbsp;
						<a href="https://tiki.vn/hoi-vien-tikinow">
							TikiNOW ti???t ki???m
						</a>
						&nbsp;????? nh???n 100% free ship 2h & trong ng??y, ho???c mua
						g??i TikiNOW cao c???p ????? nh???n ???????c 100% freeship, ??p d???ng
						cho 100% s???n ph???m, 100% t???nh th??nh Vi???t Nam. B???n mu???n
						ti???t ki???m h??n n???a? ???? c?? TikiCARD,
						<a href="https://tiki.vn/khuyen-mai/mo-the-tikicard">
							th??? t??n d???ng Tiki ho??n ti???n 15%
						</a>
						&nbsp;tr??n m???i giao d???ch (t???i ??a ho??n 600k/th??ng)
					</p>
				</div>

				<div className={cx("tiki__category")}>
					<h1>Danh M???c S???n Ph???m</h1>
					{/* grid */}{" "}
					<div className={cx("tiki__grid")}>
						{/* column */}
						<div className={cx("tiki__column")}>
							<div>
								<div>
									<a href="https://tiki.vn/do-choi-me-be/c2549">
										????? Ch??i - M??? & B??
									</a>
								</div>
								<p
									style={{
										fontSize: "12px",
										lineHeight: "16px",
									}}
								>
									{toyMomvsBaby.map((item, index) => (
										<span key={index}>
											<Link to={item.path}>
												{item.display}
											</Link>
											<>
												{item.display ===
												"Chu???n b??? mang thai" ? (
													""
												) : (
													<>&nbsp;/&nbsp;</>
												)}
											</>
										</span>
									))}
								</p>
							</div>
							<div>
								<div>
									<a href="https://tiki.vn/do-choi-me-be/c2549">
										Th???c Ph???m T????i S???ng
									</a>
								</div>
								<p
									style={{
										fontSize: "12px",
										lineHeight: "16px",
									}}
								>
									{freshFood.map((item, index) => (
										<span key={index}>
											<Link to={item.path}>
												{item.display}
											</Link>
											<>
												{item.display ===
												"Ch??m s??c nh?? c???a" ? (
													""
												) : (
													<>&nbsp;/&nbsp;</>
												)}
											</>
										</span>
									))}
								</p>
							</div>
							<div>
								<div>
									<a href="https://tiki.vn/do-choi-me-be/c2549">
										??i???n Tho???i - M??y T??nh B???ng
									</a>
								</div>
								<p
									style={{
										fontSize: "12px",
										lineHeight: "16px",
									}}
								>
									{telephoneIpad.map((item, index) => (
										<span key={index}>
											<Link to={item.path}>
												{item.display}
											</Link>
											<>
												{item.display ===
												"M??y t??nh b???ng" ? (
													""
												) : (
													<>&nbsp;/&nbsp;</>
												)}
											</>
										</span>
									))}
								</p>
							</div>
							<div>
								<div>
									<a href="https://tiki.vn/do-choi-me-be/c2549">
										L??m ?????p - S???c Kh???e
									</a>
								</div>
								<p
									style={{
										fontSize: "12px",
										lineHeight: "16px",
									}}
								>
									{healthBeauty.map((item, index) => (
										<span key={index}>
											<Link to={item.path}>
												{item.display}
											</Link>
											<>
												{item.display ===
												"D?????c m??? ph???m" ? (
													""
												) : (
													<>&nbsp;/&nbsp;</>
												)}
											</>
										</span>
									))}
								</p>
							</div>
							<div>
								<div>
									<a href="https://tiki.vn/do-choi-me-be/c2549">
										L??m ?????p - S???c Kh???e
									</a>
								</div>
								<p
									style={{
										fontSize: "12px",
										lineHeight: "16px",
									}}
								>
									{appliancesElectric.map((item, index) => (
										<span key={index}>
											<Link to={item.path}>
												{item.display}
											</Link>
											<>
												{item.display ===
												"Thi???t b??? gia ????nh" ? (
													""
												) : (
													<>&nbsp;/&nbsp;</>
												)}
											</>
										</span>
									))}
								</p>
							</div>
						</div>
						<div className={cx("tiki__column")}>
							<div>
								<div>
									<a href="https://tiki.vn/do-choi-me-be/c2549">
										Th???i trang n???
									</a>
								</div>
								<p
									style={{
										fontSize: "12px",
										lineHeight: "16px",
									}}
								>
									{womenFashion.map((item, index) => (
										<span key={index}>
											<Link to={item.path}>
												{item.display}
											</Link>
											<>
												{item.display ===
												"Th???i trang trung ni??n" ? (
													""
												) : (
													<>&nbsp;/&nbsp;</>
												)}
											</>
										</span>
									))}
								</p>
							</div>
							<div>
								<div>
									<a href="https://tiki.vn/do-choi-me-be/c2549">
										Th???i trang nam
									</a>
								</div>
								<p
									style={{
										fontSize: "12px",
										lineHeight: "16px",
									}}
								>
									{menFashion.map((item, index) => (
										<span key={index}>
											<Link to={item.path}>
												{item.display}
											</Link>
											<>
												{item.display ===
												"Qu???n ??o nam k??ch c??? l???n" ? (
													""
												) : (
													<>&nbsp;/&nbsp;</>
												)}
											</>
										</span>
									))}
								</p>
							</div>
							<div>
								<div>
									<a href="https://tiki.vn/do-choi-me-be/c2549">
										Gi??y - D??p n???
									</a>
								</div>
								<p
									style={{
										fontSize: "12px",
										lineHeight: "16px",
									}}
								>
									{womenShoes.map((item, index) => (
										<span key={index}>
											<Link to={item.path}>
												{item.display}
											</Link>
											<>
												{item.display ===
												"Gi??y D??? xu???ng n???" ? (
													""
												) : (
													<>&nbsp;/&nbsp;</>
												)}
											</>
										</span>
									))}
								</p>
							</div>
							<div>
								<div>
									<a href="https://tiki.vn/do-choi-me-be/c2549">
										Gi??y - D??p n???
									</a>
								</div>
								<p
									style={{
										fontSize: "12px",
										lineHeight: "16px",
									}}
								>
									{menShoes.map((item, index) => (
										<span key={index}>
											<Link to={item.path}>
												{item.display}
											</Link>
											<>
												{item.display ===
												"Gi??y D??? xu???ng n???" ? (
													""
												) : (
													<>&nbsp;/&nbsp;</>
												)}
											</>
										</span>
									))}
								</p>
							</div>
							<div>
								<div>
									<a href="https://tiki.vn/do-choi-me-be/c2549">
										T??i th???i trang n???
									</a>
								</div>
								<p
									style={{
										fontSize: "12px",
										lineHeight: "16px",
									}}
								>
									{womenHandbag.map((item, index) => (
										<span key={index}>
											<Link to={item.path}>
												{item.display}
											</Link>
											<>
												{item.display ===
												"Ph??? ki???n t??i" ? (
													""
												) : (
													<>&nbsp;/&nbsp;</>
												)}
											</>
										</span>
									))}
								</p>
							</div>
							<div>
								<div>
									<a href="https://tiki.vn/do-choi-me-be/c2549">
										T??i th???i trang nam
									</a>
								</div>
								<p
									style={{
										fontSize: "12px",
										lineHeight: "16px",
									}}
								>
									{menHandbag.map((item, index) => (
										<span key={index}>
											<Link to={item.path}>
												{item.display}
											</Link>
											<>
												{item.display ===
												"T??i bao t???, t??i ??eo b???ng" ? (
													""
												) : (
													<>&nbsp;/&nbsp;</>
												)}
											</>
										</span>
									))}
								</p>
							</div>
						</div>
						<div className={cx("tiki__column")}>
							<div>
								<div>
									<a href="https://tiki.vn/do-choi-me-be/c2549">
										Balo v?? vali
									</a>
								</div>
								<p
									style={{
										fontSize: "12px",
										lineHeight: "16px",
									}}
								>
									{backpackSuitcase.map((item, index) => (
										<span key={index}>
											<Link to={item.path}>
												{item.display}
											</Link>
											<>
												{item.display ===
												"Vali, ph??? ki??n vali" ? (
													""
												) : (
													<>&nbsp;/&nbsp;</>
												)}
											</>
										</span>
									))}
								</p>
							</div>
							<div>
								<div>
									<a href="https://tiki.vn/do-choi-me-be/c2549">
										Ph??? ki???n th??? thao
									</a>
								</div>
								<p
									style={{
										fontSize: "12px",
										lineHeight: "16px",
									}}
								>
									{accessoryFashion.map((item, index) => (
										<span key={index}>
											<Link to={item.path}>
												{item.display}
											</Link>
											<>
												{item.display ===
												"Ph??? ki???n th???i trang nam" ? (
													""
												) : (
													<>&nbsp;/&nbsp;</>
												)}
											</>
										</span>
									))}
								</p>
							</div>
							<div>
								<div>
									<a href="https://tiki.vn/do-choi-me-be/c2549">
										?????ng h??? v?? trang s???c
									</a>
								</div>
								<p
									style={{
										fontSize: "12px",
										lineHeight: "16px",
									}}
								>
									{watchJewels.map((item, index) => (
										<span key={index}>
											<Link to={item.path}>
												{item.display}
											</Link>
											<>
												{item.display ===
												"?????ng h??? tr??? em" ? (
													""
												) : (
													<>&nbsp;/&nbsp;</>
												)}
											</>
										</span>
									))}
								</p>
							</div>
							<div>
								<div>
									<a href="https://tiki.vn/do-choi-me-be/c2549">
										Laptop - M??y vi t??nh - Link ki???n
									</a>
								</div>
								<p
									style={{
										fontSize: "12px",
										lineHeight: "16px",
									}}
								>
									{accessoryComputer.map((item, index) => (
										<span key={index}>
											<Link to={item.path}>
												{item.display}
											</Link>
											<>
												{item.display === "Laptop" ? (
													""
												) : (
													<>&nbsp;/&nbsp;</>
												)}
											</>
										</span>
									))}
								</p>
							</div>
							<div>
								<div>
									<a href="https://tiki.vn/do-choi-me-be/c2549">
										Nh?? c???a - ?????i s???n
									</a>
								</div>
								<p
									style={{
										fontSize: "12px",
										lineHeight: "16px",
									}}
								>
									{houseLife.map((item, index) => (
										<span key={index}>
											<Link to={item.path}>
												{item.display}
											</Link>
											<>
												{item.display ===
												"Hoa t????i v?? c??y c???nh" ? (
													""
												) : (
													<>&nbsp;/&nbsp;</>
												)}
											</>
										</span>
									))}
								</p>
							</div>
							<div>
								<div>
									<a href="https://tiki.vn/do-choi-me-be/c2549">
										B??ch h??a Online
									</a>
								</div>
								<p
									style={{
										fontSize: "12px",
										lineHeight: "16px",
									}}
								>
									{departmentStoreOnline.map(
										(item, index) => (
											<span key={index}>
												<Link to={item.path}>
													{item.display}
												</Link>
												<>
													{item.display ===
													"B??? qu?? t???ng" ? (
														""
													) : (
														<>&nbsp;/&nbsp;</>
													)}
												</>
											</span>
										)
									)}
								</p>
							</div>
						</div>
						<div className={cx("tiki__column")}>
							<div>
								<div>
									<a href="https://tiki.vn/do-choi-me-be/c2549">
										H??ng qu???c t???
									</a>
								</div>
								<p
									style={{
										fontSize: "12px",
										lineHeight: "16px",
									}}
								>
									{internationalGoods.map((item, index) => (
										<span key={index}>
											<Link to={item.path}>
												{item.display}
											</Link>
											<>
												{item.display ===
												"??i???n tho???i - M??y t??nh b???ng" ? (
													""
												) : (
													<>&nbsp;/&nbsp;</>
												)}
											</>
										</span>
									))}
								</p>
							</div>
							<div>
								<div>
									<a href="https://tiki.vn/do-choi-me-be/c2549">
										Thi???t b??? s??? - Ph??? ki???n s???
									</a>
								</div>
								<p
									style={{
										fontSize: "12px",
										lineHeight: "16px",
									}}
								>
									{digitalDevice.map((item, index) => (
										<span key={index}>
											<Link to={item.path}>
												{item.display}
											</Link>
											<>
												{item.display ===
												"Thi??t b??? ch??i game v?? ph??? ki???n" ? (
													""
												) : (
													<>&nbsp;/&nbsp;</>
												)}
											</>
										</span>
									))}
								</p>
							</div>
							<div>
								<div>
									<a href="https://tiki.vn/do-choi-me-be/c2549">
										Voucher - D???ch v???
									</a>
								</div>
								<p
									style={{
										fontSize: "12px",
										lineHeight: "16px",
									}}
								>
									{voucherService.map((item, index) => (
										<span key={index}>
											<Link to={item.path}>
												{item.display}
											</Link>
											<>
												{item.display ===
												"Sim s??? - th??? c??o - th??? game" ? (
													""
												) : (
													<>&nbsp;/&nbsp;</>
												)}
											</>
										</span>
									))}
								</p>
							</div>
							<div>
								<div>
									<a href="https://tiki.vn/do-choi-me-be/c2549">
										?? t?? - Xe m??y - Xe ?????p
									</a>
								</div>
								<p
									style={{
										fontSize: "12px",
										lineHeight: "16px",
									}}
								>
									{carMotorCycleBicycle.map((item, index) => (
										<span key={index}>
											<Link to={item.path}>
												{item.display}
											</Link>
											<>
												{item.display ===
												"D???ch v??? , l???p ?????t" ? (
													""
												) : (
													<>&nbsp;/&nbsp;</>
												)}
											</>
										</span>
									))}
								</p>
							</div>
							<div>
								<div>
									<a href="https://tiki.vn/do-choi-me-be/c2549">
										Nh?? s??ch tiki
									</a>
								</div>
								<p
									style={{
										fontSize: "12px",
										lineHeight: "16px",
									}}
								>
									{bookStoreTiki.map((item, index) => (
										<span key={index}>
											<Link to={item.path}>
												{item.display}
											</Link>
											<>
												{item.display ===
												"English Books" ? (
													""
												) : (
													<>&nbsp;/&nbsp;</>
												)}
											</>
										</span>
									))}
								</p>
							</div>
						</div>
						<div className={cx("tiki__column")}>
							<div>
								<div>
									<a href="https://tiki.vn/do-choi-me-be/c2549">
										??i???n t??? - ??i???n lanh
									</a>
								</div>
								<p
									style={{
										fontSize: "12px",
										lineHeight: "16px",
									}}
								>
									{electronicRefrigeration.map(
										(item, index) => (
											<span key={index}>
												<Link to={item.path}>
													{item.display}
												</Link>
												<>
													{item.display ===
													"T??? ?????p r?????u" ? (
														""
													) : (
														<>&nbsp;/&nbsp;</>
													)}
												</>
											</span>
										)
									)}
								</p>
							</div>
							<div>
								<div>
									<a href="https://tiki.vn/do-choi-me-be/c2549">
										Th??? thao - D?? ngo???i
									</a>
								</div>
								<p
									style={{
										fontSize: "12px",
										lineHeight: "16px",
									}}
								>
									{sportPicnic.map((item, index) => (
										<span key={index}>
											<Link to={item.path}>
												{item.display}
											</Link>
											<>
												{item.display ===
												"D???ng c??? leo n??i" ? (
													""
												) : (
													<>&nbsp;/&nbsp;</>
												)}
											</>
										</span>
									))}
								</p>
							</div>
							<div>
								<div>
									<a href="https://tiki.vn/do-choi-me-be/c2549">
										M??y ???nh - M??y quay phim
									</a>
								</div>
								<p
									style={{
										fontSize: "12px",
										lineHeight: "16px",
									}}
								>
									{camera.map((item, index) => (
										<span key={index}>
											<Link to={item.path}>
												{item.display}
											</Link>
											<>
												{item.display === "M??y ???nh" ? (
													""
												) : (
													<>&nbsp;/&nbsp;</>
												)}
											</>
										</span>
									))}
								</p>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
