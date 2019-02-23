'use strict';
var nconf = require('../../src/services/configurationService');
var helloWorld = {};

helloWorld.request = {
  "version": "1.0",
  "session": {
    "new": true,
    "sessionId": "amzn1.echo-api.session.9a128a9d-7d6d-4295-8f21-04446d0d7e66",
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
    "requestId": "amzn1.echo-api.request.c329f83f-0e1a-4d7e-a7ae-91b365da76e1",
    "timestamp": "2019-02-23T02:56:47Z",
    "locale": "en-US",
    "intent": {
      "name": "LavinaHelloWorldIntent",
      "confirmationStatus": "NONE"
    },
    "dialogState": "STARTED"
  }
};

module.exports = helloWorld;