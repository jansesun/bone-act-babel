'use strict';
var babel = require('babel'),
	bone = require('bone');
module.exports = bone.wrapper(function(buffer, encoding, callback) {
	var option = this.option || {}, result;
	result = babel.transform(buffer.toString());
	callback(null, result.code);
});