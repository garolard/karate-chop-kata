// La función a testear en la kata
export const chop = (val, array, min, max) => {
	
	if (array.length === 0) return -1;

	if (array.length === 1)
		return array[0] === val ? 0 : -1;	

	if (max < min) return -1;

	// Si JS no fuese una mierda rara podría declarar minIndex y maxIndex así
	// minIndex = min || 0
	// maxIndex = max || array.length - 1
	// Pero en esas operaciones JS evalua el 0 como false
	// así que si max === 0 siempre se va a quedar con el lado derecho
	const minIndex = min === undefined ? 0 : min;
	const maxIndex = max === undefined ? array.length - 1 : max;
	const halfIndex = Math.floor((minIndex + maxIndex) / 2);

	if (array[halfIndex] === val) {
		return halfIndex;
	} else if (array[halfIndex] < val) {
		return chop(val, array, halfIndex + 1, maxIndex);
	} else {
		return chop(val, array, minIndex, halfIndex - 1);
	}
};