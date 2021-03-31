const db = require('./config/db');
const battleRepository = require('./repository/review');

const csv = require('csv-parser');
const fs = require('fs');

fs.createReadStream('./reviews.csv')
    .pipe(csv())
    .on('data', (row) => {
        battleRepository.create(row);
    })
    .on('end', () => {
        console.log('CSV file successfully processed')
 });