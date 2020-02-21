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
    },
    //insert
    addUser: (req,res)=>{
        let username = req.body.username
        let password = req.body.password
        let name = req.body.name

        userModel.create({
            username : username,
            password : password,
            name : name
        })
        .then(result=>{
            result.save()
        })
        .then(ok =>{
            res.json({
                status: 200,
                message: 'OK',
                body: ok
            })
        })
        .catch(err=>{
            res.json({
                status: 400,
                message: 'Bad Request'
            }).status(400)
        })
    }

}


export default userController;