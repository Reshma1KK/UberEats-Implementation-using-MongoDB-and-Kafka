const router = require ("express").Router();
var kafka = require("../kafka/client");
const { checkAuth } = require("../Util/passportCustomer")

router.put("/",checkAuth,(req,res) =>{
  console.log(req.body)
  kafka.make_request("EditCustomerEmail",req.body,(err,data) =>{
    if(err){
      res.writeHead(400,{
        "Content-type":"text/plain",
      });
      res.end("Cannot edit email");
    }
    else if(data.status===200){
      const payload={
        _id:data.data._id,
        name:data.data.name,
        email_id:data.data.email_id,
      }
      console.log("payload in backend in email",payload)
      res.status(200).json({payload});
      // console.log("landing page");
      // res.end(JSON.stringify(data));
    }
    else{
      res.writeHead(400,{
        "Content-type":"text/plain",
      })
      res.end("Error fetching restaurant details")
    }
  })
})

module.exports = router;