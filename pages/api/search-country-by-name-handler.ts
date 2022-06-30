import type { NextApiRequest, NextApiResponse } from "next";
import { searchByName } from "../../lib/searchCountriesByName";

export default async function searchCountryByNameHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name } = req.query;
  const searchedCountry = await searchByName(name as string);
  return res.send(searchedCountry);
}
