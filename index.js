"use strict";
/**
 * Custom alexa skill handlers
 * @author Lavina Chitara
 * @created 23-02-2019
 * @param fromCity
 * @param toCity
 */
exports.__esModule = true;
var Alexa = require("ask-sdk-core");
var nconf = require('./src/services/configurationService');

const LavinaHelloWorldIntentHandler = require('./src/handlers/lavinaHelloWorldIntentHandler');
const CityDistanceIntentHandler = require('./src/handlers/cityDistanceIntentHandler');

exports.handler = Alexa.SkillBuilders.custom()
                    .addRequestHandlers(LavinaHelloWorldIntentHandler, CityDistanceIntentHandler)
                    .lambda();