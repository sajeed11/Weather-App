<script setup>
import axios from "axios";
import { useRoute } from "vue-router";
import env from "@/lib/env";

const route = useRoute();

const getWeatherData = async () => {
  try {
    const weatherData = await axios.get(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${route.query.lat}&lon=${route.query.lng}&appid=${env.VUE_APP_OPENWEATHER_API_KEY}&units=imperial`
    );

    // current date and time
    const localDffset = new Date().getTimezoneOffset() * 60000;
    const utc = weatherData.data.current.dt * 1000 + localDffset;
    weatherData.data.currentTime =
      utc + 1000 * weatherData.data.timezone_offset;

    // cal hourly weather offset
    weatherData.data.hourly.forEach((h) => {
      const utc = h.dt * 1000 + localDffset;
      h.currentTime = utc + 1000 * weatherData.data.timezone_offset;
    });

    return weatherData;
  } catch (err) {
    console.log(err);
  }
};

const weatherData = await getWeatherData();
console.log(weatherData);
</script>
<template>
  <div></div>
</template>
