# RedApron-CLI

A CLI that interacts with RedApron's database!

## How to Run
Enter following command at project root folder
```
node app.js
```

## Navigation

Simply enter the corresponding option from the list of options that are being displayed.

```
1) CRUD Menu
2) High Level Menu
3) Quit


select an option:
```

Some options are the API functions that interact with our database.
```
1) Create a MealKit
2) Get a MealKit
3) Update a MealKit
4) Delete a MealKit
5) Quit


select an option: 
```

## Receiving Output

Due to the nature of asynchornous calls to our database being within a continous loop, the output of the query won't be displayed until you have exited all the menus using "Quit".