const { DOMAIN } = require('../constants'); 
const readlineSync = require('readline-sync');
const { getParams, getItems } = require('../utilities/getParams');

const getMeal = () => {
    const SKU = readlineSync.question('Enter SKU: ');

    fetch(`${DOMAIN}/meals?sku=${SKU}`)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));
};

const createMeal = () => {
    let requestBody = getParams(['Sku', 'Name', "Desc", "Diet"]);
    console.log('Enter IngredientName as Item and Quantity as value');
    const Items = getItems();
    requestBody = {...requestBody, "Ingredients": Items };
    console.log(requestBody);
    fetch(`${DOMAIN}/meals`, {
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

const updateMeal = () => {
    const sku = readlineSync.question('Enter sku: ');
    const column = readlineSync.question('Enter the column to update: ');
    const value = readlineSync.question('Enter new value: ');

    fetch(`${DOMAIN}/meals?column=${column}&value=${value}&sku=${sku}`, {
        method: 'PUT'
    })
        .then(res => res.json())
        .then(data => console.log('Update successful!'))
        .catch(err => console.error(err));
};

const deleteMeal = () => {
    const sku = readlineSync.question('Enter sku to delete: ');
    fetch(`${DOMAIN}/meals?sku=${sku}`, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(data => console.log('Delete successful!'))
        .catch(err => console.error(err));
};

const getPopularMeals = () => {
    const timeframe = readlineSync.question('Enter a timeframe (# minutes, hours, days, etc.): ');
    const limit = readlineSync.question('Enter the top number of meals: ');

    fetch(`${DOMAIN}/meals/HL/1?timeframe=${timeframe}&limit=${limit}`)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));
};

module.exports = {
    getMeal,
    createMeal,
    getPopularMeals,
    updateMeal,
    deleteMeal
};