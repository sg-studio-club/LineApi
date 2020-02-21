import express from 'express'
import morgan from 'morgan'
import config from './config'

const createApp = {
    setup:()=>{
        const app = express()

        if(process.NODE_ENV == "development"){
            app.use(morgan("dev"))
        }else{
            app.use(morgan("combined"))
        }

        app.use((req,res,next)=>{
            res.json({
                'status': 404,
                'message': "Page not found"
            }).status(404)
        })


        app.listen(config.port,()=>{
        console.log("application started at port"+config.port)
        })
    }
}
export default createApp