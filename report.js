const newman = require('newman');
require('dotenv').config();
newman.run({
    collection:`https://api.postman.com/collections/29486551-95dca1dc-b1f1-42cd-be76-8d9a9117a175?access_key=${process.env.ACCESS_KEY}`,
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});