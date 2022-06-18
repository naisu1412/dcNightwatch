// module.exports = {
//     command: async function (value) {
//         console.log(`test is ${value}`);
//     }
// }

/**
 * Sets value in a specific row in Fieldset
 * 
 * elem[selector] - Fieldset selector
 * row[int] - row number you want to target
 * values[array] - values for each cell in the row, specify in the correct order
*/
module.exports = class CustomCommand {
    async command(elem, row, values) {
        let FieldsetSetRowValue;
        let rowSelector = `${elem['selector']} .row:nth-child(${row}) input`;

        try {
            FieldsetSetRowValue = this.api.elements("css selector", rowSelector, (res) => {
                res['value'].forEach(async (cell, i) => {
                    if (values[i]) {
                        console.log(`--- Running on ${cell} setting value ${values[i]} | with row ${rowSelector} ---`)

                        this.api.click(cell);
                        let attribs = await this.api.getAttribute('css selector', cell, 'id');

                        console.warn(attribs);

                        if (`${attribs}`.includes("Combobox")) {
                            _selectValue(this.api, cell);
                        } else {
                            _setText(this.api, cell);
                        }
                    }

                    function _setText(browser, cell) {
                        browser.sendKeys(cell, values[i]);
                    }

                    function _selectValue(browser, cell) {
                        let item = `${elem['selector']} span[title='${values[i]}']`;
                        browser.sendKeys(cell, values[i].substring(0, 1));
                        browser.click(item);
                    }
                });
                this.api.pause(100);
            });
        } catch (err) {
            console.error('An error occurred', err);
            FieldsetSetRowValue = {
                status: -1,
                error: err.message
            }
        }

        return FieldsetSetRowValue;
    }
}
