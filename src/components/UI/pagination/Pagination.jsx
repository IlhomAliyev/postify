import React from 'react';
import { getPagesArray } from '../../../utils/page';

const Pagination = ({ totalPages, page, changePage }) => {
  let pagesArray = getPagesArray(totalPages);

  return (
    <div className="page__wrapper">
      {pagesArray.map((p) => (
        <span
          onClick={(e) => changePage(p)}
          className={page === p ? 'page page__current' : 'page'}
          key={p}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
