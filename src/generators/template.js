var fs = require('../util/fs');
var inflector = require('../util/inflector');

module.exports = function(resource) {
  var resourceName = inflector.templatize(resource);
  fs.writeGenerator('template', resourceName, {name: resource});
};

