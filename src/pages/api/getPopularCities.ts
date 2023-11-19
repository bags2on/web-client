// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  error: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data | Buffer>) {
  try {
    const remoteData = await fetch(process.env.NEXT_PUBLIC_DELIVERY_HOST + '/popular-cities')
    const rawBytes = await remoteData.arrayBuffer()
    res.status(200).send(Buffer.from(rawBytes))
  } catch (error) {
    res.status(500).json({ error: 'delivery service not respond' })
  }
}
