'use client'

import { useEffect, useState } from 'react'
import { useCustomer } from '@/providers/customer-provider'
import { getOverview } from '@/db/overview'

export default function PageFrame() {
  const [overview, setOverview] = useState({})
  const { subdomain } = useCustomer()

  useEffect(() => {
    async function getData() {
      const response = await getOverview(subdomain)
      console.log('overview', response)
    }

    getData()
  }, [])

  return <div>Testing PAGE FRAME: subdomain {subdomain}</div>
}
