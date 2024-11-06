const mongoose = require("mongoose");
const uri = "mongodb+srv://221147:by6aMq90PQkNDJyk@cluster0.ptna8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


function main() {
    mongoose.connect(uri).then(() => {
        console.log("Succesfull")
    
    }).catch((err) => {
        console.log("Error: ", err)
    })
}

module.exports = { main };