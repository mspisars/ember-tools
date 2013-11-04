var fleck = require('fleck');

for (method in fleck) exports[method] = fleck[method];

/*
 * CapitalizedCamelCase
 */

exports.classify = function(str) {
  return fleck.camelize(str, true);
};

/*
 * users/update_avatar -> UsersUpdateAvatar
 */

exports.objectify = function (str) { 
  str = str.replace(/\//g, '_');
  return exports.classify(str);
};

exports.humanize = function(str) {
  return fleck.capitalize(fleck.underscore(str).replace(/_/g, ' '));
};

exports.templatize = function(str) {
  return fleck.underscore(str.replace(/\./g, '__'));
};

