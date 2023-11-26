import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S";
const randomMemeUrl = `https://api.giphy.com/v1/gifs/random?apikey=${API_KEY}`;

const useGif = (tag) => {
  const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?apikey=${API_KEY}&tag=${tag}`;
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState("false");

  async function fetchData(tag) {
    setLoading(true);
    const { data } = await axios.get(tag ? tagMemeUrl : randomMemeUrl);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { gif, loading, fetchData };
};

export default useGif;
