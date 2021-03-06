var express = require('express');
var router = express.Router();
var firebase = require('firebase');

/* GET home page. */

  //Fetch instances
router.get('/', function (req, res) {
  const userReference = firebase.database().ref("/phonebook/");
  //Attach an asynchronous callback to read the data
  userReference.on("value", function(snapshot) {
    console.log(snapshot.val());
    res.json(snapshot.val());
    userReference.off("value");
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
    res.send("The read failed: " + errorObject.code);
  });
});

router.post('/', function (req, res) {
  const id = req.body.id;
  const phone = req.body.phone;
  const nama = req.body.nama;

  const referencePath = '/phonebook/'+id+'/';
  const userReference = firebase.database().ref(referencePath);
  userReference.set({phone: phone, nama: nama}, function(error) {
    if (error) {
      res.send("Data could not be saved." + error);
    } else {
      res.send("Data saved successfully.");
    }
  });
});

router.put('/:id', function (req, res) {
  var id = req.params.id;
 
  const phone = req.body.phone;
  const nama = req.body.nama;

  var referencePath = '/phonebook/'+id+'/';
  var userReference = firebase.database().ref(referencePath);
  userReference.update({ phone: phone, nama: nama}, function(error) {
    if (error) {
      res.send("Data could not be updated." + error);
    } else {
      res.send("Data updated successfully.");
    }
  });
});

router.delete('/:id', function (req, res) {
  var id = req.params.id;
  var referencePath = '/phonebook/'+id+'/';
  var userReference = firebase.database().ref(referencePath);
  userReference.remove((error)=>{
    if (error) {
      res.send("Data could not be deleted." + error);
    } else {
      res.send("Data deleted successfully.");
    }
  })
});
module.exports = router;
