const util = require('util');
/**
 * Analyzes which specific class
*/
exports.assertion = function (elem, expected, classModifier = "", msg = "") {
    let DEFAULT_MSG = 'Testing if attribute %s of <%s> contains "%s".';

    this.message = msg || util.format(DEFAULT_MSG, elem['selector'], expected);

    this.expected = function () {
        return expected;
    };

    this.pass = function (value) {
        return value.includes(expected);
    };

    this.value = function (result) {
        return result.value;
    };

    this.command = function (callback) {
        let itemsSelector = `${elem['selector']} li ${classModifier}`;
        let items = [];
        return this.api.elements("css selector", itemsSelector, res => {
            console.log(itemsSelector)
            res.value.forEach((itemElem, i) => {
                this.api.getText(itemElem, function (itemText) {
                    items.push(itemText.value);
                    if (res.value.length - 1 === i) {
                        return callback({
                            value: items
                        });
                    }
                }
                );
            })
        });

    };

};
