import type { NextApiRequest, NextApiResponse } from "next";
import { getCountryByFullName } from "../../lib/getCountryByFullName";

export default async function getCountryByFullNameHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name } = req.query;

  try {
    const searchedCountry = await getCountryByFullName(name as string);
    res.status(200).send(searchedCountry);
  } catch (err: any) {
    res.status(err.response.status).send(err.response.data);
  }
}
