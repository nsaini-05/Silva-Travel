export interface CityCardData {
    cityName : string,
    cityLabel : string;
    countryCode: string
}

export interface WeatherFormData {
    cityName : string,
    forecastDate : string
}

export interface WeatherData {
    icon : string,
    name : string,
    temprature : string,
    date : string,
    windspeed : string,
    feelsLike : string,
    humidity: string
}