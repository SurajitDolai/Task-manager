const express=require('express');
const { User, userDetails, dlt, update, getupdate } = require('../Controller/Controller');
const enquireRoute=express.Router();

enquireRoute.post("/User-task",User);
enquireRoute.get("/user-details",userDetails);
enquireRoute.delete("/delete:id",dlt);
enquireRoute.put("/update-status/:id",update)
enquireRoute.get("/update-status/:id",update)


module.exports={enquireRoute}