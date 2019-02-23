'use strict';
/**
 * Handler to test the custome skil LavinaHelloWorldIntent
 * @param handlerInput
 */
const LavinaHelloWorldIntentHandler = {
    canHandle(handlerInput) {
    	return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'LavinaHelloWorldIntent';
    },
    handle(handlerInput) {
        const speechText = 'Hi Lavina';
        return handlerInput.responseBuilder
            .speak(speechText)
            .getResponse();
    }
};
module.exports = LavinaHelloWorldIntentHandler;