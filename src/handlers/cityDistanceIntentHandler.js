'use strict';
var googleAPIService = require('../services/googleAPIService');

/**
 * Handler to find distance between cities
 * @param handlerInput
 */
const CityDistanceIntentHandler = {
    canHandle(handlerInput) {
        //check for intent object
        if(handlerInput === undefined || handlerInput.requestEnvelope === undefined || handlerInput.requestEnvelope.request === undefined || handlerInput.requestEnvelope.request.intent === undefined){
            return false;
        }
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'CityDistanceIntent';
    },
    async handle(handlerInput) {
        var currentIntent, fromCity, toCity;
        var errorMsg = 'Oops!!!  I\'m sorry. I could not find distance';
        var currentIntent = handlerInput.requestEnvelope.request.intent;

        //check for slots are created or not
        if(currentIntent.slots === undefined || currentIntent.slots == ''){
            return handlerInput.responseBuilder.speak(errorMsg + ' Please add from and to cities.').getResponse();
        }

        var slots = currentIntent.slots;
        //check for fromCity is added or not
        if(slots.fromCity === undefined || slots.fromCity.value ===  undefined || slots.fromCity.value == ''){
            return handlerInput.responseBuilder.speak(errorMsg + ' May I know from where you want to go?').getResponse();
        }

        //check for toCity is added or not
        if(slots.toCity === undefined || slots.toCity.value ===  undefined || slots.toCity.value == ''){
            return handlerInput.responseBuilder.speak(errorMsg + ' May I know where you want to go?').getResponse();
        }
        
        var fromCity = slots.fromCity.value;
        var toCity = slots.toCity.value;
        const response = await googleAPIService.getDistance(fromCity, toCity);
        return handlerInput.responseBuilder.speak(response).getResponse();
    }
};
module.exports = CityDistanceIntentHandler;