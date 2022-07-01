import axios from "axios";

export const fetchCountries = async () => {
  const data = await axios.get(`/api/get-all-countries-handler`);
  return data;
};

export const searchCountryByName = async (name: string) => {
  const data = await axios.get(
    `/api/search-country-by-name-handler?name=${name}`
  );
  return data;
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
