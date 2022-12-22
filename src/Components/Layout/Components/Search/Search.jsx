import React, { useState, useEffect, useRef } from "react";
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
const cx = className.bind(styles);

const Search = () => {
	const searchInputRef = useRef();
	const [searchResult, setSearchResult] = useState(fakeAPISearch);
	const [searchShow, setSearchShow] = useState(true);
	const [searchValue, setSearchValue] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [query, setQuery] = useState("");

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

	return (
		<Tippy
			interactive
			visible={searchShow && searchResult.length < 0}
			placement="bottom-start"
			render={(attrs) => {
				return (
					<div className={cx("search__box")} tabIndex="-1" {...attrs}>
						<Wrapper>
							<h4 className={cx("search__box__title")}>
								Sản Phẩm
							</h4>
							{searchResult &&
								searchResult.length > 0 &&
								searchResult
									.filter((product) =>
										product.name
											.toLowerCase()
											.includes(searchValue)
									)
									.map((data) => (
										<ProductItem
											data={data}
											key={data.id}
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
					<button
						className={cx("clear")}
						onClick={clearSearchValueHandler}
					>
						<FontAwesomeIcon icon={faCircleXmark} />
					</button>
				)}

				<button>
					<i>
						<FontAwesomeIcon icon={faMagnifyingGlass} />
					</i>
					<span>Tìm kiếm</span>
				</button>
			</div>
		</Tippy>
	);
};

export default Search;
