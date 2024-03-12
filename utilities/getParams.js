const readlineSync = require('readline-sync');

const getParams = (params) => {
    const output = {};
    params.forEach(param => {
        value = readlineSync.question(`Enter ${param}: `);
        output[param] = value;
    });
    return output;
}

const getItems = () => {
    let output = [];
    while (true) {
        const item = readlineSync.question(`Enter item: `);
        const quantity = readlineSync.question(`Enter quantity: `);

        output = [...output, { [item]: quantity }];

        const ongoing = readlineSync.question(`Continue? (Y/N): `);
        if (ongoing == 'N') {
            break;
        }
    }
    return output;
}

module.exports = {getParams, getItems};