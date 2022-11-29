import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "saisuke-tech",
  apiKey: process.env.API_KEY,
});
