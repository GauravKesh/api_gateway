const ROUTE = [
    // {
    //     url: "/api/auth/login",
    //     creditCheck: false,
    //     auth: false,
    //     proxy: {
    //         target: "https://takeuforward.org/",
    //         changeOrigin: true,
    //         pathRewrite: {
    //             ['^/api/auth/login']: ''
    //         }
    //     }
    // },
    {
        url:"/hobby",
        creditCheck:true,
        auth:false,
        proxy:{
            target:"https://e-patrol.onrender.com/",
            changeOrigin:true,
            pathRewrite:{
                ['^/hobby']:''
            }
        }
    },{
        url: "/premium",
        creditCheck: true,
        auth:true,
        proxy: {
            target: "https://takeuforward.org/",
            changeOrigin: true,
            pathRewrite: {
                ['^/premium']: ''
            }
        }
    }
]





export default ROUTE;