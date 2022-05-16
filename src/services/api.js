import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  timeout: 1000,
});

const key_1 = "AIzaSyBcwbOynZiqlowkJDNlZc4hFrJKg47BXS0";
const key_2 = "AIzaSyAbaF84n4ay6fy3_KHAbb3VK46fwAT9-qs";

instance.defaults.params = {};
instance.defaults.params["key"] = key_2;
instance.defaults.params["maxResults"] = "10";

export default instance;
