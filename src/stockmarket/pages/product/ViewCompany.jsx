import React, { useEffect, useState } from 'react'
import StockDetails from './components/StockDetails'
import OHLCVChart from './components/OHLCVChart'
import CompanyService from '../../services/CompanyService';
import { useParams } from 'react-router-dom';

function ViewCompany() {
    const [data, setData] = useState([]);

    const { id } = useParams();

  useEffect(()=>{
    init();
  },[])

  async function init(){
    getDetails();
  }

  async function getDetails(params = {}){
    params.filter = {isActive:true};
    const res = await CompanyService.getCompanyDetails(params,id);
    if(res?.resp?.success){
      setData(res?.resp?.result?.data);
      console.log('res?.data -- ',res?.resp?.result?.data);
    }
  }


    const ohlcvData = [
        {
            "timestamp": "2024-03-28 19:55:00",
            "open": "190.9500",
            "high": "190.9500",
            "low": "190.4000",
            "close": "190.4100",
            "volume": "91"
        },
        {
            "timestamp": "2024-03-28 19:50:00",
            "1. open": "190.2000",
            "2. high": "190.2100",
            "3. low": "190.2000",
            "4. close": "190.2100",
            "5. volume": "3"
        },
        {
            "timestamp": "2024-03-28 19:30:00",
            "1. open": "190.2000",
            "2. high": "190.2000",
            "3. low": "190.2000",
            "4. close": "190.2000",
            "5. volume": "16"
        },
        {
            "timestamp": "2024-03-28 19:10:00",
            "1. open": "190.1600",
            "2. high": "190.1600",
            "3. low": "190.1600",
            "4. close": "190.1600",
            "5. volume": "0"
        },
        {
            "timestamp": "2024-03-28 19:00:00",
            "1. open": "190.9600",
            "2. high": "190.9600",
            "3. low": "190.9500",
            "4. close": "190.9500",
            "5. volume": "941332"
        },
        {
            "timestamp": "2024-03-28 18:55:00",
            "1. open": "191.2190",
            "2. high": "191.2190",
            "3. low": "191.0600",
            "4. close": "191.0600",
            "5. volume": "1"
        }
    ];

    return (
        <div className='flex'> 
            <StockDetails stock={data} />
            <OHLCVChart ohlcvData={ohlcvData} />
        </div>
    )
}

export default ViewCompany