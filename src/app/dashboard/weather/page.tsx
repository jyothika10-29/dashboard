
"use client";

import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2 } from "lucide-react"; 

const API_KEY = "5a30ea4db806d81732d7177d007fb58c"; 
const CITY_NAME = "Bengaluru"; 

export default function WeatherPage() {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}&units=metric`
        );
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch weather data.");
        }

        setWeatherData(data);
        setError(null);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return (
      <Card className="w-full max-w-lg mx-auto flex items-center justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="w-full max-w-lg mx-auto p-6">
        <CardContent className="text-center text-red-500">
          <p>{error}</p>
          <p className="text-sm text-muted-foreground mt-2">
            Please check your API key or city name.
          </p>
        </CardContent>
      </Card>
    );
  }

  if (!weatherData || !weatherData.main || !weatherData.weather) {
    return (
      <Card className="w-full max-w-lg mx-auto p-6">
        <CardContent className="text-center text-muted-foreground">
          <p>No valid weather data available.</p>
          <pre className="text-xs text-left mt-4 bg-muted p-2 rounded">
            {JSON.stringify(weatherData, null, 2)}
          </pre>
        </CardContent>
      </Card>
    );
  }

  const main = weatherData.main;
  const weather = weatherData.weather;
  const temperature = Math.round(main.temp);
  const description = weather[0].description;
  const humidity = main.humidity;

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle>Current Weather in {CITY_NAME}</CardTitle>
        <CardDescription>Real-time details for your location.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-6xl font-bold">{temperature}°C</h2>
          <span className="text-4xl">
            {weather[0].main === "Clouds" && "☁️"}
            {weather[0].main === "Rain" && "🌧️"}
            {weather[0].main === "Clear" && "☀️"}
            {weather[0].main === "Thunderstorm" && "⛈️"}
            {weather[0].main === "Drizzle" && "🌧️"}
            {weather[0].main === "Snow" && "❄️"}
            {weather[0].main === "Mist" && "🌫️"}
          </span>
        </div>
        <div className="text-muted-foreground">
          <p className="capitalize">{description}</p>
          <p>Humidity: {humidity}%</p>
        </div>
      </CardContent>
    </Card>
  );
}
