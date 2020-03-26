const request = require('request');

const forecast = ( latitude,longitude, callback ) => {

const url = 'https://api.darksky.net/forecast/ae85a2f62d830d92fbbed8c9ccfde7f0/' +latitude+ ','  +longitude 
request({url:url,json:true}, (error,response) => {
if(error){
    callback('Unable to connect to server',undefined);
}
else if(response.body.error){
    callback('Unable to find location', undefined);
}
else{
callback(undefined, response.body.currently.summary+" It is currently " + response.body.hourly.data[0].temperature + " degrees out. There is a "+  response.body.currently.precipProbability + " % chance of rain.");
}
})
}
module.exports = forecast


