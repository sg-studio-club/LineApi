import express from 'express'
import morgan from 'morgan'
import config from './config'
import sequelize from '../config/database'
import userModel from '../models/user.model'
import userRouter from '../router/user.route'

const createApp = {
    setup:()=>{
        const app = express()

        if(process.NODE_ENV == "development"){
            app.use(morgan("dev"))
        }else{
            app.use(morgan("combined"))
        }


        //Create conncetion
        sequelize.authenticate().then().catch(err=>{
            console.log('error',err)
        })

        app.use(userRouter)

        //Not find
        app.use((req,res,next)=>{
            res.json({
                'status': 404,
                'message': "Page not found"
            }).status(404)
        })

        sequelize.sync({
            //If force is true, it will force to drop and create table new
            force:false
        })


        app.listen(config.port,()=>{
        console.log("application started at port"+config.port)
        })
    }
}
export default createApp