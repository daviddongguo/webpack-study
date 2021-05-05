exports.handler = function (event, context, callback) {
	const secretContent = (
		<div>
			<h1>Secret Content</h1>
			<p>hi, there!</p>
		</div>
	);

	let body = {};
	if (event.body) {
		body = JSON.parse(event.body);
	}

	if (body.password === '123') {
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
