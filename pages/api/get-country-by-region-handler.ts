import type { NextApiRequest, NextApiResponse } from "next";
import { getCountryByRegion } from "../../lib/getCountryByRegion";

export default async function getCountryByRegionHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { region } = req.query;
  try {
    const country = await getCountryByRegion(region as string);
    res.status(200).send(country);
  } catch (error: any) {
    res.status(error.response.status).send(error.response.status);
  }
}
