import React, { ChangeEvent, useEffect, useState } from 'react';

import Pagination from '@mui/material/Pagination';
import { styled } from '@mui/system';

import {
  getLimitAndOffsetByPage,
  getNumberOfPagesByCount,
  getPageByLimitAndOffset,
} from '../utils';

export interface LimitOffsetType {
  limit: number;
  offset: number;
}

export interface PaginationProps {
  count: number;
  limit: number;
  offset: number;
  onPageChange: ({ limit, offset }: LimitOffsetType) => void;
}

const StyledPagination = styled(Pagination)`
  .MuiPagination-ul {
    padding: 20px 0 20px 0;
    justify-content: center;
  }
`;

const ThemePagination = ({
  count,
  limit,
  offset,
  onPageChange,
}: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(
    getPageByLimitAndOffset(limit, offset)
  );
  const [totalPages, setTotalPages] = useState(
    getNumberOfPagesByCount(count, limit)
  );

  useEffect(() => {
    const tmpPages = getNumberOfPagesByCount(count, limit);
    const tmpCurPage = getPageByLimitAndOffset(limit, offset);
    setCurrentPage(tmpCurPage);
    setTotalPages(tmpPages);
  }, [currentPage, totalPages, limit, offset, count]);

  const handleChange = (event: ChangeEvent<unknown>, page: number) => {
    const newRanges = getLimitAndOffsetByPage(page, limit);
    setCurrentPage(getPageByLimitAndOffset(newRanges.limit, newRanges.offset));
    setTotalPages(getNumberOfPagesByCount(count, newRanges.limit));
    onPageChange(newRanges);
  };

  return (
    <StyledPagination
      size="large"
      count={totalPages}
      onChange={handleChange}
      page={currentPage}
    />
  );
};

export default ThemePagination;
