const checkCredit = (req)=>{
    return new  Promise((resolve,reject)=>{
        console.log("processing credit check", req.headers["authorization"]);
        // req.headers["authorization"]
        const token = req.headers["authorization"]?.split(" ")[1];
        if (token==="5"){
            resolve();
        }else{
            reject("Not sufficient Credit")
        }
    })

}

const setupCreditCheck = (app, routes) => {
    routes.forEach(r => {
        if (r.creditCheck) {
            app.use(r.url, function (req, res, next) {
                checkCredit(req).then(() => {
                    next();
                }).catch((error) => {
                    res.status(402).send({ error });
                })
            });
        }
    })
}


export default setupCreditCheck;