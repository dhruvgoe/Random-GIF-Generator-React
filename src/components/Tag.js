import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY = "kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S";

const Tag = () => {
  const [tag, setTag] = useState("");

  const { gif, loading, fetchData } = useGif(tag);

  function clickHandler() {
    fetchData(tag);
  }

  function changeHandler(event) {
    setTag(event.target.value);
  }

  return (
    <div
      className="w-1/2  bg-blue-500
    rounded-lg border border-black flex flex-col
    items-center gap-y-5 mt-[15px] "
    >
      <h1 className="mt-[15px] text-2xl underline uppercase font-bold">
        Random {tag} GIF
      </h1>

      {loading ? <Spinner /> : <img src={gif} width={450} alt="GIFs" />}

      <input
        className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center"
        onChange={changeHandler}
        value={tag}
        placeholder="Search GIF Here"
      />

      <button
        onClick={clickHandler}
        className="mb-[20px] w-10/12 bg-white text-lg py-2 rounded-lg "
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
