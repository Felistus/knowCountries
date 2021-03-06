import axios from "axios";

export const getAllCountries = async (): Promise<{ data: any }> => {
  const { data } = await axios.get("https://restcountries.com/v3.1/all");
  return data;
};
