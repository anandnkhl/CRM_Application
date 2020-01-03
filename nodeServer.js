var mongo = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/"



mongo.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("CRMDatabase");
  var myobj = { UID : 2, Name: "Rajesh", Email : "rajesh@crm.com", Phone : 8947562136, Password : "ABCDE"};
  dbo.collection("CRMUser").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
