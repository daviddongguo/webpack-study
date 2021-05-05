exports.handler = function (event, context, callback) {
	const body = {};
	if (event.body) {
		body = JSON.parse(event.body);
	}

	if ((body.password = '123')) {
		callback(null, {
			stausCode: 200,
			body: `password(${body.password}) is correct`,
		});
	}
	callback(null, {
		stausCode: 401,
		body: `password(${body.password}) is wrong`,
	});
};
