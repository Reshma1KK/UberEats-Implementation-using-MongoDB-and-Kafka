"use strict";


var Cart = require("../models/CartItemsModel")


const handle_request = async( msg, callback) => {
  console.log("Inside get past orders");
  const res={};
  console.log("msg.customer_id",msg.customer_id)
  Cart.aggregate(
    [
      {
        $group:
        {
          "_id" : "$temp",
            "restaurant_id":{"$first":"$restaurant_id"},
            "total_qty":{"$first":"$total_qty"},
            "restaurant_name":{"$first":"$restaurant_name"},
            "location":{"$first":"$location"},
            "date":{"$first":"$date"},
            "delivery_status":{"$first":"$delivery_status"},
            "order_status":{"$first":"$order_status"},
            "spl_instructions":{"$first":"$spl_instructions"},
            "total":{"$first":"$total"},
            "temp":{"$first":"$temp"},
            "customer_name":{"$first":"$customer_name"}
        }
      }
    ]
    ,(error,data) =>{
    if(error){
      console.log(error)
      console.log("Error fetching data");
      callback(error,null);
    }
    else if(Cart){
          console.log("data here in orders page in Restaurants",data)
          console.log("Recieved Orders details");
          console.log(data);
          res.status=200;
          res.data=data;
          callback(null,res)
        }
        else{
          if(data === null){
            res.status=400;
            res.data="No details found";
            callback(null,res);
          }
        }
      });
    }


exports.handle_request = handle_request;
