// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next";
import { getAllCountries } from "../../lib/getAllCountries";

export default async function getAllCountriesHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const allCountries = await getAllCountries();
  return res.send(allCountries);
}
