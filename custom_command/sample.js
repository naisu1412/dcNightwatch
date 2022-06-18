// module.exports = {
//     command: async function (value) {
//         console.log(`test is ${value}`);
//     }
// }


module.exports = class CustomCommand {
    async command(value) {
        let sample;

        console.log(`test is ${value}`);
        
        // try {

        // } catch (err) {
        //     console.error('An error occurred', err);
        //     sample = {
        //         status: -1,
        //         error: err.message
        //     }
        // }

        return sample;
    }
}
