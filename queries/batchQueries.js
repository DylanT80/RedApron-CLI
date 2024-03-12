const { DOMAIN } = require('../constants');
const readlineSync = require('readline-sync');
const { getParams, getItems } = require('../utilities/getParams');

const getBatch = () => {
    const batchnumber = readlineSync.question('Enter batchnumber: ');

    fetch(`${DOMAIN}/batch?batchnumber=${batchnumber}`)
        .then(res => res.json())
        .then(data => {
            delete data.id;
            delete data.Batch.id;
            console.log(data)
        })
        .catch(err => console.error(err));
};

const getAllBatches = () => {
    fetch(`${DOMAIN}/batch/all`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(err => console.error(err));
}

const createBatch = () => {
    let requestBody = getParams(['BatchNumber', 'VendorName']);
    console.log('Enter IngredientName as Item and Quantity as value');
    const Items = getItems();
    requestBody = { ...requestBody, "Items": Items };
    console.log(requestBody);
    fetch(`${DOMAIN}/batch`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    })
        .then(res => res.json())
        .then(data => console.log('Creation successful!'))
        .catch(err => console.error(err));
};

const updateBatch = () => {
    const batchnumber = readlineSync.question('Enter batchnumber to update: ');
    const column = readlineSync.question('Enter the column to update: ');
    const value = readlineSync.question('Enter new value: ');

    fetch(`${DOMAIN}/batch?column=${column}&value=${value}&batchnumber=${batchnumber}`, {
        method: 'PUT'
    })
        .then(res => res.json())
        .then(data => console.log('Update successful!'))
        .catch(err => console.error(err));
};

const deleteBatch = () => {
    const batchnumber = readlineSync.question('Enter batchnumber to delete: ');
    fetch(`${DOMAIN}/batch?batchnumber=${batchnumber}`, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(data => console.log('Delete successful!'))
        .catch(err => console.error(err));
};

const getBatchesInInterval = () => {
    const startDate = readlineSync.question('Enter Start Date: ');
    const endDate = readlineSync.question('Enter End Date: ');

    fetch(`${DOMAIN}/batch/HL/1?startDate=${startDate}&endDate=${endDate}`)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));
};

module.exports = {
    getBatch,
    getAllBatches,
    createBatch,
    updateBatch,
    deleteBatch,
    getBatchesInInterval
};