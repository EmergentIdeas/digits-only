require('mocha')
var expect = require('chai').expect
var assert = require('chai').assert
const digitsOnly = require('../index')

describe("a basic test which shows only digits are returned", function() {
	
	it("null test", function() {
		assert.equal(digitsOnly(null), '')
	})

	it("blank string", function() {
		assert.equal(digitsOnly(''), '')
	})

	it("number string", function() {
		assert.equal(digitsOnly('1234'), '1234')
	})

	it("mixed string", function() {
		assert.equal(digitsOnly('a1.2c34b'), '1234')
	})
	
	it("simple int", function() {
		assert.equal(digitsOnly(124), '124')
	})
	
	it("simple float", function() {
		assert.equal(digitsOnly(124.1), '1241')
	})

	it("object", function() {
		assert.equal(digitsOnly({a: 123}), '')
	})

})