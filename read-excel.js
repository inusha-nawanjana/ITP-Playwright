const XLSX = require('xlsx');
const path = require('path');

const workbook = XLSX.readFile(path.join(__dirname, 'IT23857162.xlsx'));
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

console.log('Sheet Names:', workbook.SheetNames);
console.log('\nData from first sheet:');
data.forEach((row, index) => {
    console.log(`Row ${index}: ${JSON.stringify(row)}`);
});
