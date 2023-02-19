import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./ListDealHot.module.scss";
import { useSelector, useDispatch } from "react-redux";
import {
	deleteDeal,
	getAllDealHot,
	selectAllDealHot,
	selectDetailDealHot,
} from "~/Components/store/DealHot/DealHotSlice";
import Button from "~/Components/UI/Button/Button";
import UpDealhot from "./UpDealhot";
import { useNavigate } from "react-router-dom";
import EditDealhot from "./EditDealHot";

const cx = classNames.bind(styles);

const ListDealHot = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [openAddproduct, setOpenAddproduct] = useState(false);
	const [openEditProduct, setOpenEditProduct] = useState(false);
	const [loading, setLoading] = useState(true);
	const [isError, setIsError] = useState();

	const dataDealHot = useSelector((state) => state.dealhot?.dealhosts);
	// const
	// list product CRUD

	useEffect(() => {
		getAllDealHot(dispatch);
		setLoading(false);
	}, [dispatch]);

	if (loading) {
		return (
			<div style={{ textAlign: "center", color: "#000" }}>
				<p>Loading...</p>
			</div>
		);
	}
	if (isError) {
		return (
			<div style={{ textAlign: "center", color: "red" }}>
				<p>Something went wrong...</p>
			</div>
		);
	}

	const editDealHotHandler = async (id) => {
		if (id && window.confirm("Bạn có chắc muốn chỉnh sửa")) {
			navigate(`/admin/thanhngo/listdealhot/${id}`);
			setOpenEditProduct(true);
		}
	};

	const deleteDealHotHandler = async (id) => {
		if (id && window.confirm("Bạn có chắc muốn xóa")) {
			await deleteDeal(dispatch, id);
			return;
		}
	};

	return (
		<div className={cx("listdealhot")}>
			<Button
				large
				className={cx("addproduct")}
				onClick={() => setOpenAddproduct(true)}
			>
				Thêm Sản Phẩm
			</Button>
			{openAddproduct && (
				<UpDealhot setOpenAddproduct={setOpenAddproduct} />
			)}
			{openEditProduct && (
				<EditDealhot setOpenEditProduct={setOpenEditProduct} />
			)}
			<h3 className={cx("title")}>Nổi Bật</h3>
			<table className={cx("table")}>
				<thead>
					<tr>
						<th>Tên Sản Phẩm</th>
						<th>Giá Mới</th>
						<th>Giá Cũ</th>
						<th>Đánh Giá</th>
						<th>Chi Tiết Sản Phẩm</th>
						<th>Giảm Giá</th>
						<th>Tình Trạng </th>
						<th>Chức Năng</th>
					</tr>
				</thead>
				<tbody>
					{dataDealHot && dataDealHot?.length > 0 ? (
						dataDealHot?.map((item) => (
							<tr key={item?._id}>
								<td>{item?.title}</td>
								<td>{item?.price.toFixed(3)}đ</td>
								<td>{item?.priceOld.toFixed(3)}đ</td>
								<td>{item?.star}</td>
								<td>{item?.description.slice(0, 30)}...</td>
								<td>{item?.percent}</td>
								<td>{item?.titleSell}</td>
								<td>
									<Button
										onClick={() =>
											editDealHotHandler(item?._id)
										}
									>
										Chỉnh Sửa
									</Button>
									<Button
										onClick={() =>
											deleteDealHotHandler(item?._id)
										}
									>
										Xóa
									</Button>
								</td>
							</tr>
						))
					) : (
						<tr>
							<td colSpan={8}>
								<img
									src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATMAAACkCAMAAADMkjkjAAAAWlBMVEX///+vr6+rq6uIiIiFhYWBgYHu7u7i4uKpqann5+fIyMi1tbWjo6OCgoKRkZGxsbH39/fz8/PR0dHs7OzBwcHa2tre3t69vb3U1NSWlpaenp6Tk5N6enp2dnbs4KqUAAAJL0lEQVR4nO2d65ajIAyAC94QasUr9rLv/5oL1msLU6h2KiPfj53TqWcWI4QkJPFwcDgcDofD4XA4HFpQTLJvj8E2KETRt8dgHQTm3x6CdZSw/PYQrCOHpP3ptJo+EQRRhVkKvz0QS6BhnTMAoOBIvz0aK2CtsAAAhOV1+O3R2EGJICSYQPztgVhEHAnFjyH79kCso4JO/ZsSQ+jUvyEZhPHCP0FBscpQ7AHCauFfoHBv+8hyD4CijIGlk3VnUCS2ksepRnNCcqcqFQiZHejDVMtSyBhMndDkhKj9MZ9qLOWuRQGc8SenkxmfaukQwMzuO0sO3EST0svscKgh7mRUoNb+iJALMkkZZBYR0tstFLQLFe9MoUV5pTdJOplFZGrpYfGhQbuKnFOCINI7LGhlFhEwt41LxNmXrctgdKAY1RqXhoBLLH3yJuKm2ZdPFd7XGdGxFWJAFvtff4EatrosTzWujZ7n2C6JUWvVl0Tj2n1tjT+QEipm2672vaVEEJQM6kwzx0CICWm+PQiHw+FwOBwOh8Ph+BjUBRqMWZ6BsT+Ak5kxTmbmOJmZoy2zeMJuz7uL9vYBwOJH9Gr7PAVB0hMkV51juT+ISF9vU/7FD/TidDG+eVP8YJ8r2khmh/MtGEm41HZs1wGoGccPJ2DfC3Z8yPTevnnx/R1XCmjITLIKS746PzEaO5DLDJdlyYggTWVpGFHgBfutFJP7mxVsqiiKiqIIw1RShE4TL9jveeaYbTiDDSo+kmaucIXmjs0fCIfc1lRqvhLfv/zicOwg77SYfJodKq7Qft9CC8G2Cy/AfX7Jl+4h4wqtn4BZ+DaGjmsOwYI7+jxRm60fI8XXnpd0jSPI1EMwJYEmYtt8nXIpxsdUuyMYFNrcEzVFz3O9R+DD5aWQH4ZyH7RQlobkg1WbLphmge95gYYcMGQVPTTbL1NuyMTkeKQIhpst4reJSOL5x9dDSUUYgW1+aXII/qGU+uQla9wB4+7+66toVIK2U4Vm5cb3KH6qDDmu46aHgdbiFGK7t0RhzbadNvyDNYTXcdO1ZcanJGBYLFJ7SxZXctP5XqKxNgUZhNzzjTG0OK4eeMkKbjq3Wc56V1qwa76Eu+k6hScvOGs7++QPdF9j2jPkBzJfN6iUoT/QGZG76b5058/OZ+neQSX3zP9IoqcVacU27Z9rIaaIPE4UBLLlRr3b869Z4p3WHtiW4VatdNvnMpP9vgkk4uFKURUF2BA0ruN1JnmqUGgUScUQBrfnSE6yjjfxWXB7BPyTsaoNN618k+uLZ68i1rdovwblbm4RFjlMV/DbhAm/cCvDhmL/Bn3PmTBd4wRkuZsOfZ2oxleJhjL7GK2QpIIWK3DVNrIhJtXPWgX3L1jspmeBwlzZEGz0PvAKi/OVm57VOWYlbpRKj5sfydYN1ZVlJtx0ZYStTj3vmJYlAefbv3MplS3xt2/R4tGpXmNtCgdbfnhGS//YjDOoKK+3i2S2XS04jV95DxCez1X2+yaAj/MqPv57ajlNvR/m6WZg3WFXAVZ5vrXcTb94sqzJ+Hx70Pe1FdlFwqaNwxhDsorqFW7603zNPNXzwP/m5lxpiYOew7YF1Eq71dl/sq8yXx0abOZfHbdv0XYU0XoeniQyjfVdg8AGB3119E9AJBTL/VUbWeSm4yUCtxhvgcMId5r3BxbcN7dot+6gfwQRd3xzD24scNA/Qpi8e+OR79lhna3PPAJWYV1Q4O02XZ4rtNHlbG6JLiJZz/5z8ffgCm0MgZWBdkqonwQ7tGfviFDr4HLSy0mT62Ut981Grt72Y2BbQ3Uy7FDTfKUixW5mCs2hh+cUmjHElx8KONQ0qtw9hxL99E7HwJkvzqMh+3rBwjNcoXFfyIhk7yZdfTOUmJOZeG+6Ken2j4IdDsdGiACcvZ0EGyucciN+N40jM+ZWTFwrrJqq7e0zKbcPEQBg8oqqWnw2w7ggq0Hn61nWJ2dy/+Xler0YPY3aeHtBk7fete83m90IDcP266iTyJhSVok6ZDDGjnNoLDNgVjMXnwLf51ZacFG7UWWQ+G1Q2+BxEPOBTxogtfc9lpZRhhAXKmK0kxC/eFiNNZx9PDRvyMwoVlGJBgbtwYjvqcwIcdLk3w9P9DuLpG/IbLxvPJdhLwZYH+J+no0Lg0Cu0MYnTkXxifb/eZ/iJqeWYcIFcSpz5iWerzi0ZNyVDxDG6GZy4sTMZTYZeTub0JAG1S83IcUI4xzjchr5q/G8s05d5bonj7nArL/Ahbvpd02QJooEjoKL7NT+0fjkeTddnZYRY4U2Pc4SPStHNV+g7pINhGHCiaCOvrxmgPEZ2K3aOBj65mhADVsQzZ9GWEw/Z3UdafSV/Q2mSRuRourr5I2V2HtNCJrCkokMbvLjgWnFP7Ykj/aTOJmZI+qe+rWpqsicnrS4tdnuiYNSR768IlMEJrvtKlTtrbviMvRFJlx8Ums4FrbGvYvZyfduG9jtv0whkskuuClPfAdVlCdyafoJyfOUuwzSGv+90dyEX9T2Lk9U1QeXZPCdLGh1EOOS4c+Wytee8Di5d3RWrzoi3HghWgtmWQlTxlL44YhYLnLPfq7WK8j5dDozC3QZQ5WQVuXe96tNDrtwRyzthpjhtg35MD9q/lEG+aW0dEpp9gSdvrmr/f6zgxglhWVNQAGcBVBiZUTXKDj0LrQcglEzAOjtP8ra7+UdrVciHsNHBXyOPGd9WK2TLFaH2X4jZVgdUO5DOv0Vn9x6IzTETTNJVz/azas+uKmO6K5SjP0KrHxi/XLpr/hkDCwe3w4TSuaZ6Pgn6OuGKUOSpSHitr+SmR69VA3V/YqP9imkoz7L5c8mLIpi8oW843j2S3G6ishhwxJp2jM2/NFdAINucWZgr3UfxtD03lcpTpW9sx2PUAIJxvwfl4tjQMVEp+pvj8LhcDgcDofD4XA4Ngot4kcnUydpa89gET+cxVdDWbBdXGTBkWMHrdpEzMfEzHx+flvnOK/fmAld3HqagK1MT0Vb767eQ4dTlUnc+ykBuEQiofiN17VIZFYqZWZLw7taeWAxXSr3dG/0RjA3bx+Aztq055U2oerEYFZ3Q1rJvnVmwPeAgj795onYpj0gKgmRVA2QWXPgrCSAyPtVt/wHssR2cHRbW+IAAAAASUVORK5CYII="
									alt="empty"
									className={cx("image_empty")}
								/>
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
};

export default ListDealHot;
