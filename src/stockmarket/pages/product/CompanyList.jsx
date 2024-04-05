import React, { useEffect, useState } from 'react';
import ComponentsAligner from '../../components/aligner/ComponentsAligner';
import Pagination from '../../components/core/Pagination';
import CompanyService from '../../services/CompanyService';
import { useLocation } from "react-router-dom";

function CompanyList() {
  const [data, setData] = useState([]);
  const location = useLocation();
  let search = location?.state?.symbol;
  const [currentPage, setCurrentPage] = useState(0);
  const [searchParams, setSearchParams] = useState('');

  useEffect(() => {
    if(search && search?.length > 0){
      onSearch(search);
      location.state.symbol = '';
      search = '';
    }else{
      getList();
    }
  }, [search, currentPage, searchParams]);

  async function getList() {
    // Create a new params object to ensure 
    const params = getSearchParams();

    try {
      let res = await CompanyService.getCompanyList(params);
      if (res?.resp?.success && res.resp.result.data?.length>0) {
        setData(res.resp.result.data || []);
      } else {
        if(searchParams){
          res = await CompanyService.createCompany({symbol:searchParams});
          if (res?.resp?.success) {
            setData([res.resp.result.data] || []);
          }
        }
      }
    } catch (error) {
      console.error('Failed to fetch company list:', error);
    }
  }

  const onSearch = (searchValue) => {
    setCurrentPage(0);
    setSearchParams(searchValue);
  };

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  function getSearchParams() {
    let p = {
      offset: currentPage,
      limit: 4,
    };

    let filterCriteria = {isActive: true };
    if(searchParams?.length > 0){
      Object.assign(filterCriteria, {
        $or: [
          {
            symbol: {
              $regex: searchParams?.trim(),
              $options: 'i',
            },
          },
          {
            name: {
              $regex: searchParams?.trim(),
              $options: 'i',
            },
          },
        ],
      });
    }
      
    if (Object.keys(filterCriteria).length > 0) {
      p.filter = filterCriteria;
    }
    return p;
  }


  return (
    <>
      <ComponentsAligner
        title="Stock Market Company List"
        navLink="/stockmarket/company/view"
        getSearchValue={onSearch}
        products={data}
        bottomCardComponent={
        <Pagination handlePageChange={handlePageChange}/>}
      />
    </>
  );
}

export default CompanyList;
