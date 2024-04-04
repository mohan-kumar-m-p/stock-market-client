import React, { useEffect, useState } from 'react';
import ComponentsAligner from '../../components/aligner/ComponentsAligner';
import Pagination from '../../components/core/Pagination';
import CompanyService from '../../services/CompanyService';

function CompanyList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  async function getList(searchParams = {}) {
    // Create a new params object to ensure
    const params = { filter: { isActive: true }, ...searchParams };

    try {
      const res = await CompanyService.getCompanyList(params);
      if (res?.resp?.success) {
        setData(res.resp.result.data || []);
      } else {
        // handling the "no data" scenario more explicitly here
        console.error('No companies found:', res);
      }
    } catch (error) {
      console.error('Failed to fetch company list:', error);
    }
  }

  const onSearch = (searchValue) => {
    const searchParams = {
      filter: {
        $or: [
          { symbol: { $regex: searchValue, $options: 'i' } },
          { name: { $regex: searchValue, $options: 'i' } }
        ]
      }
    };
    getList(searchParams);
  };

  return (
    <>
      <ComponentsAligner
        title="Stock Market Company List"
        navLink="/stockmarket/company/view"
        getSearchValue={onSearch}
        products={data}
        bottomCardComponent={<Pagination />}
      />
    </>
  );
}

export default CompanyList;
