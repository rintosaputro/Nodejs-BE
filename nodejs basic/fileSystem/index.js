const fs = require('fs')
const {resolve} = require('path')

const fileReadCallback = (error, data) => {
    if (error) {
        console.log('Gagal membaca data')
        return
    }
    console.log(data)
}

fs.readFile(resolve(__dirname, 'file.txt'), 'utf-8', fileReadCallback)