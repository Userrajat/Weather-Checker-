import * as React from "react";
import { WeatherData } from "../types/weather";

interface WeatherCardProps {
  weather: WeatherData;
  onTap?: () => void;
}

export function WeatherCard({ weather, onTap }: WeatherCardProps) {
  return (
    <stackLayout 
      className="bg-white rounded-lg shadow-md p-4 m-2" 
      onTap={onTap}
    >
      <gridLayout rows="auto, auto" columns="*, auto">
        <label 
          row={0} 
          col={0} 
          className="text-xl font-bold text-gray-800"
        >
          {weather.location}
        </label>
        <label 
          row={0} 
          col={1} 
          className="text-3xl"
        >
          {weather.icon}
        </label>
        <stackLayout row={1} col={0} colSpan={2}>
          <label className="text-3xl font-bold text-blue-500">
            {weather.temperature}°C
          </label>
          <label className="text-gray-600">
            {weather.condition}
          </label>
          <gridLayout columns="*, *" className="mt-2">
            <label col={0} className="text-gray-600">
              💧 {weather.humidity}%
            </label>
            <label col={1} className="text-gray-600">
              💨 {weather.windSpeed} km/h
            </label>
          </gridLayout>
        </stackLayout>
      </gridLayout>
    </stackLayout>
  );
}