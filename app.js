import express from 'express'
import os from 'os'

const app = express()
const port = 3210

app.get('/memory-usage', (req, res) => {
    const totalMemory = (os.totalmem())/1000000000;
    const freeMemory = (os.freemem())/1000000000;
    const usedMemory = totalMemory - freeMemory;

    const memoryUsage = {
        totalMemory,
        freeMemory,
        usedMemory,
    };

    res.json(memoryUsage);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})