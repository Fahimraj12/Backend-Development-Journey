const mongo = require('mongodb');

const MongoClient = mongo.MongoClient;

const MONGO_URL = "mongodb+srv://fahimraj12:fahimraj_12@cluster0.a8wtmbl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

let _db;
const mongoConnect = (callback) =>{
MongoClient.connect(MONGO_URL)
.then(client =>{
  console.log("Connected to Mongo Db");
  _db = client.db("airbnb");
  callback();
}).catch(err =>{
  console.log("Error While COnneting to Mongo:", err);
  throw err;
});
};
const getdb = () =>{
  if(!_db){
    throw new Error("Database is not conected");
  }
  return _db;

}

exports.mongoConnect = mongoConnect;
exports.getDb = getdb;