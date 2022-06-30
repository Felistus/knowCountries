import type { NextApiRequest, NextApiResponse } from "next";
import { getCountryByRegion } from "../../lib/getCountryByRegion";

export default async function getCountryByRegionHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { region } = req.query;
  const country = await getCountryByRegion(region as string);
  return res.send(country);
}
