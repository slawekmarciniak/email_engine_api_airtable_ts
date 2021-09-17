import axios from "axios";

// const {
//   REACT_APP_DB_subscribers_ID,
//   REACT_APP_DB_campaigns_ID,
//   REACT_APP_API_KEY,
// } = process.env;

const baseUrl: string = "https://api.airtable.com/v0";
const apiKey: string = "keyyww0OQZOBnRbMM";
const apiConfig = {
  subscribers: `${baseUrl}/appiitjRQk15Yc6Va/Table%201`,
  campaigns: `${baseUrl}/app5OxZIkcgEJUvn0/Table%201`,
};
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

export const addToAirtableDb = async (data: object, db: string) => {
  const db_url =
    db === "subscribers" ? apiConfig.subscribers : apiConfig.campaigns;
  axios
    .post(db_url, { fields: { ...data } }, requestConfig)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
};

export const deleteCampaigne = async (id: string) => {
  axios
    .delete(`${apiConfig.campaigns}/${id}`, requestConfig)
    .then((response) => console.log(response));
};
