const { DOMAIN } = require('../constants'); 
const readlineSync = require('readline-sync');
const { getParams } = require('../utilities/getParams');

const getCustomer = () => {
    const email = readlineSync.question('Enter email: ');

    fetch(`${DOMAIN}/customers?email=${email}`)
        .then(res => res.json())
        .then(data => {
            delete data.id;
            console.log(data)
        })
        .catch(err => console.error(err));
};

const getAllCustomers = () => {
    fetch(`${DOMAIN}/customers/all`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(err => console.error(err));
}

const createCustomer = () => {
    const requestBody = getParams(['firstName', 'lastName', 'email', 'phoneNumber', 'address', 'city', 'state', 'plan']);

    console.log(requestBody);
    fetch(`${DOMAIN}/customers`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    })
        .then(res => res.json())
        .then(data => console.log('Creation successful!'))
        .catch(err => console.error(err));
}

const updateCustomer = () => {
    const email = readlineSync.question('Enter the email of the customer to update: ');
    const column = readlineSync.question('Enter the column to update: ');
    const value = readlineSync.question('Enter the new value: ');

    fetch(`${DOMAIN}/customers?column=${column}&value=${value}&email=${email}`, {
        method: 'PUT'
    })
        .then(res => res.json())
        .then(data => console.log('Update successful!'))
        .catch(err => console.error(err));

};

const deleteCustomer = () => {
    const email = readlineSync.question('Enter email of the customer to delete: ');
    fetch(`${DOMAIN}/customers?email=${email}`, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(data => console.log('Delete successful!'))
        .catch(err => console.error(err));
};


const customersInStateOf = () =>{
    const state = readlineSync.question('Enter State Abbreviation: ');

    fetch(`${DOMAIN}/customers/HL/1?state=${state}`)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));

};


module.exports = {
    getCustomer,
    createCustomer,
    updateCustomer,
    deleteCustomer,
    customersInStateOf,
    getAllCustomers
};