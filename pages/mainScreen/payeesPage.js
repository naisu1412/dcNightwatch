module.exports = {
    sections: {
        mainScreen: {
            selector: "body",
            elements: {
                notification: {
                    selector: "#notification .inner"
                },
                payeesList: {
                    selector: ".CustomSection .List"
                },
                searchBarTxtBox: {
                    selector: "input[placeholder='Search payees']"
                },
                addBtn: {
                    selector: ".js-add-payee"
                }
            }
        },
        addDialog: {
            selector: ".addMaintainPayeeView",
            elements: {

                payeeFieldset: { selector: "#apm-form .Fieldset:nth-child(1)" },
                statementDetailsFieldset: { selector: "#apm-form .Fieldset:nth-child(3)" },
                additionalDetailsBtn: { selector: ".js-additional-details" },
                additionalDetailsFieldset: { selector: "#apm-form .Fieldset:nth-child(2)" },
                addBtn: { selector: ".js-submit" },
                errorHeader: {selector: ".error-header"}
                //  account: { selector: "" },
                // statementForYouParticular: { selector: "" },
                // statementForYouCode: { selector: "" },
                // statementForYouReference: { selector: "" },
                // statementForParticular: { selector: "" },
                // statementForCode: { selector: "" },
                // statementForReference: { selector: "" },
                // identifier: { selector: "" },
                // payerName: { selector: "" },
            }
        }
    }
}