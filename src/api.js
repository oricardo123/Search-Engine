import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID yd9O_Sz_cb5CupxVepWBicgm0YOi6bl995fAk9n1kcs",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
