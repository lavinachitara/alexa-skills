'use strict';
var nconf = require('../../src/services/configurationService');
var getDistance = {};

getDistance.request = {
	"version": "1.0",
	"session": {
		"new": true,
		"sessionId": "amzn1.echo-api.session.520b2d74-3787-4133-a9fe-19b9ef2951f5",
		"application": {
			"applicationId": nconf.get('applicationId')
		},
		"user": {
			"userId": nconf.get('userId')
		}
	},
	"context": {
		"System": {
			"application": {
				"applicationId": nconf.get('applicationId')
			},
			"user": {
				"userId": nconf.get('userId')
			},
			"device": {
				"deviceId": "amzn1.ask.device.AEU2ABKAPS7Q7EFRMVLGLVMNIBEZ75UKZQLV7RIT6AXY7YJHOVVWWAKAGHPQI2BGWCGVX2D7EY5ISQZK3IVM4OS32NNJQLLLVTUF7IHTAJLTMAHZIA2KADL2DOGWOWWN7UVBJIQWBZ3MLKGH5WFOQAVAZ3UYZGLEVRSYBIOQ2NRNR4FPP65U6",
				"supportedInterfaces": {}
			},
			"apiEndpoint": nconf.get('apiEndpoint'),
			"apiAccessToken": nconf.get('apiAccessToken')
		},
		"Viewport": {
			"experiences": [
				{
					"arcMinuteWidth": 246,
					"arcMinuteHeight": 144,
					"canRotate": false,
					"canResize": false
				}
			],
			"shape": "RECTANGLE",
			"pixelWidth": 1024,
			"pixelHeight": 600,
			"dpi": 160,
			"currentPixelWidth": 1024,
			"currentPixelHeight": 600,
			"touch": [
				"SINGLE"
			]
		}
	},
	"request": {
		"type": "IntentRequest",
		"requestId": "amzn1.echo-api.request.44152f51-0699-4d7d-98b0-aba72e0555a7",
		"timestamp": "2019-02-23T03:57:29Z",
		"locale": "en-US",
		"intent": {
			"name": "CityDistanceIntent",
			"confirmationStatus": "NONE",
			"slots": {
				"toCity": {
					"name": "toCity",
					"value": "Alabama",
					"confirmationStatus": "NONE",
					"source": "USER"
				},
				"fromCity": {
					"name": "fromCity",
					"value": "Alaska",
					"confirmationStatus": "NONE",
					"source": "USER"
				}
			}
		},
		"dialogState": "COMPLETED"
	}
};

module.exports = getDistance;

