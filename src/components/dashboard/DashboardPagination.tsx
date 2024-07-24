import React from 'react'

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    totalItems: number;
    itemsPerPage: number;
  }


const DashboardPagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
    totalItems,
    itemsPerPage
  }) => {

    const getPageNumbers = () => {
        const pageNumbers = [];
        const maxVisiblePages = 5;
    
        if (totalPages <= maxVisiblePages) {
          for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
          }
        } else {
          if (currentPage <= 3) {
            for (let i = 1; i <= 5; i++) {
              pageNumbers.push(i);
            }
          } else if (currentPage >= totalPages - 2) {
            for (let i = totalPages - 4; i <= totalPages; i++) {
              pageNumbers.push(i);
            }
          } else {
            for (let i = currentPage - 2; i <= currentPage + 2; i++) {
              pageNumbers.push(i);
            }
          }
        }
    
        return pageNumbers;
      };
    
      const startItem = (currentPage - 1) * itemsPerPage + 1;
      const endItem = Math.min(currentPage * itemsPerPage, totalItems);


  return (
    <div className="flex flex-col-reverse  justify-between mt-6">
      <div className="text-sm mt-3 text-gray-700">
        {startItem}-{endItem} of {totalItems}
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-2 py-1 rounded border border-gray-300 text-sm disabled:opacity-50"
        >
          &lt; Back
        </button>
        {getPageNumbers().map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            className={`w-8 h-8 rounded text-sm ${
              pageNumber === currentPage
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {pageNumber}
          </button>
        ))}
        {totalPages > 5 && currentPage < totalPages - 2 && (
          <span className="text-gray-500">...</span>
        )}
        {totalPages > 5 && currentPage < totalPages - 2 && (
          <button
            onClick={() => onPageChange(totalPages)}
            className="w-8 h-8 rounded text-sm bg-gray-200 text-gray-700 hover:bg-gray-300"
          >
            {totalPages}
          </button>
        )}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-2 py-1 rounded border border-gray-300 text-sm disabled:opacity-50"
        >
          Next &gt;
        </button>
      </div>
    </div>
  )
}

export default DashboardPagination
