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

### Step 3
- Set up all the redux boilerblate for the project
- Everything related to redux stays in one folder: reducers, actions, store
- Think about what reducer you're going to make and write them accordingly
- Use `combineReducers` and have a default state for the `createStore`

### Step 4
Take your time to implement the following features:

- Convert your hook to use either thunk or saga to fetch the data
- Switch theme of the app with Context API
- Add/remove the countries to/from favorite list using Redux, Redux-saga, Redux-thunk
- Maker sure the theme and favorite list is saved in local storage to persist accross refreshes of the page (you can use thunk or saga to implement side effects that get state from the store and save it to local storage)
- Use React-router to navigate to different pages: home page with list of countries, single country page with details of the country
- Styling: your choice: material UI, styled components, react-bootstrap, etc.
- References can be found in the lecture slides


