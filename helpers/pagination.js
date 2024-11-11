module.exports = (objectPagination, query, countProducts) => {

  if (query.page && !isNaN(query.page)) {
    objectPagination.currentPage = parseInt(query.page);
    objectPagination.skipItems = (parseInt(query.page) - 1) * objectPagination.limitItems;
  }

  const totalPage = Math.ceil(countProducts / objectPagination.limitItems);
  objectPagination.totalPage = totalPage;

  return objectPagination;

}