module.exports= {
    apps: [
        {
            name: "entry",
            script: "entry.js",
            instances: "max",
            exec_mode: "cluster"
        },
        {
            name: "heavy",
            script: "src/heavy/heavy.js",
            instances: "max",
            exec_mode: "cluster"
        }
    ]
};
