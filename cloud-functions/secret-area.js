exports.handler = function (event, context, callback) {
	callback(null, {
		stausCode: 200,
		body: 'Welcome to the super secret area',
	});
};
