exports.handler = function (event, context, callback) {
	let body = {};
	if (event.body) {
		body = JSON.parse(event.body);
	}

	if ((body.password = '123')) {
		callback(null, {
			stausCode: 200,
			body: `password(${context.name}) is correct`,
		});
	}
	callback(null, {
		stausCode: 400,
		body: `password(${context.name}) is wrong`,
	});
};
