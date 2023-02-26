export const InputsLogin = [
	{
		id: "1",
		name: "username",
		type: "text",
		placeholder: "Tên Tài khoản",
		errorMessage:
			"Tên tài khoản bắt buộc từ 3 đến 16 ký tự, không sử dụng ký tự đặc biệt",
		label: "Tên Tài khoản",
		pattern: "^[A-Za-z0-9]{3,16}$",
		required: true,
	},
	{
		id: "2",
		name: "password",
		type: "password",
		placeholder: "Mật Khẩu",
		errorMessage: "Bạn Phải Nhập Mật Khẩu",
		// pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
		label: "Mật Khẩu",
		required: true,
	},
];
