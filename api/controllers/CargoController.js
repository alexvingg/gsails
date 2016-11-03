/**
 * CargoController
 *
 * @description :: Server-side logic for managing cargoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
//https://www.npmjs.com/package/sails-pager
var pager = require('sails-pager');

module.exports = {

    findPaginated: function (req, res) {
        var perPage = req.query.per_page;
        var currentPage = req.query.page;
        var order = req.query.order;
        var conditions = {};

        pager.paginate(Cargo, conditions, currentPage, perPage, [], order).then(function (records) {
            return res.json(records);
        }).catch(function (err) {
            console.error(err.stack);
            res.status(500).send('Ocorreu um erro inesperado! Por favor, contacte o administrador do sistema.');
            return res;
        });

        return res;
    },
};

