# BookBot 🤖

This Node.js Bot will book a gym slot from the [uOttawa Sports Services website](https://geegeereg.uottawa.ca/geegeereg/Start/start.asp) at a given time

## Instructions

1. Create a <b>myInfo.js</b> file in this format:
```
const myInfo = { 
    accountNumber : yourAccountNumber,
    barcode : yourBarcode,
    classNumber: serialNumberOfActivity
}

module.exports = myInfo
```

2. Replace `* * * * *` in <b>server.js</b> with  `SECOND(optional) MINUTE HOUR DAY MONTH DAYOFWEEK`. You can leave the parameters you're not using as a `*`.

3. Then navigate to your project directory in Terminal and run `node server.js`. You will have to keep this server running over the time you set so leave your computer running.

4. Sit back and enjoy 😊


## Errors

If you don't have node.js installed, please go here: https://nodejs.org/en/

If you get any other error please mark it as an issue on this repository.
