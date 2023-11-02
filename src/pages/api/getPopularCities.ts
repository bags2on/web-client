// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  error: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    const remoteData = await fetch(process.env.NEXT_PUBLIC_DELIVERY_HOST + '/popular-cities')
    const jsonData = await remoteData.json()
    res.status(200).json(jsonData)
  } catch (error) {
    res.status(500).json({ error: 'delivery service not respond' })
  }
}
