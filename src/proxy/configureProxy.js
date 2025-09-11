import { createProxyMiddleware } from "http-proxy-middleware";


const ConfigureProxy = (app,ROUTES)=>{
    ROUTES.forEach(r => {
        app.use(r.url, createProxyMiddleware(r.proxy));
});
}


export default ConfigureProxy;