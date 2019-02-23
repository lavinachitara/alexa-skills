'use strict';
/**
 * This file is used for configuration specific functions.
 */
var nconf = require('nconf');

//Initialize some shims.
Object.entries || require('object.entries').shim();
Object.values || require('object.values').shim();

loadConfigParameters();

module.exports = nconf;
/**
 * Function used to load config file in nconf.
 */
function loadConfigParameters() {
  nconf.argv().env();
  nconf.file('default', __dirname + '/../../config/config.json');
}
