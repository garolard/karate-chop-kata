// La función a testear en la kata
export const chop = (val, array) => {
	
	if (array.length === 0) return -1;

	if (array.length === 1)
		return array[0] === val ? 0 : -1;	

	return chopWithLimits(val, array, 0, array.length - 1);
};

const chopWithLimits = (val, array, minIndex, maxIndex) => {
	
	// Si el índice superior es menor al índice inferior es que
	// el array no contiene el valor buscado
	if (maxIndex < minIndex) return -1;

	const halfIndex = Math.floor((minIndex + maxIndex) / 2);

	if (array[halfIndex] === val) {
		return halfIndex;
	} else if (array[halfIndex] < val) {
		return chopWithLimits(val, array, halfIndex + 1, maxIndex);
	} else {
		return chopWithLimits(val, array, minIndex, halfIndex - 1);
	}
};