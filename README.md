# BookBot 🤖

This Node.js Bot will book a gym slot from the [uOttawa Sports Services website](https://geegeereg.uottawa.ca/geegeereg/Start/start.asp) at a given time

## Instructions

Create a <b>myInfo.js</b> file in this format:
```
const myInfo = { 
    accountNumber : yourAccountNumber,
    barcode : yourBarcode,
    classNumber: serialNumberOfActivity
}

module.exports = myInfo
```

Replace `* * * * *` in <b>server.js</b> with  `SECOND(optional) MINUTE HOUR DAY MONTH DAYOFWEEK`. You can leave the parameters you're not using as a `*`.

Then all you have to is sit back and enjoy 😊
