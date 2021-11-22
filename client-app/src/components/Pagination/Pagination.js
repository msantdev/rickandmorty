import React from "react";
import "./Pagination.css";

const CHAR_PER_PAGE = 5;

function Pagination({
  totalPages,
  page,
  handleClick,
  maxPageNumber,
  setMaxPageNumber,
  minPageNumber,
  setMinPageNumber,
}) {
  const pages = [...Array(totalPages).keys()].map((num) => num);

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumber + 1 && number > minPageNumber) {
      return (
        <li
          key={number}
          id={number}
          onClick={() => handleClick(number)}
          className={page === number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  const handleNext = () => {
    handleClick(page + 1);
    if (page + 1 > maxPageNumber) {
      setMaxPageNumber(maxPageNumber + CHAR_PER_PAGE);
      setMinPageNumber(minPageNumber + CHAR_PER_PAGE);
    }
  };

  const handlePrev = () => {
    handleClick(page - 1);

    if ((page - 1) % CHAR_PER_PAGE === 0) {
      setMaxPageNumber(maxPageNumber - CHAR_PER_PAGE);
      setMinPageNumber(minPageNumber - CHAR_PER_PAGE);
    }
  };

  return (
    <ul className="page-numbers">
      {minPageNumber !== 0 && (
        <li>
          <button onClick={handlePrev}>Prev</button>
        </li>
      )}
      {renderPageNumbers}
      <li>
        <button onClick={handleNext}>Next</button>
      </li>
    </ul>
  );
}

export default Pagination;
