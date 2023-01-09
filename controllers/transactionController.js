const express = require('express')
const transaction = express.Router() 
const transactionArray = require("../models/transaction")


const sort = transactionArray.sort((a , b) => {
    return new Date(a.date) - new Date(b.date)
})



transaction.get("/", (req , res) => {
    res.json(sort)
})


transaction.post("/", (req ,res) => {
   sort.push(req.body);
    res.json(sort[sort.length - 1])
})

transaction.get("/:index", (req , res) => {
    const {index} = req.params
    if(sort[index]){
        res.status(200).json(sort[index])
    }
    else{
        res.status(404).redirect("/")
    }
})

transaction.delete("/:index", (req, res) => {
    const deletedtransaction = sort.splice(req.params.index, 1);
    res.status(200).json(deletedtransaction);
  });

  transaction.delete("/", (req, res) => {
    const deletedtransaction = sort.splice(req.params.index, 1);
    res.status(200).json(deletedtransaction);
  });


  transaction.put("/:index", (req, res) => {
    sort[req.params.index] = req.body;
    res.status(200).json(sort[req.params.index]);
  })


module.exports = transaction