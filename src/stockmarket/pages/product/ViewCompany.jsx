import React, { useEffect, useState } from 'react';
import StockDetails from './components/StockDetails';
import OHLCVChart from './components/OHLCVChart';
import CompanyService from '../../services/CompanyService';
import { useParams } from 'react-router-dom';

function ViewCompany() {
  const [data, setData] = useState(null);
  const [ohlcvData, setOhlcvData] = useState([]);
  const { id } = useParams();

  // Fetches both company details and OHLCV data
  useEffect(() => {
    const fetchData = async () => {
      await getDetails();
    };
    fetchData();
  }, [id]);

  async function getDetails() {
    const res = await CompanyService.getCompanyDetails({ filter: { isActive: true } }, id);
    if (res?.resp?.success) {
      const r = res.resp.result.data;
      setData(r);
      await getOHLCVData({filter:{symbol:r?.symbol}});
    }
  }

  async function getOHLCVData(params = {}){
    let p = {};
    if(params?.filter){
      p.filter = Object.assign(params.filter, {isActive:true});
    }else{
      p = {filter: {isActive:true, symbol:data?.symbol}}
    }
    const res = await CompanyService.getOHLCVList(p,id);
    console.log('res?.resp -- ',res?.resp);
    if(res?.resp?.success){
      setOhlcvData(res?.resp?.result?.data?.slice(0,6));
      console.log('ohlcvnData -- ',res?.resp?.result?.data?.slice(0,6));
    }
  }

  // ensure `data.symbol` is available before making a request
  const onSelect = interval => {
    if (data?.symbol) {
      getOHLCVData({ filter: { interval ,symbol: data.symbol} });
    }
  };

  // Refreshes OHLCV data with the current symbol and company ID
  const onRefresh = async () => {
    if (data?.symbol) {
      const res = await CompanyService.createOHLCV({ symbol: data.symbol, companyId: id });
      if (res?.resp?.success) {
        setOhlcvData(res.resp.result.data.slice(0, 6));
      }
    }
  };

  return (
    <div className='flex justify-between'>
      <div className='w-1/2'>
      {data && <StockDetails stock={data} />}
      </div>
      <div className='w-1/2'>
      <OHLCVChart ohlcvData={ohlcvData} onSelect={onSelect} onRefresh={onRefresh} />
      </div>
    </div>
  );
}

export default ViewCompany;
