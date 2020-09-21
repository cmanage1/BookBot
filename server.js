const cron = require("node-cron");
const home = require('./minto');
const express = require("express");
const info = require('./myInfo')

app = express();
console.log("Server is now running, you can go to sleep now :)")

// schedule tasks to be run on the server
//minute hour dayOfMonth month dayOfWeek
cron.schedule("40 09 * * *", function () {
    (async () => {
        console.log("Attempting to book now...");

        await home.initalize();

        await home.login(info.accountNumber.toString(), info.barcode.toString());

        await home.selectTimeSlot(info.classNumber.toString());
        console.log("Success!!!")

    })();       
});


app.listen("3128");



