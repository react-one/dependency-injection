import { useState, useEffect } from "react";
// import axios from "axios";

export default function useFetch(URL) {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => setResponse(json))
      .catch((error) => {
        console.log(error);
      });
    //   or using axios
    //   axios.get(URL)
    //   .then((response) => {
    //     setResponse(response.data);
    //   }, (error) => {
    //     console.log(error);
    //   });
  }, [URL]);
  return response;
}
