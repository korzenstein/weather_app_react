{
    "data": {
        "coord": {
            "lon": -104.9847,
            "lat": 39.7392
        },
        "weather": [
            {
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 275.07,
            "feels_like": 275.07,
            "temp_min": 268.88,
            "temp_max": 277.68,
            "pressure": 1029,
            "humidity": 47
        },
        "visibility": 10000,
        "wind": {
            "speed": 0.45,
            "deg": 51,
            "gust": 3.13
        },
        "clouds": {
            "all": 43
        },
        "dt": 1644171866,
        "sys": {
            "type": 2,
            "id": 2004334,
            "country": "US",
            "sunrise": 1644156175,
            "sunset": 1644193510
        },
        "timezone": -25200,
        "id": 5419384,
        "name": "Denver",
        "cod": 200
    },
    "status": 200,
    "statusText": "OK",
    "headers": {
        "content-length": "494",
        "content-type": "application/json; charset=utf-8"
    },
    "config": {
        "transitional": {
            "silentJSONParsing": true,
            "forcedJSONParsing": true,
            "clarifyTimeoutError": false
        },
        "transformRequest": [
            null
        ],
        "transformResponse": [
            null
        ],
        "timeout": 0,
        "xsrfCookieName": "XSRF-TOKEN",
        "xsrfHeaderName": "X-XSRF-TOKEN",
        "maxContentLength": -1,
        "maxBodyLength": -1,
        "headers": {
            "Accept": "application/json, text/plain, */*"
        },
        "method": "get",
        "url": "https://api.openweathermap.org/data/2.5/weather?q=Denver&exclude=alerts&appid=61ff2ff2a45475c0d60c3ba5c2a56d10"
    },
    "request": {}
}