import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import React from 'react'
import ReactPaginate from 'react-paginate'

function Pagination({handlePageChange}) {
    return (
        <div className=' p-0 m-0'>

            <ReactPaginate
                pageCount={Math.ceil(200 / 10)}
                initialPage={0}
                pageRangeDisplayed={2}
                previousLabel={<div className="px-2 py-1 rounded border border-blue-600  text-black" >Prev</div>}
                nextLabel={<div className="px-2 py-1 rounded  border border-blue-600  text-black" >Next</div>}
                breakLabel={'...'}
                marginPagesDisplayed={1}
                onPageChange={handlePageChange}
                containerClassName="flex list-none gap-2 justify-center items-center"
                activeClassName="active"
                activeLinkClassName="bg-blue-500 text-white  px-3 rounded-md"
            />

        </div>
    )
}

export default Pagination;