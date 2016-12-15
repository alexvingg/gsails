//https://www.npmjs.com/package/sails-pager
var pager = require('sails-pager');

module.exports = {
  //migrate: 'safe',
  findPaginated: function (conditions, currentPage, perPage, associatedModel, order) {
    return pager.paginate(this, conditions, currentPage, perPage, associatedModel, order);
  },
  countCustom: function (groupBy, callback) {
    var query = ' SELECT ';
    if(groupBy){
      groupBy.forEach(function(o){
        query += (o + ',');
      });
    }
    query += ' count(1) as qtde ';
    query += ' FROM '+this.tableName;
    if(groupBy){
      query += ' GROUP BY ';
      groupBy.forEach(function(o, i){
        query += o;
        if(i < groupBy.lenght -1){
          query += ',';
        }
      });
    }
    return this.query(query, callback);
  }
};

