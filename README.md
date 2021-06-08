# Frontend React Project

This is your final project for the frontend module

## Instructions

### Step 1

Write a custom hook that does:

- Fetch all the countries if no argument is given and return the data
- Given a country name as argument (international or native), returns a country object from [countries APIs](https://restcountries.eu/).
- The example usage of the hook is like this:

```
const [error, country] = useCountry('Suomi')
```

### Step 2

- Use the custom hook you created to fetch the res countries data
- Render this data in a table, you can use html table tag, or component library like Material UI
- Make sure to split the table into smaller components: table head, table body, table row

## Step 3
- Set up all the redux boilerblate for the project
- Everything related to redux stays in one folder: reducers, actions, store
- Think about what reducer you're going to make and write them accordingly
- Use `combineReducers` and have a default state for the `createStore`
