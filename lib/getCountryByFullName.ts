import axios from "axios";

export const getCountryByFullName = async (
  name: string
): Promise<{ data: any }> => {
  try {
    const { data } = await axios.get(
      `https://restcountries.com/v3.1/name/${name}?fullText=true`
    );
    return data;
  } catch (error: any) {
    return error;
  }
};
