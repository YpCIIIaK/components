import React, { useState } from 'react';

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [gotoPage, setGotoPage] = useState('');
  const totalPages = 20; // Replace with your total number of pages
  const maxVisiblePages = 5; // Maximum number of page links to show

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleGotoChange = (e) => {
    setGotoPage(e.target.value);
  };

  const handleGotoSubmit = (e) => {
    e.preventDefault();
    const pageNumber = parseInt(gotoPage, 10);
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const getPages = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i <= maxVisiblePages || i > totalPages - maxVisiblePages) {
        pages.push(i);
      } else if (i === currentPage) {
        pages.push(i);
      } else if (i === currentPage - 1 || i === currentPage + 1) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== '...') {
        pages.push('...');
      }
    }
    return pages;
  };

  return (
    <div className="flex justify-center my-10 bg-sliderBgColor-500 ">
      <nav className="flex items-center">
        <button
          className="px-3 py-2 text-gray-500 hover:text-gray-800"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        <ul className="flex pl-0 mb-0 list-none">
          {getPages().map((page, index) => (
            <li key={index}>
              {page === '...' ? (
                <span className="px-3 py-2 text-gray-500">{page}</span>
              ) : (
                <a
                  href="#"
                  className={`px-3 py-2 rounded-md ${currentPage === page ? 'bg-gray-200' : 'bg-white'}`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </a>
              )}
            </li>
          ))}
        </ul>
        <button
          className="px-3 py-2 text-gray-500 hover:text-gray-800"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
        <form className="ml-4" onSubmit={handleGotoSubmit}>
          <input
            type="number"
            value={gotoPage}
            onChange={handleGotoChange}
            className="w-20 pl-2 pr-2 py-1 text-sm text-gray-700 border border-gray-300 rounded-md"
            placeholder="Go to"
          />
          <button
            type="submit"
            className="ml-2 px-3 py-2 text-sm text-white bg-blue-500 hover:bg-blue-700 rounded-md"
          >
            Go
          </button>
        </form>
      </nav>
    </div>
  );
};

export default Pagination;