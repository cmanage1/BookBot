# BookBot 🤖

This Puppeteer Bot will book a gym slot from the [uOttawa Sports Services website](https://geegeereg.uottawa.ca/geegeereg/Start/start.asp) at a given time

## Instructions

1. Change the variables  `yourAccountNumber`, `yourBarcode`, and `serialNumberOfActivity` in <b>myInfo.js</b> with your own information.

2. Replace `* * * * *` in <b>server.js</b> with  `SECOND(optional) MINUTE HOUR DAY MONTH DAYOFWEEK`. You can leave the parameters you're not using as a `*`.

3. Navigate to your project directory in Terminal and run `node server.js`. You will have to keep this server running over the time you set so leave your computer running. Make sure to disable any settings that turn your computer off automatically. 

4. Sit back and enjoy 😊


## Errors

If you don't have node.js installed, please go here: https://nodejs.org/en/

If you get any other error please mark it as an issue on this repository.
