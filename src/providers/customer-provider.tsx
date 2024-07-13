'use client'

import React, { createContext, useContext } from 'react'

interface CustomerContextProps {
  subdomain: string
}

export const CustomerContext = createContext<CustomerContextProps>(
  null as unknown as CustomerContextProps
)

export default function CustomerProvider({
  subdomain,
  children
}: {
  subdomain: string
  children: React.ReactNode
}) {
  return (
    <CustomerContext.Provider value={{ subdomain }}>
      {children}
    </CustomerContext.Provider>
  )
}

export const useCustomer = () => {
  return useContext(CustomerContext)
}
