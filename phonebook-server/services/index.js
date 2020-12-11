const firebase = require("firebase");

const getUsers = () => {
  const userReference = firebase.database().ref("/phonebook/");
  return (new Promise((resolve, reject)=>{
    userReference.on("value", function(snapshot) {
      const folders = snapshot.val();
      if (folders === null) {
        resolve([]);
      }else{
        const data = Object.keys(folders).map(o => Object.assign({ ID: o }, folders[o]));
        resolve(data);
      }
      userReference.off("value");
    }, (errorObject) => {
      console.log("The read failed: " + errorObject.code);
      reject("The read failed: " + errorObject.code);
    });
  }));
}

//Create new instance
const createUser = (params) => {
  const referencePath = '/phonebook/' +params.ID+ '/';
  const userReference = firebase.database().ref(referencePath);
  return (new Promise((resolve, reject) => {
    userReference.set({nama: params.nama, phone: params.phone}, (error) => {
      if (error) {
        reject("Data could not be deleted." + error);
      } else {
        resolve(params);
      }
    });
  }));
}

//Update existing instance
const updateUser = (params) => {
  var referencePath = '/phonebook/' + params.ID +'/';
  var userReference = firebase.database().ref(referencePath);
  return (new Promise((resolve, reject) => {
    userReference.update({nama: params.nama, phone: params.phone}, (error) => {
      if (error) {
        reject("Data could not be deleted." + error);
      } else {
        resolve(params);
      }
    });
  }));
}

//Delete an instance
const deleteUser = (params) => {
  var referencePath = '/phonebook/'+params.ID+'/';
  var userReference = firebase.database().ref(referencePath);
  return (new Promise((resolve, reject) => {
    userReference.remove((error) => {
      if (error) {
        reject("Data could not be deleted." + error);
      } else {
        resolve(params);
      }
    })
  }));
}

module.exports = {getUsers, createUser, updateUser, deleteUser}