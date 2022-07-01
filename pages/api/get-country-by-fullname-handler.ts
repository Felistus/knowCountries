import type { NextApiRequest, NextApiResponse } from "next";
import { getCountryByFullName } from "../../lib/getCountryByFullName";

export default async function getCountryByFullNameHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name } = req.query;
  const searchedCountry = await getCountryByFullName(name as string);
  return res.send(searchedCountry);
}
