/* global module */
/* eslint no-undef: "error" */

// Some internal library function


async function getRandomNumber() {
    return 4
}

// Plugin method that runs on plugin load
async function setupPlugin({ config }) {
    console.log(config.greeting);
	 console.log('test---------');
	const ClickHouse = require('@posthog/clickhouse')
const ch = new ClickHouse({ 'click.54.37.31.13.nip.io', 30851, 'clickhouse_operator', 'clickhouse_operator_password' })
	 console.log('test1---------');
const stream = ch.query("SELECT 1", (err, data) => {})
stream.pipe(process.stdout)

// promise interface, not recommended for selects
const r = await ch.querying("select* from events limit 2");
	
 console.log('test1---------');	
}

// Plugin method that processes event
async function processEvent(event, { config, cache }) {
	
	
}

// The plugin itself
module.exports = {
    setupPlugin,
    processEvent
}
