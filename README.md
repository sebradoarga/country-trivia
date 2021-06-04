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
