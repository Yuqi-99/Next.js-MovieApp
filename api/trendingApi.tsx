import api from "./api";
import { ApiRequestConfig } from "../type/api-type";

const MAIN_URL = "/trending";
const API_KEY = process.env.NEXT_PUBLIC_KEY_V3;

export const getTrending = (config: ApiRequestConfig = {}) =>
  api
    .get(
      `${MAIN_URL}/movie/day?api_key=${API_KEY}`,
      config
    )
    .then((res) => res.data);

export const getTVTrending = (config: ApiRequestConfig = {}) =>
    api
      .get(
        `${MAIN_URL}/tv/day?api_key=${API_KEY}`,
        config
      )
      .then((res) => res.data);
