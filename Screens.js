const Screen = require('./Screen');

const {
    getCustomer,
    createCustomer,
    updateCustomer,
    deleteCustomer,
    customersInStateOf,
    createBatch,
    getBatch,
    getAllBatches,
    createOrder,
    getOrder,
    getAllOrders,
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
    updateIngredient,
    deleteIngredient,
    updateOrder,
    deleteOrder,
    getBatchesInInterval,
    getAllCustomers
} = require('./queries');

/**
 * CRUD
 */
// Customers
const GetCustomerFunction = new Screen('Get a Customer', null, getCustomer);
const CreateCustomerFunction = new Screen('Create a Customer', null, createCustomer);
const UpdateCustomerFunction = new Screen('Update a customer', null, updateCustomer);
const DeleteCustomerFunction = new Screen('Delete a customer', null, deleteCustomer);
const CustomersCRUDMenu = new Screen('Customers', [CreateCustomerFunction, GetCustomerFunction, UpdateCustomerFunction, DeleteCustomerFunction]);

// Batches 
const GetBatchFunction = new Screen('Get a Batch', null, getBatch);
const UpdateBatchFunction = new Screen('Update a Batch', null, updateBatch);
const CreateBatchFunction = new Screen('Create a Batch', null, createBatch);
const DeleteBatchFunction = new Screen('Delete a Batch', null, deleteBatch);
const BatchesCRUDMenu = new Screen('Batches', [CreateBatchFunction, GetBatchFunction, UpdateBatchFunction, DeleteBatchFunction]);

// Orders
const GetOrderFunction = new Screen('Get a Order', null, getOrder);
const CreateOrderFunction = new Screen('Create a Order', null, createOrder);
const UpdateOrderFunction = new Screen('Update a Order', null, updateOrder);
const DeleteOrderFunction = new Screen('Delete a Order', null, deleteOrder);
const OrderCRUDMenu = new Screen('Orders', [CreateOrderFunction, GetOrderFunction, UpdateOrderFunction, DeleteOrderFunction]);

// MealKits
const GetMealFunction = new Screen('Get a MealKit', null, getMeal);
const CreateMealFunction = new Screen('Create a MealKit', null, createMeal);
const UpdateMealFunction = new Screen('Update a MealKit', null, updateMeal);
const DeleteMealFunction = new Screen('Delete a MealKit', null, deleteMeal);
const MealsCRUDMenu = new Screen('MealKits', [CreateMealFunction, GetMealFunction, UpdateMealFunction, DeleteMealFunction]);

// Ingredients
const GetIngredientFunction = new Screen('Get an Ingredient', null, getIngredient);
const CreateIngredientFunction = new Screen('Create an Ingredient', null, createIngredient);
const UpdateIngredientFunction = new Screen('Update an Ingredient', null, updateIngredient);
const DeleteIngredientFunction = new Screen('Delete an Ingredient', null, deleteIngredient);
const IngredientsCRUDMenu = new Screen('Ingredients', [CreateIngredientFunction, GetIngredientFunction, UpdateIngredientFunction, DeleteIngredientFunction]);

/**
 * High Level
 */
// Customers
const CustomersInStateOfFunction = new Screen('Get Customers By State', null, customersInStateOf);
const GetAllCustomersFunction = new Screen('Get All Customers', null, getAllCustomers);
const CustomersHLMenu = new Screen('Customers', [CustomersInStateOfFunction, GetAllCustomersFunction]);

// Batches
const GetBatchesInIntervalFunction = new Screen('Get Batches in an Interval', null, getBatchesInInterval);
const GetAllBatchesFunction = new Screen('Get All Batches', null, getAllBatches);
const BatchesHLMenu = new Screen('Batches', [GetBatchesInIntervalFunction, GetAllBatchesFunction]);

// MealKits
const GetPopularMealsFunction = new Screen('Get Popular Meals', null, getPopularMeals);
const GetAllMealsFunction = new Screen('Get All Meals', null, getAllMeals);
const MealsHLMenu = new Screen('MealKits', [GetPopularMealsFunction, GetAllMealsFunction]);

// Orders
const GetActiveOrdersFunction = new Screen('Get Active Orders', null, getActiveOrders);
const GetAllOrdersFunction = new Screen('Get All Orders', null, getAllOrders);
const OrdersHLMenu = new Screen('Orders', [GetActiveOrdersFunction, GetAllOrdersFunction]);

// Ingredients
const getExpiredIngredientsFunction = new Screen('Get Expired Ingredients', null, getExpiredIngredients);
const GetAllIngredientsFunction = new Screen('Get all Ingredients', null, getAllIngredients);
const IngredientsHLMenu = new Screen('Ingredients', [getExpiredIngredientsFunction, GetAllIngredientsFunction]);

// Sub Menus
const CRUDMenu = new Screen('CRUD Menu', [CustomersCRUDMenu, BatchesCRUDMenu, OrderCRUDMenu, MealsCRUDMenu, IngredientsCRUDMenu]);
const HLMenu = new Screen('High Level Menu', [CustomersHLMenu, BatchesHLMenu, MealsHLMenu, OrdersHLMenu, IngredientsHLMenu]);

const mainMenu = new Screen('Main Menu', [CRUDMenu, HLMenu]);

module.exports = mainMenu;