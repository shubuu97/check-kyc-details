# Overview

- A function that accepts user details then validates them and if they are valid then it makes an API call to /driverlicence 3rd party API, depending upon the response returned from the API the function identifies the verificationResultCode and returns the result accordingly.

# Assumptions
No assumptions made, strictly followed the guidelines provided.

# What’s Left To Do

1. Date should be of type Date object instead of a string, So that when we want to do
calculations on it like user's age or if his license has expired or not we can do it more
easily.

2. It would have been better if there was an API that validates license number only, so 
that when the user types the license number in the input field it validates it on the go and that way he don't have to submit the entire form to get the error response.

# Running Locally

```
git clone change-url
cd check-kyc
```

Note- Create a .env file at the root of the project and copy the content from 
.env.example file and add the api key in front of API_KEY variable

```
npm install
npm start
```

To Change user details go to src -> user_details.ts 
and then re-start the server using `npm start` to see the updated results

# Run Test Cases

```
npm run test
```