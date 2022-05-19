import { LimitOffsetType } from "../types";

/**
 * Get Current page number by specific limit and offset
 * @param limit
 * @param offset
 * @returns
 */
export const getPageByLimitAndOffset = (limit: number, offset: number): number => {
  return Math.ceil(offset / limit) + 1;
};

/**
 * Get quantity of pages by specific limit and quantity of items
 * @param count
 * @param limit
 * @returns
 */
export const getNumberOfPagesByCount = (count: number, limit: number): number => {
  return Math.ceil(count / limit);
};

/**
 * Get quantity of pages by current page and limit
 * @param page
 * @param limit
 * @returns
 */
export const getLimitAndOffsetByPage = (
  page: number,
  limit: number
): LimitOffsetType => {
  let offset = (page - 1) * limit;

  if (offset < 0) {
    offset = 0;
  }

  return { limit, offset };
};

/**
 * Get next page limit and offset by current page and limit
 * @param page 
 * @param limit 
 * @returns 
 */
export const getNextPageLimitAndOffsetByPage = (
  page: number,
  limit: number
): LimitOffsetType => {
  let { offset } = getLimitAndOffsetByPage(page, limit);
  offset += limit;

  return { limit, offset };
};

/**
 * Get previous page limit and offset by current page and limit
 * @param page 
 * @param limit 
 * @returns 
 */
export const getPreviousPageLimitAndOffsetByPage = (
  page: number,
  limit: number
): LimitOffsetType => {
  let { offset } = getLimitAndOffsetByPage(page, limit);
  offset -= limit;

  if (offset < 0) {
    offset = 0;
  }

  return { limit, offset };
};
