// La función a testear en la kata
export const chop = (val, array) => {
	if (array.length === 0) return -1;

	let index = -1;

	for (let i in array) {
		if (array[i] === val) {
			index = i;
			break;
		}
	}

	return parseInt(index);
};