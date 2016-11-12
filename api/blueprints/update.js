/**
 * Module dependencies
 */

var actionUtil = require('../../node_modules/sails/lib/hooks/blueprints/actionUtil');
//var util = require('util');
var _ = require('lodash');
var validator = require('sails-validation-messages');


/**
 * Update One Record
 *
 * http://sailsjs.com/docs/reference/blueprint-api/update
 *
 * An API call to update a model instance with the specified `id`,
 * treating the other unbound parameters as attributes.
 *
 */

module.exports = function updateOneRecord (req, res) {

  // Look up the model
  var Model = actionUtil.parseModel(req);

  // Locate and validate the required `id` parameter.
  var pk = actionUtil.requirePk(req);

  // Default the value blacklist to just "id", so that models that have an
  // "id" field that is _not_ the primary key don't have the id field
  // updated mistakenly.  See https://github.com/balderdashy/sails/issues/3625
  req.options.values = req.options.values || {};
  req.options.values.blacklist = req.options.values.blacklist || ['id'];

  // Create `values` object (monolithic combination of all parameters),
  // omitting any blacklisted params.
  var values = actionUtil.parseValues(req);

  // No matter what, don't allow changing the PK via the update blueprint
  // (you should just drop and re-add the record if that's what you really want)
  if (typeof values[Model.primaryKey] !== 'undefined' && values[Model.primaryKey] !== pk) {
    req._sails.log.warn('Cannot change primary key via update blueprint; ignoring value sent for `' + Model.primaryKey + '`');
  }
  // Make sure the primary key is unchanged
  values[Model.primaryKey] = pk;

  // Find and update the targeted record.
  //
  // (Note: this could be achieved in a single query, but a separate `findOne`
  //  is used first to provide a better experience for front-end developers
  //  integrating with the blueprint API.)
  var query = Model.findOne(pk);
  // Populate the record according to the current "populate" settings
  query = actionUtil.populateRequest(query, req);

  query.exec(function found(err, matchingRecord) {

    if (err) { return res.serverError(err); }
    if (!matchingRecord) { return res.notFound(); }

    Model.update(pk, values).exec(function updated(err, records) {

      // Differentiate between waterline-originated validation errors
      // and serious underlying issues. Respond with badRequest if a
      // validation error is encountered, w/ validation info.
      if (err) { 
        if(err.invalidAttributes) {
          err.invalidAttributes = validator(Model, err.invalidAttributes);
          var obj = null;
          console.info(err);
          Object.keys(err.invalidAttributes).forEach(function(key) {
            var val = err.invalidAttributes[key];
            obj = err.invalidAttributes[key][0];
          });
          return res.json(422, obj);
        }else{
          return res.negotiate(err);
        }
      }

      var updatedRecord = records[0];

      res.ok(updatedRecord);
    });// </updated>
  }); // </found>
};