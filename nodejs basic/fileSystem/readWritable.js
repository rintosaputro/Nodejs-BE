const fs = require('fs')

const readableStream = fs.createReadStream('./input.txt', {highWaterMark: 15})

const writableStream = fs.createWriteStream('output.txt')

readableStream.on('readable', () => {
    try {
        const line = readableStream.read() + '\n'

        process.stdout.write(line)
        writableStream.write(line)
        
    } catch (error) {

    }
})

readableStream.on('end', () => {
    writableStream.end()
})
