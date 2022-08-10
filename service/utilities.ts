import axios from "axios";

const fetchCountries = async () => {
  const { data } = await axios.get(`/api/get-all-countries-handler`);
  const sortedCities = data.sort((a: any, b: any) => {
    if (a.name.common < b.name.common) return -1;
    if (a.name.common > b.name.common) return 1;
    return 0;
  });
  return sortedCities;
};
export const countriesFetcher = () => fetchCountries();

export const searchCountryByName = async (
  name: string
): Promise<{ data: any; error: any }> => {
  try {
    const data = await axios.get(
      `/api/search-country-by-name-handler?name=${name}`
    );
    return { data, error: null };
  } catch (error: any) {
    return { data: null, error: error.response.data };
  }
};

export const filterByRegion = async (region: string) => {
  const selectedRegion = region.toLowerCase();
  const data = await axios.get(
    `/api/get-country-by-region-handler?region=${selectedRegion}`
  );
  return data;
};

export const searchCountryByFullName = async (name: string) => {
  const data = await axios.get(
    `/api/get-country-by-fullname-handler?name=${name}`
  );
  return data;
};
export const getCountryByFullNameFetcher = (name: string) =>
  searchCountryByFullName(name);
