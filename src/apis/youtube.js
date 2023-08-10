import axios from "axios";

// const KEY = "AIzaSyCaavVEmT6T59AwEIaaMBvlqxn2_Fhg9gw";
const KEY = import.meta.env.API_KEY;
console.log( "key -->> ", KEY);

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY,
    },
});
