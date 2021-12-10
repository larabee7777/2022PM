
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://PM_Admin:Rabbit123@cluster0.3ujyo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

var db = client.db("PropertyManager");

client.connect(err => {
  const collection = client.db("PropertyManager").collection("PM_Contacts");
  
  console.log("Connected to MongoDB");
  




  // perform actions on the collection object
  //client.close();
});



/* async function listDatabases(client){
  databasesList = await client.db().admin().listDatabases();
  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
*/





/*const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://PM_Admin:Rabbit123@cluster0.3ujyo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
  console.log("connected to mongoose")
}
*/



