import React from 'react'
import ComponentsAligner from '../../components/aligner/ComponentsAligner'
import Pagination from '../../components/core/Pagination'

function CompanyList() {

  const products = Array.from({ length: 30 }).map((_, index) => ({
    "symbol": "IBM",
    "name": "International Business Machines",
    "exchange": "NYSE",
    "currency": "USD",
    "country": "USA",
    "sector": "TECHNOLOGY",
    "industry": "COMPUTER & OFFICE EQUIPMENT",
    "marketCapitalization": "175061631000",
    "pERatio": "23.43",
    "dividendYield": "0.0348",
    "revenueTTM": "61860000000",
    "analystTargetPrice": "188.24",
    "latestQuarter": "2023-12-31",
    "s52WeekHigh": "199.18",
    "s52WeekLow": "116.36",
}));

  return (
    <>
      <ComponentsAligner
        title={'Stock Market Company List'}
        navLink={'/stockmarket/company/view'}
        products={products}
        bottomCardComponent={<Pagination />}
      />
    </>
  )
}

export default CompanyList