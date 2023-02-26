import Cookies from "js-cookie";

const SetCookie = (cookiename, token) => {
	Cookies.set(cookiename, token, {
		expires: 1,
		secure: true,
		sameSite: true,
		path: "/",
	});
};

export default SetCookie;
