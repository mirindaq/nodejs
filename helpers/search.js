module.exports = ( query) => {
  let object = {
    keyword : '',
    regex : ''
  }
  if (query.name) {
    object.regex = new RegExp(query.name, 'i'); 
    object.keyword = query.name;
  }
  return object;
}