const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'https://api.darksky.net/forecast/73f041f7d5976efabb1de59d499c03a4/' + encodeURIComponent(latitude) +','+ encodeURIComponent(longitude) + ''

    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees outside. There is a ' +  body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast