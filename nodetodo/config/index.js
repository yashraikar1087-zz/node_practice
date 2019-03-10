var configValues = require("./config");

module.exports = {
  getDbConnectionString: function() {
    return (
      "mongodb://" +
      configValues.uname +
      ":" +
      configValues.pwd +
      "@ds023654.mlab.com:23654/nodetodosample"
    );
  }
};
