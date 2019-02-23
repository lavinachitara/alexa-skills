const context = require("aws-lambda-mock-context");
var expect = require("chai").expect;
var Alexa = require("ask-sdk-core");
var ui = require("ask-sdk-model");
const cityDistanceIntentHandler = require('../src/handlers/cityDistanceIntentHandler');
const getDistance = require('./data/getDistance');
const ctx = context();

describe("Testing the CityDistanceIntentHandler", function(){
	this.timeout(5000);

	before(function(){
		
	});

    //Negative cases
    describe("Request is invalid ", function(){
        it("If slots are undefined, then should speak for error message", function(done){
            const skill = Alexa.SkillBuilders.custom()
                    .addRequestHandlers(cityDistanceIntentHandler)
                    .create();
            var distanceData = JSON.parse(JSON.stringify(getDistance.request));
            distanceData.request.intent.slots = undefined;
            skill.invoke(distanceData)
            .then(responseEnvelope => {
                console.log((responseEnvelope.response.outputSpeech).ssml);
                expect((responseEnvelope.response.outputSpeech).ssml).equal('<speak>Oops!!!  I\'m sorry. I could not find distance Please add from and to cities.</speak>');
                done();
            })
            .catch(err => {
                console.log(err);
            });
        })
        it("If slots are empty, then should speak for error message", function(done){
            const skill = Alexa.SkillBuilders.custom()
                    .addRequestHandlers(cityDistanceIntentHandler)
                    .create();
            var distanceData = JSON.parse(JSON.stringify(getDistance.request));
            distanceData.request.intent.slots = [];
            skill.invoke(distanceData)
            .then(responseEnvelope => {
                console.log((responseEnvelope.response.outputSpeech).ssml);
                expect((responseEnvelope.response.outputSpeech).ssml).equal('<speak>Oops!!!  I\'m sorry. I could not find distance Please add from and to cities.</speak>');
                done();
            })
            .catch(err => {
                console.log(err);
            });
        })
        it("If fromCity is not defined, then should speak for error message ", function(done){
            const skill = Alexa.SkillBuilders.custom()
                    .addRequestHandlers(cityDistanceIntentHandler)
                    .create();
            var distanceData = JSON.parse(JSON.stringify(getDistance.request));
            distanceData.request.intent.slots.fromCity = undefined;
            skill.invoke(distanceData)
            .then(responseEnvelope => {
                console.log((responseEnvelope.response.outputSpeech).ssml);
                expect((responseEnvelope.response.outputSpeech).ssml).equal('<speak>Oops!!!  I\'m sorry. I could not find distance May I know from where you want to go?</speak>');
                done();
            })
            .catch(err => {
                console.log(err);
            });
        })
        it("If fromCity value is empty, then should speak for error message ", function(done){
            const skill = Alexa.SkillBuilders.custom()
                    .addRequestHandlers(cityDistanceIntentHandler)
                    .create();
            var distanceData = JSON.parse(JSON.stringify(getDistance.request));
            distanceData.request.intent.slots.fromCity.value = '';
            skill.invoke(distanceData)
            .then(responseEnvelope => {
                console.log((responseEnvelope.response.outputSpeech).ssml);
                expect((responseEnvelope.response.outputSpeech).ssml).equal('<speak>Oops!!!  I\'m sorry. I could not find distance May I know from where you want to go?</speak>');
                done();
            })
            .catch(err => {
                console.log(err);
            });
        })
        it("If toCity is not defined, then should speak for error message ", function(done){
            const skill = Alexa.SkillBuilders.custom()
                    .addRequestHandlers(cityDistanceIntentHandler)
                    .create();
            var distanceData = JSON.parse(JSON.stringify(getDistance.request));
            distanceData.request.intent.slots.toCity = undefined;
            skill.invoke(distanceData)
            .then(responseEnvelope => {
                console.log((responseEnvelope.response.outputSpeech).ssml);
                expect((responseEnvelope.response.outputSpeech).ssml).equal('<speak>Oops!!!  I\'m sorry. I could not find distance May I know where you want to go?</speak>');
                done();
            })
            .catch(err => {
                console.log(err);
            });
        })
        it("If toCity value is empty, then should speak for error message ", function(done){
            const skill = Alexa.SkillBuilders.custom()
                    .addRequestHandlers(cityDistanceIntentHandler)
                    .create();
            var distanceData = JSON.parse(JSON.stringify(getDistance.request));
            distanceData.request.intent.slots.toCity.value = '';
            skill.invoke(distanceData)
            .then(responseEnvelope => {
                console.log((responseEnvelope.response.outputSpeech).ssml);
                expect((responseEnvelope.response.outputSpeech).ssml).equal('<speak>Oops!!!  I\'m sorry. I could not find distance May I know where you want to go?</speak>');
                done();
            })
            .catch(err => {
                console.log(err);
            });
        })
    });

    //Positive case
	describe("If request is valid ", function(){
		it("should have response in ssml", function(done){
			const skill = Alexa.SkillBuilders.custom()
                    .addRequestHandlers(cityDistanceIntentHandler)
                    .create();
            skill.invoke(getDistance.request)
            .then(responseEnvelope => {
            	console.log((responseEnvelope.response.outputSpeech).ssml);
            	expect((responseEnvelope.response.outputSpeech).ssml).equal('<speak>Alabama is  6,925 km from Alaska</speak>');
            	done();
            })            
            .catch(err => {
                console.log(err);
            });

        })
		.timeout(10000);
	});
})