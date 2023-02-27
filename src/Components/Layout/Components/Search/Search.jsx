import React, { useState, useEffect, useRef, useCallback } from "react";
import className from "classnames/bind";
import styles from "./Search.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCircleXmark,
	faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import Wrapper from "../Wrapper/Wrapper";
import { fakeAPISearch } from "../faleApiSearch/faleApiSearch";
import ProductItem from "../ProductItem/ProductItem";
import Button from "~/Components/UI/Button/Button";
import { useDebouced } from "~/Components/hooks/useDebouced";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectAllDealHot } from "~/Components/store/DealHot/DealHotSlice";
const cx = className.bind(styles);

const Search = () => {
	// const dealhot = useSelector(selectAllDealHot);
	// console.log(dealhot);
	const searchInputRef = useRef();
	const [searchResult, setSearchResult] = useState([]);
	const [searchShow, setSearchShow] = useState(false);
	const [searchValue, setSearchValue] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const debouced = useDebouced(searchValue, 500);

	const enteredSearchOnchangeHandler = (e) => {
		setSearchValue(e.target.value);
	};

	const clearSearchValueHandler = () => {
		setSearchValue("");
		searchInputRef.current.focus();
		setSearchResult([]);
	};

	const onFocusSearchHandler = () => {
		setSearchShow(true);
	};
	const onHideResultSearchHandler = () => {
		setSearchShow(false);
	};

	useEffect(() => {
		const fetchApi = async () => {
			if (!debouced.trim()) {
				setSearchResult([]);
				return;
			}
			try {
				let res = await axios.get(
					`https://be-weld.vercel.app/v1/dealhot/search?q=${encodeURIComponent(
						debouced
					)}`
				);

				setSearchResult(res.data);
				setIsLoading(false);
			} catch (error) {
				console.log(error);
			}
		};
		fetchApi();
	}, [debouced]);

	return (
		<Tippy
			interactive
			visible={searchShow && searchValue && searchResult.length > 0}
			placement="bottom-start"
			arrow={true}
			render={(attrs) => {
				return (
					<div className={cx("search__box")} tabIndex="-1" {...attrs}>
						<Wrapper>
							<h4 className={cx("search__box__title")}>
								Sản Phẩm
							</h4>
							{searchResult &&
								searchResult.length > 0 &&
								searchResult.map((data) => (
									<ProductItem
										data={data}
										key={data._id}
										setSearchShow={setSearchShow}
									/>
								))}
						</Wrapper>
					</div>
				);
			}}
			onClickOutside={onHideResultSearchHandler}
		>
			<div className={cx("search")}>
				<input
					ref={searchInputRef}
					type="text"
					placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn ..."
					value={searchValue}
					spellCheck={false}
					onChange={enteredSearchOnchangeHandler}
					onFocus={onFocusSearchHandler}
				/>

				{!!searchValue && (
					<Button
						className={cx("search__clear")}
						onClick={clearSearchValueHandler}
					>
						xóa
					</Button>
				)}

				<Button small className={cx("search__btn")}>
					<span className={cx("fyingGlass")}>
						<FontAwesomeIcon icon={faMagnifyingGlass} />
					</span>
					<span>Tìm kiếm</span>
				</Button>
			</div>
		</Tippy>
	);
};

export default Search;
