exports.handler = function (event, context, callback) {
	const headers = {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Headers': 'Content-Type',
	};

	if (event.httpMethod !== 'POST') {
		return callback(null, {
			statusCode: 200,
			headers,
			body: 'This was not a POST request',
		});
	}

	const secretContent = `
  <h3>Welcome To The Secret Area</h3>
  <p>Here we can tell you that the sky is <strong>blue</strong>, and two plus two equals four.</p>
  `;

	if (!event.body) {
		callback(null, {
			stausCode: 401,
			body: `nothing is transmited`,
		});
	}

	const body = JSON.parse(event.body);

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
