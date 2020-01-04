var mongo = require('mongodb').MongoClient;
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var url = "mongodb://127.0.0.1:27017/"

app.use(bodyParser.urlencoded({ extended: true }));

//To verify login for CRM USER
app.post('/verifyUser', function(req, res) {
	var usrID =  parseInt(req.body.UserId, 10);
	var pas = req.body.Password;
     var varified = 0;
     var query = {$and:[ {UID : usrID}, {Password : pas}]};
	mongo.connect(url,  {
             useNewUrlParser: true,
             useUnifiedTopology: true
     },function(err, db) {
               if (err) throw err;
               var dbo = db.db("CRMDatabase");
               dbo.collection("CRMUser").find(query).toArray(function(err, result) {
                    if (err) throw err;
                    if(result.length != 0){
                         console.log("Verified User");
                    }else{
                         console.log("Invalid User");
                    }
                db.close();
               });
           });
});
 //     var output = dbo.collection("CRMUser").count().toArray;
 //     	if(output != 0){
 //     		console.log("User is valid", output);
 //     	}else{
 //     		console.log("Invalid User", output);
 //     	}
 //     db.close();
	// });

app.listen(8080, function() {
  console.log('Server running at http://127.0.0.1:8080/');
});



// mongo.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("CRMDatabase");
//   var myobj = { UID : 2, Name: "Rajesh", Email : "rajesh@crm.com", Phone : 8947562136, Password : "ABCDE"};
//   dbo.collection("CRMUser").insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });
// });
