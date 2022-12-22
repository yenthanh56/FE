import React, { useEffect, useState } from "react";

export const useDebouced = (value, delay) => {
	const [debouceSearch, setDebouceSearch] = useState(value);

	useEffect(() => {
		const clearSearch = setTimeout(() => {
			setDebouceSearch(value);
		}, delay);

		return () => {
			clearTimeout(clearSearch);
		};
	}, [value]);

	return debouceSearch;
};
