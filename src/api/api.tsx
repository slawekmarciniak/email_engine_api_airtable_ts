const baseUrl: string = "https://api.airtable.com/v0";
const apiConfig = {
  subscribers: `${baseUrl}/appiitjRQk15Yc6Va/Table%201`,
  campaigns: `${baseUrl}/app5OxZIkcgEJUvn0/Table%201`,
};
const apiKey: string = "keyyww0OQZOBnRbMM";
const requestConfig = {
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
};
export const getSubscribers = async () => {
  const response = await fetch(apiConfig.subscribers, {
    method: "GET",
    ...requestConfig,
  });
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    console.log(message);
    throw new Error(message);
  }
  const data = await response.json();
  return data.records;
};
export const getCampaigns = async () => {
  const response = await fetch(apiConfig.campaigns, {
    method: "GET",
    ...requestConfig,
  });
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    console.log(message);
    throw new Error(message);
  }
  const data = await response.json();
  return data.records;
};

export const addSubscribers = async (data: object) => {
  const response = await fetch(apiConfig.subscribers, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fields: { ...data, Status: "ok" } }),
  });
  return console.log(response.json());
};

export const addCampaign = async (data: object) => {
  const response = await fetch(apiConfig.campaigns, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ fields: { ...data } }),
  });

  return console.log(response.json());
};
