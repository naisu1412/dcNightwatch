describe('Access Payee Page Dialog', function () {

    this.tags = ['payee']
    var bnz = browser.page.mainScreen.bnzPage();

    it('Navigate to Payee Page', function (browser) {
        bnz.navigate().assert.title('Internet Banking');
        bnz.navigateMainMenu('payees');
        browser.waitForElementPresent('.Payees');
    });

});