export interface CityCardData {
  cityName: string;
  cityLabel: string;
  countryCode: string;
  description?: string;
}

export interface WeatherFormData {
  cityName: string;
  forecastDate: string;
}

export interface WeatherData {
  icon: string;
  name: string;
  temprature: string;
  date: string;
  windspeed: string;
  feelsLike: string;
  humidity: string;
}

export interface WeatherApiResponse {
  data: any;
  date?: string;
  error: string;
  loading: boolean;
}

export interface CoordinatesResponse {
  name: string;
  local_names: {
    [key: string]: string;
  };
  lat: string;
  lon: string;
  country: string;
  state: string;
}

export interface BackendApiResponse {
  data: any;
  error: string;
  loading: boolean;
}
