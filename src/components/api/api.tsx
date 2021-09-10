const API_URL: string = 'https://api.airtable.com/v0/appiitjRQk15Yc6Va/Table%201?api_key=';
const API_KEY: string = 'keyyww0OQZOBnRbMM';

export const getSubscribers = async () => {
const response = await fetch(`${API_URL}${API_KEY}`);
if(!response.ok) {
    const message = `An error has occured: ${response.status}`;
    console.log(message);
    throw new Error(message);
}
    const data = await response.json();
    const neededElements = data.records.splice(1, data.records.length - 1)
    return neededElements;

}