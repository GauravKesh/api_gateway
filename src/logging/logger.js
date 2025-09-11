import morgan from "morgan";


const logger  = (app)=>{
    app.use(morgan('combined'))
}



export default logger;