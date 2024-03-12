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
    getAllBatches,
    createBatch,
    updateBatch,
    deleteBatch,
    getBatchesInInterval
} = require('./batchQueries')

const {
    getOrder,
    getAllOrders,
    createOrder,
    getActiveOrders,
    updateOrder,
    deleteOrder
} = require('./orderQueries')

const {
    getMeal,
    getAllMeals,
    createMeal,
    getPopularMeals,
    updateMeal,
    deleteMeal
} = require('./mealQueries')

const {
    getIngredient,
    getAllIngredients,
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
    getAllBatches,
    createBatch,
    getOrder,
    getAllOrders,
    createOrder,
    getActiveOrders,
    getMeal,
    getAllMeals,
    createMeal,
    getPopularMeals,
    updateBatch,
    deleteBatch,
    getIngredient,
    getAllIngredients,
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