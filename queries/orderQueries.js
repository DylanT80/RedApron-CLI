const { DOMAIN } = require('../constants');
const readlineSync = require('readline-sync');
const { getParams, getItems } = require('../utilities/getParams');

const getOrder = () => {
    const ordernumber = readlineSync.question('Enter Order Number: ');

    fetch(`${DOMAIN}/orders?ordernumber=${ordernumber}`)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));
};

const getAllOrders = () => {
    fetch(`${DOMAIN}/orders/all`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(err => console.error(err));
}

const createOrder = () => {
    let requestBody = getParams(['OrderNumber', 'Email']);
    console.log('Enter SKU as Item and Quantity as value');
    const Items = getItems();
    requestBody = { ...requestBody, "Items": Items };
    console.log(requestBody);
    fetch(`${DOMAIN}/orders`, {
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

const getActiveOrders = () => {
    fetch(`${DOMAIN}/orders/HL/1`)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));
};

const deleteOrder = () => {
    const ordernumber = readlineSync.question('Enter Order Number to delete: ');

    fetch(`${DOMAIN}/orders?ordernumber=${ordernumber}`, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(data => console.log('Delete successful!'))
        .catch(err => console.error(err));
};

const updateOrder = () => {
    const ordernumber = readlineSync.question('Enter Order Number to update: ');
    const column = readlineSync.question('Enter the column to update: ');
    const value = readlineSync.question('Enter the new value: ');

    fetch(`${DOMAIN}/orders?column=${column}&value=${value}&ordernumber=${ordernumber}`, {
        method: 'PUT'
    })
        .then(res => res.json())
        .then(data => console.log('Update successful!'))
        .catch(err => console.error(err));
};


module.exports = {
    getOrder,
    getAllOrders,
    createOrder,
    getActiveOrders,
    deleteOrder,
    updateOrder
};