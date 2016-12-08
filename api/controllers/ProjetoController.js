/**
 * ProjetoController
 *
 * @description :: Server-side logic for managing projetoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	findPaginated: function (req, res) {
        var perPage = req.query.per_page;
        var currentPage = req.query.page;
        var order = req.query.order;
        var conditions = {};
        var associatedModel = [];

        Projeto.findPaginated(conditions, currentPage, perPage, associatedModel, order).then(function (records) {
            return res.json(records);
        }).catch(function (err) {
            console.error(err.stack);
            res.status(500).send('Ocorreu um erro inesperado! Por favor, contacte o administrador do sistema.');
            return res;
        });

        return res;
    },
};

