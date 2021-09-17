// in progress

import axios from "axios";
import { url } from "inspector";

// const {
//   REACT_APP_DB_subscribers_ID,
//   REACT_APP_DB_campaigns_ID,
//   REACT_APP_API_KEY,
// } = process.env;

const baseUrl: string = "https://api.airtable.com/v0";
const apiConfig = {
  subscribers: `${baseUrl}/appiitjRQk15Yc6Va/Table%201`,
  campaigns: `${baseUrl}/app5OxZIkcgEJUvn0/Table%201`,
};
const apiKey: any = "keyyww0OQZOBnRbMM";
const requestConfig = {
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
};
export const getAirtableData = async (db: string = "subscribers") => {
  const db_url =
    db === "subscribers" ? apiConfig.subscribers : apiConfig.campaigns;
  return axios
    .get(db_url, requestConfig)
    .then((data) => data.data.records)
    .catch((err) => console.log(err));
};

// export const addSubscribers = async (data: object) => {
//   const response = await fetch(apiConfig.subscribers, {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${apiKey}`,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ fields: { ...data, Status: "ok" } }),
//   });
//   return console.log(response.json());
// };

// export const addCampaign = async (data: object) => {
//   const response = await fetch(apiConfig.campaigns, {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${apiKey}`,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ fields: { ...data } }),
//   });
//   return console.log(response.json());
// };

// export const deleteCampaign = async (id: string) => {
//   const response = await fetch(`${apiConfig.campaigns}/${id}`, {
//     method: "DELETE",
//     headers: {
//       Authorization: `Bearer ${apiKey}`,
//       "Content-Type": "application/json",
//     },
//   });

//   return console.log(response.json());
// };
