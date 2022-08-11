import axios from "axios";

const KEY = "AIzaSyCaavVEmT6T59AwEIaaMBvlqxn2_Fhg9gw";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY,
    },
});
