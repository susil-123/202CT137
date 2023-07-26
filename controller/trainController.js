const data = require('./../data/train-data.json')

exports.getData = (req,res,err)=>{
    try{res.status(200).json({
        data:{
            data
        }
    })}
    catch(err){
        res.status(500).json({
            error:err.message
        })
    }
}

