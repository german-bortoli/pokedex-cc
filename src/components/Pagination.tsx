import React, { ChangeEvent } from 'react';

import Pagination from '@mui/material/Pagination';

import { getLimitAndOffsetByPage, getNumberOfPagesByCount, getPageByLimitAndOffset } from '../utils';

export interface LimitOffsetType {
    limit: number;
    offset: number;
}

export interface PaginationProps {
  count: number;
  limit: number;
  offset: number;
  onPageChange: ({limit, offset}: LimitOffsetType) => void;
}

const ThemePagination = ({
  count,
  limit,
  offset,
  onPageChange
}: PaginationProps) => {
  const currentPage = getPageByLimitAndOffset(limit, offset);
  const totalPages = getNumberOfPagesByCount(count, limit);

  const handleChange = (event: ChangeEvent<unknown>, page: number) => {
    onPageChange(getLimitAndOffsetByPage(page, limit));
};

  return (
    <Pagination count={totalPages} onChange={handleChange} page={currentPage} />
  );
};

export default ThemePagination;
