var dbName = 'cloud_hw2';
var dbPort = '27017';
var dbHost = 'localhost';
var connectionString = 'mongodb://' + dbHost + ':' + dbPort + '/' + dbName;

module.exports = {
  url: connectionString
};
