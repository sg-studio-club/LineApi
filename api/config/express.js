import express from 'express'
import morgan from 'morgan'
import config from './config'
import sequelize from '../config/database'
import userModel from '../models/user.model'
import userRouter from '../router/user.route'
import bodyParser from 'body-parser'

const createApp = {
    setup:()=>{
        const app = express()

        if(process.env.NODE_ENV == "development"){
            app.use(morgan("dev"))      //Developement
        }else{
            app.use(morgan("combined")) //Production
        }


        //Create conncetion database
        sequelize.authenticate().then().catch(err=>{
            console.log('error',err)
        })

        //use body-parser
        app.use(bodyParser.urlencoded({extended: false}))

        //Router
        app.use(userRouter)

        //Not found in router
        app.use((req,res,next)=>{
            res.json({
                'status': 404,
                'message': "Page not found"
            }).status(404)
        })

        //Database
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