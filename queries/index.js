const {
    getCustomer,
    createCustomer,
    updateCustomer,
    deleteCustomer,
    customersInStateOf,
    getAllCustomers
} = require('./customerQueries');

const {
    getBatch,
    createBatch,
    updateBatch,
    deleteBatch,
    getBatchesInInterval
} = require('./batchQueries')

const {
    getOrder,
    createOrder,
    getActiveOrders,
    updateOrder,
    deleteOrder
} = require('./orderQueries')

const {
    getMeal,
    createMeal,
    getPopularMeals,
    updateMeal,
    deleteMeal
} = require('./mealQueries')

const {
    getIngredient,
    createIngredient,
    getExpiredIngredients,
    updateIngredient,
    deleteIngredient
} = require('./ingredientQueries')

module.exports = {
    getCustomer,
    createCustomer,
    updateCustomer,
    deleteCustomer,
    customersInStateOf,
    getBatch,
    createBatch,
    getOrder,
    createOrder,
    getActiveOrders,
    getMeal,
    createMeal,
    getPopularMeals,
    updateBatch,
    deleteBatch,
    getIngredient,
    createIngredient,
    getExpiredIngredients,
    updateMeal,
    deleteMeal,
    updateOrder,
    deleteOrder,
    updateIngredient,
    deleteIngredient,
    getBatchesInInterval,
    getAllCustomers
}