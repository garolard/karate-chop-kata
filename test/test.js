import { expect } from 'chai';
import { chop } from '../lib/myLibToTest';

describe('chop test', () => {
	it('pass!', () => {
		expectNotContains(3, []);
		expectNotContains(3, [1]);
		expectContains(1, [1], 1);

		expectContains(1, [1, 3, 5], 0);
		expectContains(3, [1, 3, 5], 1);
		expectContains(5, [1, 3, 5], 2);
		expectNotContains(0, [1, 3, 5]);
		expectNotContains(2, [1, 3, 5]);
		expectNotContains(4, [1, 3, 5]);
		expectNotContains(6, [1, 3, 5]);

		expectContains(1, [1, 3, 5, 7], 0);
		expectContains(3, [1, 3, 5, 7], 1);
		expectContains(5, [1, 3, 5, 7], 2);
		expectContains(7, [1, 3, 5, 7], 3);
		expectNotContains(0, [1, 3, 5, 7]);
		expectNotContains(2, [1, 3, 5, 7]);
		expectNotContains(4, [1, 3, 5, 7]);
		expectNotContains(6, [1, 3, 5, 7]);
	});
});

const expectContains = (value, array, index) => {
	expect(chop(value, array)).to.be.equal(index);
};

const expectNotContains = (value, array) => {
	expect(chop(value, array)).to.be.equal(-1);
};