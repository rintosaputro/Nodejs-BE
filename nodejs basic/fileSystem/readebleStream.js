const fs = require('fs')

const readableStream = fs.createReadStream('./file.txt', {highWaterMark: 10})

readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`)
    } catch (err) {
        
    }
})

readableStream.on('end', () => {
    console.log('Done')
})