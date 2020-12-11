const firebase = require("firebase");

const getUsers = () => {
    const userReference = firebase.database().ref("/phonebook/");
    //Attach an asynchronous callback to read the data
    return (new Promise((resolve, reject) => {
        userReference.on("value", function (snapshot) {
            console.log(snapshot.val());
            const folder = snapshot.val();
            if (folder === null) {
                resolve([])
            } else {
                const data = Object.keys(folder).map(o => Object.assign({ userName: o }, folder[o]))
                resolve(data);
            }
            userReference.off("value");
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
            reject("The read failed: " + errorObject.code);
        });
    }))
}

const createUser = (params) => {
    const referencePath = '/phonebook/' + params.userName + '/';
    const userReference = firebase.database().ref(referencePath);
    return (new Promise((resolve, reject) => {
        userReference.set({ nama: params.nama, id: params.id, phone: params.phone }, function (error) {
            if (error) {
                reject("Data could not be saved." + error);
            } else {
                resolve(params);
            }
        });
    }))
}

const updateUser = (params) => {
    var referencePath = '/phonebook/' + params.userName + '/';
    var userReference = firebase.database().ref(referencePath);
    return (new Promise((resolve, reject) => {
        userReference.update({ nama: params.nama, id: params.id, phone: params.phone }, function (error) {
            if (error) {
                reject("Data could not be updated." + error);
            } else {
                resolve(params);
            }
        });
    }))
}

const deleteUser = (params) => {
    return (new Promise((resolve, reject) => {
        //var userName = req.params.username;
        var referencePath = '/phonebook/' + params.userName + '/';
        var userReference = firebase.database().ref(referencePath);
        userReference.remove((error) => {
            if (error) {
                reject("Data could not be deleted." + error);
            } else {
                resolve(params);
            }
        })
    }))
}

module.exports = { getUsers, createUser, updateUser, deleteUser }