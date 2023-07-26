const jwt = require('jsonwebtoken')
/*
    "companyName": "Train Central",
"clientID": "db8a6cdd-44c0-4e6d-8390-b6ca23baf43a",
"clientSecret": "URojeFLVZbWTQLrE",
"ownerName": "susil",
"ownerEmail": "susil@abc.edu",
"rollNo": "202ct137"
*/

exports.protect=(req,res,next)=>{
    console.log(req.headers)
    if(!(req.headers.authorization))
    {
        res.status(500).json({
            message:"You are not authorized to this route.Please login or signup to continue."
        })
    }
    else next();
}

const signToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRETKEY, {
      expiresIn: process.env.JWT_EXP,
    });
  };


exports.signup = (req,res,err)=>{
    if(!(req.body.companyName && req.body.clientID && req.body.clientSecret && req.body.ownerName && req.body.ownerEmail && req.body.rollNo))
    {res.status(500).json({
        message:"Please check the credentials you entered."
    })}
    else{
        const token = signToken(req.body.clientID);
        res.status(200).json({
            token_type:"Bearer",
            access_token:token


        })  
    }
}