import axios from "axios";

export const getCountryByRegion = async (
  region: string
): Promise<{ data: any }> => {
  try {
    if (region !== "filter by region") {
      const { data } = await axios.get(
        `https://restcountries.com/v3.1/region/${region}`
      );
      return data;
    } else {
      const { data } = await axios.get(`https://restcountries.com/v3.1/all`);
      return data;
    }
  } catch (error: any) {
    return error;
  }
};
