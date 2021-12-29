const express = require("express");
const db=require('../db')
const fetchuser=require('../middleware/fetchuser')
const { body, validationResult } = require("express-validator");
const router = express.Router();
const jwt = require("jsonwebtoken");

// Fetch all events using '/getall' api. Login req
router.get('/getall',fetchuser,async (req,res)=>{
    let sql='Select * from events where E_ID=10;'
    try{
     db.query(sql, (err,result)=>{
        if(err){
          console.log(err)
          return res.status(500).send("Internal server error");    
        }  
        res.send(result);
    })
} catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }

});

// create new events using /addevent api. Login req
router.post('/addevent',fetchuser,async(req,res)=>{
    try{
    const {EName,Location,Time,Date,SUSN,SSN}=req.body;
    const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
    let sql=`Insert into events(EName,Location,Time,Date,SUSN,SSN,Status) values('${EName}','${Location}','${Time}','${Date}',${SUSN},${SSN},0);`
    db.query(sql,(err,result)=>{
        if(err)
        {
          console.log(err)
          return res.status(500).send("Internal server error");    
        }  
        res.send(result);
    })
}  catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }

});

// Update event using /editevent:id api. Login req
router.put('/editevent/:id',fetchuser,async(req,res)=>{
    try{
    const {EName,Location,Time,Date,SUSN,SSN}=req.body;
    const Status=0;
    if(req.user.SSN)
    Status=1;
    let sql=`update events set EName='${EName}', Location='${Location}',Time='${Time}',Date='${Date}',SUSN=${SUSN},SSN=${SSN},Status=${Status}
    where E_ID=${req.params.id}`
    db.query(sql,(err,result)=>{
        if(err)
        {
          console.log(err)
         return res.status(500).send("Internal server error");    
        }  
                res.send(result);
    })
} catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }

});

// Delete event using /deleteevent:id api. Login req
router.delete('/deleteevent/:id',async (req,res)=>{
    try{
    let sql=`delete from events where E_ID=${req.params.id}`
    db.query(sql,(err,result)=>{
        if(err)
        {
          console.log(err)
        return res.status(500).send("Internal server error");    
        }  
        res.send(result);
    })}
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
      }

});

module.exports=router;