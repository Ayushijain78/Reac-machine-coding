export const COLUMN_CONFIG = [
  {
    dataKey: "title",
    columnName: "Tiltle",
  },
  {
    dataKey: "description",
    columnName: "Description",
  },
  {
    dataKey: "price",
    columnName: "Price",
  },
  {
    dataKey: "rating",
    columnName: "Rating",
  },
];

export const PAGE_SIZE = 8;
export const getPaginatedData = (data, pageNumber) => {
  const startIndex = (pageNumber - 1) * PAGE_SIZE;
  const endIndex = pageNumber * PAGE_SIZE;
  return data.slice(startIndex, endIndex);
};

export const getTotalPagesCount = (data) => {
  return Math.ceil(data.length / PAGE_SIZE);
};

export const PAGINATION_ENUMS = {
  FIRST: "first",
  LAST: "last",
  CHANGE: "change",
};
