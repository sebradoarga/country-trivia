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

### Step 1

- Use the custom hook you created to fetch the res countries data
- Render this data in a table, you can use html table tag, or component library like Material UI
- Make sure to split the table into smaller components: table head, table body, table row
