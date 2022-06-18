const pageCommand = {
    selectAccount: function (account) {

    }
}

module.exports = {
    sections: {
        mainScreen: {
            selector: "body",
            elements: {
                fromBtn: {
                    selector: "button[data-testid='from-account-chooser']"
                },
                toBtn: {
                    selector: "button[data-testid='to-account-chooser']"
                },
                amountTxtBox: {
                    selector: "input[name='amount']"
                },
                transferBtn: {
                    selector: "button[type='submit'][data-monitoring-label='Transfer Form Submit']"
                }
            }
        },
        fromDialog: {
            selector: ".ReactModalPortal",
            elements: {
                payeeFieldset: { selector: "#apm-form .Fieldset:nth-child(1)" },
                accountList: { selector: "ul" },
                searchTextbox: { selector: "input[data-monitoring-label='Transfer Form Search']" }
            }
        },
        toDialog: {
            selector: ".ReactModalPortal",
            elements: {
                accountBtn: { selector: "li[data-testid='to-account-accounts-tab']" },
                accountList: { selector: "div[data-testid='to-accounts-list-results'] ul" },
            }
        }
    }
}