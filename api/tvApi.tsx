import api from "./api";
import { ApiRequestConfig } from "../type/api-type";

const MAIN_URL = "/tv";
const API_KEY = process.env.NEXT_PUBLIC_KEY_V3;

export const getPopularTv = (page?: number, config: ApiRequestConfig = {}) =>
  api
    .get(`${MAIN_URL}/popular?api_key=${API_KEY}&page=${page}`, config)
    .then((res) => res.data);

export const getAiringToday = (page?: number, config: ApiRequestConfig = {}) =>
  api
    .get(`${MAIN_URL}/airing_today?api_key=${API_KEY}&page=${page}`, config)
    .then((res) => res.data);

export const getOnAir = (page?: number, config: ApiRequestConfig = {}) =>
  api
    .get(`${MAIN_URL}/on_the_air?api_key=${API_KEY}&page=${page}`, config)
    .then((res) => res.data);

export const getTopRatedTv = (page?: number, config: ApiRequestConfig = {}) =>
  api
    .get(`${MAIN_URL}/top_rated?api_key=${API_KEY}&page=${page}`, config)
    .then((res) => res.data);
