import { toast } from "react-toastify";
export function Valid(str) {
	if (typeof str != "string") {
		toast.error("Vui Lòng Nhập Lại Cho Đúng Thành Phố");
		return;
	} // we only process strings!
	return (
		!isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
		!isNaN(parseFloat(str))
	); // ...and ensure strings of whitespace fail
}
