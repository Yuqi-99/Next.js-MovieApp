import api from "./api";
import { ApiRequestConfig } from "../type/api-type";

const MAIN_URL = "/genre";
const API_KEY = process.env.NEXT_PUBLIC_KEY_V3;

export const getGenreMovie = (config: ApiRequestConfig = {}) =>
  api
    .get(
      `${MAIN_URL}/movie/list?api_key=${API_KEY}`,
      config
    )
    .then((res) => res.data);

export const getGenreTv = (config: ApiRequestConfig = {}) =>
    api
      .get(
        `${MAIN_URL}/tv/list?api_key=${API_KEY}`,
        config
      )
      .then((res) => res.data);
