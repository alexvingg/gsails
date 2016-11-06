//https://www.npmjs.com/package/sails-pager
var pager = require('sails-pager');

module.exports = {
  findPaginated: function (conditions, currentPage, perPage, associatedModel, order) {
    return pager.paginate(this, conditions, currentPage, perPage, associatedModel, order);
  }
};

