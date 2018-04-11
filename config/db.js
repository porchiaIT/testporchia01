// Set the connection string based from the config vars of the production server
// To run locally use 'mongodb://localhost/mern-crud' instead of process.env.DB

module.exports = {
	db: 'mongodb://XXXXXXXXXXXXXX:XXXXXXXXXXXXX@porchiatest01-shard-00-00-t10gy.gcp.mongodb.net:27017,porchiatest01-shard-00-01-t10gy.gcp.mongodb.net:27017,porchiatest01-shard-00-02-t10gy.gcp.mongodb.net:27017/test?ssl=true&replicaSet=PorchiaTest01-shard-0&authSource=admin'
};
