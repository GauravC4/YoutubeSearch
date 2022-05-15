import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  timeout: 1000,
});

instance.defaults.params = {};
instance.defaults.params["key"] = "AIzaSyBcwbOynZiqlowkJDNlZc4hFrJKg47BXS0";
instance.defaults.params["maxResults"] = "10";

export default instance;
