import type { NextApiRequest, NextApiResponse } from 'next'

type RequestData = {
  city_id: string
  provider: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // TODO: re-think
    // maybe use "no body" request https://nextjs.org/docs/pages/building-your-application/routing/api-routes#request-helpers
    const { city_id, provider }: RequestData = JSON.parse(req.body)

    if (!city_id || !provider) {
      res.status(500).json({ message: 'city_id or provider are not specified' })
      return
    }

    const params = new URLSearchParams({
      city_id,
      provider
    })

    const remoteData = await fetch(process.env.NEXT_PUBLIC_DELIVERY_HOST + '/warehouses?' + params)
    const rawBytes = await remoteData.arrayBuffer()

    res.status(200).send(Buffer.from(rawBytes))
  } catch (error) {
    res.status(500).json({ message: 'warehouses service not respond' })
  }
}
