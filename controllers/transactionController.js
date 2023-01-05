const express = require('express')
const transaction = express.Router() 
const transactionArray = require("../models/transaction")

transaction.get("/", (req , res) => {
    res.json(transactionArray)
})


transaction.post("/", (req ,res) => {
    transactionArray.push(req.body);
    res.json(transactionArray[transactionArray.length - 1])
})

transaction.get("/:index", (req , res) => {
    const {index} = req.params
    if(transactionArray[index]){
        res.status(200).json(transactionArray[index])
    }
    else{
        res.status(404).redirect("/")
    }
})

transaction.delete("/:index", (req, res) => {
    const deletedtransaction = transactionArray.splice(req.params.index, 1);
    res.status(200).json(deletedtransaction);
  });


  transaction.put("/:index", (req, res) => {
    transactionArray[req.params.index] = req.body;
    res.status(200).json(transactionArray[req.params.index]);
  })


module.exports = transaction