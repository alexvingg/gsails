//https://www.npmjs.com/package/sails-pager
var pager = require('sails-pager');

module.exports = {
  //migrate: 'safe',
  findPaginated: function (conditions, currentPage, perPage, associatedModel, order) {
    return pager.paginate(this, conditions, currentPage, perPage, associatedModel, order);
  }
};

