const express = require("express");
const db=require('../db')
const fetchuser=require('../middleware/fetchuser')
const router = express.Router();

// Create the result using /createresult api. Login req
router.post("/createresult",fetchuser,async (req,res)=>{
    try{
        const {E_ID,USN,Marks}=req.body
        let sql=`insert into result values('${USN}',${E_ID},${Marks},'${req.user.id}');`
        db.query(sql,async (err,result)=>{
            if(err){
                console.log(err)
                return res.status(500).send("Internal server error")
            }
            res.send(result)
        })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
      }
})



module.exports=router