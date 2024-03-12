const { DOMAIN } = require('../constants'); 
const readlineSync = require('readline-sync');
const { getParams, getItems } = require('../utilities/getParams');

const getIngredient = () => {
    const name = readlineSync.question('Enter Ingredient Name: ');

    fetch(`${DOMAIN}/ingredients?name=${name}`)
        .then(res => res.json())
        .then(data => {
            delete data.id;
            console.log(data)
        })
        .catch(err => console.error(err));
};

const createIngredient = () => {
    let requestBody = getParams(['Name', 'Expiration', 'CurrentAmount', 'Minimum Amount']);

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

const updateIngredient = () => {
    const name = readlineSync.question('Enter name of ingredient: ');
    const column = readlineSync.question('Enter the column to update: ');
    const value = readlineSync.question('Enter new value: ');

    fetch(`${DOMAIN}/ingredients?column=${column}&value=${value}&name=${name}`, {
        method: 'PUT'
    })
        .then(res => res.json())
        .then(data => console.log('Update successful!'))
        .catch(err => console.error(err));
};

const deleteIngredient = () => {
    const name = readlineSync.question('Enter name to delete: ');
    fetch(`${DOMAIN}/ingredients?name=${name}`, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(data => console.log('Delete successful!'))
        .catch(err => console.error(err));
};


const getExpiredIngredients = () => {
    fetch(`${DOMAIN}/ingredients/HL/1`)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));
};

module.exports = {
    getIngredient,
    createIngredient,
    getExpiredIngredients,
    updateIngredient,
    deleteIngredient
};