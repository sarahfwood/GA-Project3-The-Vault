
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://heroku_rmqr8mh5:b4Tt3ry+@cluster-rmqr8mh5.vljhs.mongodb.net/heroku_rmqr8mh5?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

// Global environment variables we need in our server
const port = process.env.PORT || 8000
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/the-vault'
// our secret used for encoing our JWT tokens, used in '/controllers/user' and '/lib/secureRoute'
const secret = 'This is my really secret string that nobody is going to be able to guess1'

module.exports = {
  port,
  dbURI,
  secret
}