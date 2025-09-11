import { createProxyMiddleware } from "http-proxy-middleware";


const ConfigureProxy = (APP,ROUTES)=>{
    ROUTES.forEach(r => {
        APP.use(r.url, createProxyMiddleware(r.proxy));
});
}


export default ConfigureProxy;