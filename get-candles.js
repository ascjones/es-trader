var http = require('http');

var url = 'http://api-sandbox.oanda.com/v1/instruments/EUR_USD/candles?count=24&granularity=H1&candleFormat=BAV';

http.get(url, function(res) {
	var body = '';

	res.on('data', function(chunk) {
		body += chunk;
	});

	res.on('end', function() {
    	var json = JSON.parse(body)
    	console.log("Got response: " + body);
	});
}).on('error', function(e) {
	console.log("Got error: " + e.message);
});;
