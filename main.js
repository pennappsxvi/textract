var textract = require('textract');

textract.fromFileWithPath("./Thing.pptx", function( error, text ) {
	console.log(text.split("~"));
})