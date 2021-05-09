import axios from "axios";

const API_KEY = "AIzaSyBuPO-PUoTtGAV12aPJBaebGbyR-vApnps";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 10,
    type: "video",
    key: API_KEY
  }
});
