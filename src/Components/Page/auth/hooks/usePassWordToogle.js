import { icon } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const usePassWordToogle = () => {
	const [visible, setVisible] = useState(false);

	const Icon = (
		<FontAwesomeIcon
			icon={visible ? faEyeSlash : faEye}
			onClick={() => setVisible((visibility) => !visibility)}
			className="icon"
		/>
	);

	const InputType = visible ? "text" : "password";

	return [InputType, Icon];
};

export default usePassWordToogle;
