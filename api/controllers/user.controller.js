import userModel from '../models/user.model'

const userController = {
    getUser : (req,res)=>{
        userModel
        .findAll()
        .then(result=>{
            res.json(result)
        })
        .catch(err =>{
            console.log(err)
        })
    }
}


export default userController;