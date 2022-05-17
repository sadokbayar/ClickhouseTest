/* global module */
/* eslint no-undef: "error" */

// Some internal library function
import { ClickHouse } from 'clickhouse'

async function getRandomNumber() {
    return 4
}

// Plugin method that runs on plugin load
async function setupPlugin({ config }) {
    console.log(config.greeting);
	 console.log('test---------');
	
	const clickhouse = new ClickHouse({
	
	url: 'https://click.54.37.31.13.nip.io',
	port: 30851,
	debug: false,
	basicAuth: {
	username: 'clickhouse_operator',
	password: 'clickhouse_operator_password',
	},
	isUseGzip: false,
	trimQuery: false,
	usePost: false,
	format: "json", // "json" || "csv" || "tsv"
	raw: false,
	config: {
		session_id                              : '',
		session_timeout                         : 60,
		output_format_json_quote_64bit_integers : 0,
		enable_http_compression                 : 0,
		database                                : 'posthog',
	},
	
	// This object merge with request params (see request lib docs)
	/* reqParams: {
		...
	}*/
});
	console.log('tttttt');	
	const queries = ['select* from events limit 2'];
console.log('queries='+queries);	
	for(const query of queries) {
		console.log(query);
	const r = await clickhouse.query(query).toPromise();
console.log(r);
	console.log(query, r);
}
	
}

// Plugin method that processes event
async function processEvent(event, { config, cache }) {
	
	
}

// The plugin itself
module.exports = {
    setupPlugin,
    processEvent
}
