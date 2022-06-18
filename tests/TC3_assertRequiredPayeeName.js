
describe('Validation for the Payee Errors', function () {

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

    it('Add a new empty payee', function (browser) {
        payeeMainScreen.expect.element("@addBtn").to.be.visible;
        payeeMainScreen.click("@addBtn");
        payee.expect.section('@addDialog').to.be.visible;
        payeeAddDialog.waitForElementPresent("@payeeFieldset");
        payeeAddDialog.click("@addBtn");
    });


    it('Assert the errors are present', function () {
        payeeAddDialog.waitForElementPresent("@errorHeader");
        payeeAddDialog.assert.textEquals('@errorHeader', 'A problem was found. Please correct the field highlighted below.');
    })

    it('Add the Required Fields', function(){
        payeeAddDialog.FieldsetSetRowValue("@payeeFieldset", 2, [payeeData1['name']]);
    })

    it('Assert the errors are not present', function () {
        payeeAddDialog.waitForElementNotPresent("@errorHeader");
    })

});