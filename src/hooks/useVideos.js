import { useState, useEffect } from "react";
import youtube from "../api/youtube";

const useVideos = (defaulSearchTerm) => {
  const KEY = "AIzaSyDeizRj5nJ5F6HMMSd_FL5bnbLM1m20d1I";
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaulSearchTerm);
  }, [defaulSearchTerm]);

  const search = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: KEY,
      },
    });

    setVideos(response.data.items);
  };
  return [videos, search];
};

export default useVideos;
