const { Task } = require("../Model/models");


let User=async(req,res)=>{
    const {task,descripton,startTime,endTime}=req.body;
        try {
             user = new Task({task,descripton,startTime,endTime})
            await user.save()
            return res.status(200).json({ message: "save succesfully......" })
        } catch (error) {
            return res.json(error);
        }
}


let userDetails=async(req,res)=>{
    try {
        const data=await Task.find({})
        return res.json(data)
    } catch (error) {
        res.json(error)
    }
}

let dlt=(req,res)=>{
    const id= req.params.id;
    console.log(id)
    Task.findByIdAndDelete({_id: id})
    .then(res=>res.json(res))
    .catch(err=>res.json(err))
}

// let stsget=async(req,res)=>{
//     const id =req.params.id;
//    await Task.findById({_id:id})
//     .then(user=>res.json(user))
//     .catch(err=>res.json(err))
// }

let update = async (req, res) => {
  const id = req.params.id;
  try {
    const updated = await Task.findByIdAndUpdate(
      { _id: id },
      { complete: req.body.complete },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// let getupdate=async(req,res)=>{
//     const id =req.params.id;
//    await Task.findById({_id:id})
//     .then(user=>res.json(user))
//     .catch(err=>res.json(err))
// }


module.exports={User,userDetails,dlt,update}