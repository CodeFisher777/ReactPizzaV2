import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

type PaginationProps = {
  currentPage: number;
  onChangePage: any;
};
const Pagination: React.FC<PaginationProps> = ({ currentPage, onChangePage }) => {
  return (
    <div>
      <ReactPaginate
        className={styles.root}
        nextLabel=">"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={8}
        pageCount={3}
        previousLabel="< "
        forcePage={currentPage - 1}
      />
    </div>
  );
};
export default Pagination;
