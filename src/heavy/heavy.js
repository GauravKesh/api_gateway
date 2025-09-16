import cluster from "cluster";
import os from "os";

const numCPUs = os.cpus().length;

if (cluster.isPrimary) {
    console.log(`Primary ${process.pid} running`);
    console.log(`Forking ${numCPUs} workers`);

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

} else {
    console.log(`Worker ${process.pid} started`);

    // CPU-bound load (simulate heavy execution)
    while (true) {
        Math.sqrt(Math.random() * Number.MAX_SAFE_INTEGER);
    }
}
