import { Request, Response } from 'express';
import capitals from '../data/capitals.json';
import { delay } from '../helpers';

export const searchCapitals = async (req: Request, res: Response) : Promise<void> => {
  const query = req.query.q?.toString().toLowerCase();
  if (!query) {
    res.status(400).send('Query parameter "q" is required');
    return
  }

  const results = capitals.filter(capital =>
    capital.capital.toLowerCase().includes(query) ||
    capital.country.toLowerCase().includes(query)
  );

  await delay(1000);

  res.json(results);
};
