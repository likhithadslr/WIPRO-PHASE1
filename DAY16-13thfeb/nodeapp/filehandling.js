const fs=require('fs');

fs.readFile('testdata.txt', 'utf-8', (err,data) => {
    if (err) throw err;
    console.log(data);
});


fs.writeFile('testdata.txt', 'Hello world!! ', (err) => {
    if (err) throw err;
    console.log('File has been saved');
});


fs.appendFile('testdata.txt', 'Append content', (err) => {
    if (err) throw err;
    console.log('Content appended!!');
});
