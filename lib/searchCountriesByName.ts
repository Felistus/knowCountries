import axios from "axios";

export const searchByName = async (name: string) => {
  if (name) {
    const { data } = await axios.get(
      `https://restcountries.com/v3.1/name/${name}`
    );
    return data;
  } else {
    const { data } = await axios.get("https://restcountries.com/v3.1/all");
    return data;
  }
};
