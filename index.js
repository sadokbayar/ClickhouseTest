/* global module */
/* eslint no-undef: "error" */

// Some internal library function


async function getRandomNumber() {
    return 4
}

// Plugin method that runs on plugin load
async function setupPlugin({ config }) {
  console.log('-----------test1---------');
  const ClickHouse = require('@apla/clickhouse');


}

// Plugin method that processes event
async function processEvent(event, { config, cache }) {
	
	
}

// The plugin itself
module.exports = {
    setupPlugin,
    processEvent
}
