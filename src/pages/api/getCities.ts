// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs/promises'

type Data = {
  name: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const data = await fs.readFile(process.cwd() + '/src/pages/api/cities.json', {
    encoding: 'utf-8'
  })
  const jsonData = JSON.parse(data)

  res.status(200).json(jsonData)
}
