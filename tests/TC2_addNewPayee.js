

describe('Add a New Payee', function () {

    this.tags = ['payee']
    var bnz = browser.page.mainScreen.bnzPage();
    var payee = browser.page.mainScreen.payeesPage();
    var payeeMainScreen = payee.section.mainScreen;
    var payeeAddDialog = payee.section.addDialog;

    var payeeData1 = {
        name: "AAA PERSONAL FINANCE LIMITED",
        statementDetails: {
            forYou: {
                particular: "t1",
                code: "t1",
                reference: "t1",
            },
            forPayee: {
                particular: "Manu Smith",
                code: "123456",
            },
        },
        additionalDetails: {
            identifier: "test",
            payerName: "Joe Smith"
        }
    }

    it('Navigate to Payee Page', function (browser) {
        bnz.navigate().assert.title('Internet Banking');
        bnz.navigateMainMenu('payees');
        browser.waitForElementPresent('.Payees');

    });

    it('Add a new payee', function (browser) {
        payeeMainScreen.expect.element("@addBtn").to.be.visible;
        payeeMainScreen.click("@addBtn");
        payee.expect.section('@addDialog').to.be.visible;
        payeeAddDialog.waitForElementPresent("@payeeFieldset");

        payeeAddDialog.FieldsetSetRowValue("@payeeFieldset", 2, [payeeData1['name']]);
        browser.keys(browser.Keys.ENTER);
        payeeAddDialog
            .FieldsetSetRowValue("@statementDetailsFieldset", 1, [
                payeeData1['statementDetails']['forYou']['particular'],
                payeeData1['statementDetails']['forYou']['code'],
                payeeData1['statementDetails']['forYou']['reference']
            ])
            .FieldsetSetRowValue("@statementDetailsFieldset", 2, [
                payeeData1['statementDetails']['forPayee']['particular'],
                payeeData1['statementDetails']['forPayee']['code'],
                payeeData1['statementDetails']['forPayee']['reference']
            ]);


    });

    it('Submit the details', function () {
        payeeAddDialog.click("@additionalDetailsBtn").waitForElementPresent("@additionalDetailsFieldset")
            .FieldsetSetRowValue("@additionalDetailsFieldset", 1, [payeeData1['additionalDetails']['identifier']])
            .FieldsetSetRowValue("@additionalDetailsFieldset", 3, [payeeData1['additionalDetails']['payerName']]);
        payeeAddDialog.click("@addBtn");
    })

    it('Validate the result', function () {
        payeeMainScreen.waitForElementPresent("@notification");
        payeeMainScreen.assert.attributeContains("@notification", "class", "show");
        payeeMainScreen.assert.ListContains("@payeesList", payeeData1['name'], ".js-payee-name");
    })

});