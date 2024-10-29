import * as React from "react";
import { mockWeatherData } from "../data/mockWeather";
import { WeatherCard } from "./WeatherCard";
import { LocationSearch } from "./LocationSearch";

export function WeatherList() {
  const [searchText, setSearchText] = React.useState("");

  const filteredLocations = React.useMemo(() =>
    mockWeatherData.filter(weather =>
      weather.location.toLowerCase().includes(searchText.toLowerCase())
    ),
    [searchText]
  );

  return (
    <flexboxLayout flexDirection="column" className="h-full bg-gray-100">
      <LocationSearch onSearch={setSearchText} />
      <scrollView>
        <stackLayout>
          {filteredLocations.map((weather, index) => (
            <WeatherCard
              key={index}
              weather={weather}
              onTap={() => console.log(`Selected: ${weather.location}`)}
            />
          ))}
          {filteredLocations.length === 0 && (
            <label className="text-center text-gray-500 p-4">
              No locations found
            </label>
          )}
        </stackLayout>
      </scrollView>
    </flexboxLayout>
  );
}