import { WeatherData } from '../types/weather';

export const mockWeatherData: WeatherData[] = [
  {
    location: "New York",
    temperature: 22,
    condition: "Partly Cloudy",
    humidity: 65,
    windSpeed: 12,
    icon: "☁️"
  },
  {
    location: "London",
    temperature: 18,
    condition: "Light Rain",
    humidity: 75,
    windSpeed: 15,
    icon: "🌧️"
  },
  {
    location: "Tokyo",
    temperature: 25,
    condition: "Sunny",
    humidity: 60,
    windSpeed: 8,
    icon: "☀️"
  }
];