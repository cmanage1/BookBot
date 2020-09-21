const puppeteer = require('puppeteer');

const BASE_URL = 'https://geegeereg.uottawa.ca/geegeereg/Start/start.asp';

const minto = {
    browser: null,
    page: null,

    initalize: async () => {

        minto.browser = await puppeteer.launch({
            headless: false
        });

        minto.page = await minto.browser.newPage();

    },

    login: async (loginID, accountPIN) => {

        
        await minto.page.goto(BASE_URL, { waitUntil: 'networkidle2' });

        /*click login popup button*/
        await minto.page.click('[class="focus-parent ui-state-active ui-corner-all link-button ajax-request need-focus-pageobject"]');
        
        await minto.page.waitFor(3000);

        /*write loginID and AccountPIN*/
        await minto.page.type('input[name="ClientBarcode"]', loginID, {delay: 200})
        await minto.page.type('input[name="AccountPIN"]', accountPIN, { delay: 200 })
        await minto.page.click('input[name="Enter"]');

        await minto.page.waitFor(1000);

        /* Navigate to activities*/
        await minto.page.click('[title="Click here to go to the Activities page where you can search and register for activities"]');
        await minto.page.waitFor(1000);

        await minto.page.click('[title="Click to see the Activities under Fitness and  Wellness."]');

    },

    selectTimeSlot: async( activityNumber) => {
        await minto.page.type(' input[name="cbarcode"] ', activityNumber, {delay:500} );
        await minto.page.click('[ id="barcode-search-link" ]') ;
        await minto.page.waitFor(8000);

        await minto.page.click('[title="Click here to add the corresponding course to your basket. Once in your basket you can continue shopping or go to checkout and finalized your registration"]');
        await minto.page.waitFor(4000);
        await minto.page.click( '[title = "Click here to go to the checkout and pay for the items in your shopping cart."]');

        await minto.page.waitFor(4000);
        await minto.page.click('[title = "Click here to complete transaction and proceed to transaction confirmation page."]');

        await minto.page.waitFor(2000);
        await minto.page.click('[title = "Click to agree with the Program Liability Waiver"]');
        
    }
    
}

module.exports = minto;