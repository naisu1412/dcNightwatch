

const pageCommand = {

    navigateMainMenu: function (item) {
        var bnz = browser.page.mainScreen.bnzPage();
        var bnzMainScreen = bnz.section.mainScreen;
        var bnzMainMenu = bnz.section.mainMenu;

        bnzMainScreen.waitForElementPresent('@menuBtn').click('@menuBtn');
        bnz.expect.section('@mainMenu').to.be.visible;
        bnzMainMenu.click(`@${item}`);
        // bnzMainScreen.waitForElementNotPresent('@menuBtn');

        return this;
    }
}

module.exports = {
    url: 'https://www.demo.bnz.co.nz/client/',
    commands: pageCommand,
    sections: {
        mainScreen: {
            selector: "body",
            elements: {
                menuBtn: {
                    selector: ".MenuButton",
                },
                notification: {
                    selector: "#notification .inner"
                },
            }
        },
        mainMenu: {
            selector: ".MainMenu",
            elements: {
                payOrTransfer: {
                    selector: ".js-main-menu-paytransfer"
                },
                payees: {
                    selector: ".js-main-menu-payees"
                },
                // ... add other buttons below
            }
        },
        transactionPanel: {
            selector: ".transactions-panel",
        }
    }


};
