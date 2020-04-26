import isEmpty from "is-empty";
import isNumber from "is-number";

export default (onChangeHandler) => (e) => {
	const {
		target: { value }
	} = e;
	if (isNumber(value) || isEmpty(value)) {
		onChangeHandler(e);
	}
};
