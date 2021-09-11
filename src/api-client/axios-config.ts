import axios from "axios";

import { BASE_API_URL } from "./api-constants";

export const axiosApp = axios.create({ baseURL: BASE_API_URL });
