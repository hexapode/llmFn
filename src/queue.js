function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function execQueue(queue, concurrency) {
    let result = [];
    let running = 0;
    
    let succeded = 0;
    let current = 0;
    while (succeded < queue.length) { 
        if (running < concurrency && current < queue.length) { 
            running++;
            let worker = async function() {
                let fn = queue[current].task;
                let args = queue[current].args;
                let taskId = current;
                try {
                    let res = await fn(...args);

                    result[taskId] = res;
                    running--;
                    succeded++;
                }
                catch (e) {
                    console.log(e);
                    console.log("WITH", args)
                    // requeue
                     queue.push({
                        task: fn,
                        args: args
                    })
                    running--;
                    succeded++;
                }
                
            }
            worker();
            current++;
        }
        else {
            await sleep(100);
        }
    }
    return result;
}

module.exports = {
    execQueue
}