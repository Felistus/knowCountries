import axios from "axios";

export const fetchCountries = async (): Promise<{ data: any }> => {
  try {
    const { data } = await axios.get("https://restcountries.com/v2/all");
    return { data };
  } catch (error: any) {
    return error;
  }
};
