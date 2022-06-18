const util = require('util');
/**
 * Analyzes which specific class
*/
exports.assertion = function (elem, order, classModifier = "", msg = "") {
    let DEFAULT_MSG = 'Testing if %s is <%s>.';

    this.message = msg || util.format(DEFAULT_MSG, elem['selector'], order);

    this.expected = function () {
        return order;
    };

    this.pass = function (value) {
        let isOrdered = false;
        let items = value.join('~');
        let sortedArr = [...value];

        if (order.toLowerCase() === "ascending")
            isOrdered = sortedArr.sort().join('~') === items;


        if (order.toLowerCase() === "descending")
            isOrdered = sortedArr.sort().reverse().join('~') === items;


        console.log(isOrdered, " is the value", items)
        return isOrdered;
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
