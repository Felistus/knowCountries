import type { NextApiRequest, NextApiResponse } from "next";
import { searchByName } from "../../lib/searchCountriesByName";

export default async function searchCountryByNameHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name } = req.query;
  try {
    const result = await searchByName(name as string);
    res.status(200).send(result);
  } catch (error: any) {
    res.status(error.response.status).send(error.response.status);
  }
}
