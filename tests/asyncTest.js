module.exports = {
  
  'demo test async': async function (browser) {
    // // get the available window handles
    // const result = await browser.windowHandles();
    // console.log('result', result);

    // // switch to the second window
    // // await is not necessary here since we're not interested in the result
    // browser.switchWindow(result.value[1]);

    browser
        .waitForElementVisible('body')
        .sample("lol")
        .end();
  }
};