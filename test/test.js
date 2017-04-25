import { expect } from 'chai';
import { doSomething } from '../lib/myLibToTest';

describe('An example test', function () {
	it('pass!', function () {
		expect(doSomething()).to.be.equal('Hello!');
	});
});