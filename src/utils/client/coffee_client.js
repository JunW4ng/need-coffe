import axios from "axios";

const getCoffee = async (isHotOrIced) => {
  const { data } = await axios.get(
    `https://api.sampleapis.com/coffee/${isHotOrIced}`
  );
  return data;
};

export default getCoffee;
