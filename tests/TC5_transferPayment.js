

describe('Validation of Order in payment List', function () {

    this.tags = ['payment']
    var bnz = browser.page.mainScreen.bnzPage();
    var payment = browser.page.mainScreen.paymentPage();
    var bnzMainScreen = bnz.section.mainScreen;
    var paymentMainScreen = payment.section.mainScreen;
    var paymentFromDialog = payment.section.fromDialog;
    var paymentToDialog = payment.section.toDialog;

    var payTransfer = {
        from: "Everyday",
        to: "Bills",
        amount: 500
    }
    it('Navigate to payment Page', function (browser) {
        // get initial values of their money
        //

        bnz.navigate().assert.title('Internet Banking');
        bnz.navigateMainMenu('payOrTransfer');
        payment.expect.section('@fromDialog').to.be.visible;

        paymentMainScreen.waitForElementPresent('@fromBtn')
            .click("@fromBtn")
            .pause(1000); //animation interactable issue
        paymentFromDialog.waitForElementPresent('@accountList').
            ClickListItem("@accountList", payTransfer["from"], "button div p:nth-child(1)");

        paymentMainScreen.waitForElementPresent("@toBtn")
            .click("@toBtn")
            .pause(1000); //animation interactable issue
        paymentToDialog.waitForElementPresent("@accountBtn")
            .click("@accountBtn");
        paymentToDialog.waitForElementPresent("@accountList")
            .ClickListItem("@accountList", payTransfer["to"], "button div p:nth-child(1)")

        paymentMainScreen.waitForElementPresent("@amountTxtBox").sendKeys("@amountTxtBox", payTransfer["amount"]);

        paymentMainScreen.waitForElementPresent("@transferBtn").click("@transferBtn");
        bnzMainScreen.assert.attributeContains("@notification", "class", "show");



    });



});