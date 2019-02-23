const context = require("aws-lambda-mock-context");
var expect = require("chai").expect;

var Alexa = require("ask-sdk-core");
var ui = require("ask-sdk-model");
const LavinaHelloWorldIntentHandler = require('../src/handlers/lavinaHelloWorldIntentHandler');
const helloWorldData = require('./data/helloWorld');
const ctx = context();

describe("Testing the LavinaHelloWorldIntentHandler", function(){
	this.timeout(5000);

	before(function(){
		
	});

	describe("Is the response correct", function(){
		it("should have response", function(done){
			const skill = Alexa.SkillBuilders.custom()
                    .addRequestHandlers(LavinaHelloWorldIntentHandler)
                    .create();
            skill.invoke(helloWorldData.request)
	            .then(responseEnvelope => {
	            	console.log((responseEnvelope.response.outputSpeech).ssml);
	            	expect((responseEnvelope.response.outputSpeech).ssml).equal('<speak>Hi Lavina</speak>');
	            	done();
	            })
	            .catch(err => {
	            	console.log(err);
	            })
        })
		.timeout(10000);
	});
})