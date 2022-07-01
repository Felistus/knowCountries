// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getAllCountries } from "../../lib/getAllCountries";

export default async function getAllCountriesHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const result = await getAllCountries();
    res.status(200).send(result);
  } catch (err) {
    res.status(500).json({ error: "failed to load data" });
  }
}
