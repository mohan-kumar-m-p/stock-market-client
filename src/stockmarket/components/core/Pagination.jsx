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
                previousLabel={<div className="px-2 py-1 rounded bg-sky-950 text-white" >Prev</div>}
                nextLabel={<div className="px-2 py-1 rounded bg-sky-950 text-white" >Next</div>}
                breakLabel={'...'}
                marginPagesDisplayed={1}
                onPageChange={handlePageChange}
                containerClassName="flex list-none gap-2 justify-center items-center"
                // pageClassName="page-item md:inline-block "
                // pageLinkClassName="page-link  px-3 rounded-md text-gray-700 hover:bg-blue-500 hover:text-white transition-colors duration-200 ease-in-out"
                // previousClassName="previous-item hidden md:inline-block"
                // previousLinkClassName="page-link  px-3 rounded-md text-gray-700 hover:bg-blue-500 hover:text-white transition-colors duration-200 ease-in-out"
                // nextClassName="next-item hidden md:inline-block"
                // nextLinkClassName="page-link  px-3 rounded-md text-gray-700 hover:bg-blue-500 hover:text-white transition-colors duration-200 ease-in-out"
                // breakClassName="break-item md:inline-block"
                // breakLinkClassName="page-link  px-3 rounded-md text-gray-700"
                activeClassName="active"
                activeLinkClassName="bg-blue-500 text-white  px-3 rounded-md"
            />

        </div>
    )
}

export default Pagination;