module.exports = class CustomCommand {
    async command(elem, value, modifier = "") {
        let ClickListItem;
        try {
            let item = `${elem['selector']} li ${modifier}`
            this.api.elements("css selector", item, res => {
                res['value'].forEach(e => {
                    this.api.elementIdText(e[Object.keys(e)[0]], text => {
                        if (text.value === value) {
                            this.api.elementIdClick(e[Object.keys(e)[0]]);
                        }
                    })
                });
            })
        } catch (err) {
            console.error('An error occurred', err);
            ClickListItem = {
                status: -1,
                error: err.message
            }
        }
        return ClickListItem;
    }
}
