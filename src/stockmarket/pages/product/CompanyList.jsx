import React, { useEffect, useState } from 'react'
import ComponentsAligner from '../../components/aligner/ComponentsAligner'
import Pagination from '../../components/core/Pagination'
import CompanyService from '../../services/CompanyService';

function CompanyList() {

  const [data, setData] = useState([]);

  useEffect(()=>{
    init();
  },[])

  async function init(){
    getList();
  }

  async function getList(params = {}){
    params.filter = {isActive:true};
    const res = await CompanyService.getCompanyList(params);
    if(res?.resp?.success){
      setData(res?.resp?.result?.data);
      console.log('res?.data -- ',res?.resp?.result?.data);
    }else{
      const symbol = params?.filter?.symbol;
      const res = await CompanyService.createCompany({symbol:symbol});
      setData(res?.resp?.result?.data);
      console.log('res -- ',res);
    }
  }

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

  const onSearch = async (symbol)=>{
    const p = {filter:{symbol:symbol}}
    getList(p);
  }

  return (
    <>
      <ComponentsAligner
        title={'Stock Market Company List'}
        navLink={'/stockmarket/company/view'}
        getSearchValue={onSearch}
        products={data}
        bottomCardComponent={<Pagination />}
      />
    </>
  )
}

export default CompanyList