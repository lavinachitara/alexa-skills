'use strict';
var GoogleMapsAPI = require('googlemaps');
var nconf = require('./configurationService');
var publicConfig = nconf.get('googleMapAPI');
var gmAPI = new GoogleMapsAPI(publicConfig);

/**
 * Invokes google api to get the distance between two cities.
 * @param fromCity
 * @param toCity
 */
function getDistanceFromGoogleAPI(fromCity, toCity){
    return new Promise(((resolve) => {
        var params = {
            origins: fromCity,
            destinations: toCity
        };
        gmAPI.distance(params, (err, result) =>{
            const errorMsg = 'Oops!!!  I\'m sorry. I could not find distance. Please try again';
            if(err){
                //As per the v2 library, it won't allow to reject else it will throw an error in library itself
                resolve(errorMsg);
            }else{
                var distanceTxt = '';
                var elementArr = result.rows !== undefined && result.rows.length && result.rows[0].elements !== undefined?result.rows[0].elements:[];
                if(elementArr.length){
                    var distanceNum = elementArr[0].distance !== undefined && elementArr[0].distance != '' && elementArr[0].distance.text !== undefined && elementArr[0].distance.text != ''?elementArr[0].distance.text:'';
                    distanceTxt = distanceNum != ''?toCity + ' is  '+distanceNum+' from '+fromCity:'';
                }
                if(distanceTxt != '')
                    resolve(distanceTxt);
                else
                    resolve(errorMsg);
            }
        });
    }))

}
exports.getDistance = getDistanceFromGoogleAPI;