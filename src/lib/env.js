import { cleanEnv, str } from "envalid";

const env = cleanEnv(import.meta.env, {
  VUE_APP_MAPBOX_API_KEY: str(),
  VUE_APP_OPENWEATHER_API_KEY: str(),
})

export default env;