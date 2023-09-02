# Project Title
LinkSwift (A website to short your long URLs)

## Description
1. When user will enter to the website they will be able to see the logIn page if they are already registered then they can logIn by providing their registered email and password if 
   they are not registered then they have to registered first for that they have to click on the singUp which will be present below to the submit button of the login page and there they 
   can register themself after successfully registration they will be redirect to the logIn and their they have to logIn themself and once they logged in successfully they will be 
   redirect to the home page.

2. On the home page there will be a input area where user can put their long URL to get short URL of that long URL after putting the URL into the input area they have to click enter 
   button once user will hit the enter button they will be redirect to the new page which will be include all the shortened URLs including the recent one at the top.

3. On the allShortenedURL page user will be able to see the last URL they have shortened at the top separately as "your last shortened URL" and below that they will be able to see their 
   all shortened URLs which they have shortened before also including the last one as "Get your all shortened URLs"         

4. On the header there will be the logo of the website at the left hand side by clicking on that user can go to the home page and at the right hand side there will be a account circle 
   icon which will be changed into the user name(provided by the user at the time of registration) and the first letter of their name inside a circle once user logged in and by clicking 
   on that user name or the first letter of their name inside a circle they will be able to open the drawer and the drawer will be open from the top and which will include the home, 
   allShortenedURL and logOut pages link.

5. Protected routing is also done which means user have to logged in first to get access of home and allShortenedURL pages and once user logged in they are not able to go to the login 
   or signUp pages before doing logOut.

## Tech stacks        
- HTML
- Tailwind CSS
- JavaScript
- React.js
- Redux-toolkit with createAsyncThunk
- Material UI

## Dependencies
- Axios
- Formik
- jwt-decode
- react-copy-to-clipboard
- react-router-dom
- Material UI Icons
- yup
- react-redux
- reduxjs/toolkit
- tailwind-scrollbar

## Author
- Aditya Shaw

## Deployment Link
-

## Data Structure

1. ### User SingUp 
```
{
    fullName: "",
    emailId: "",
    password: "",
    confirmPassword: "",
}
```
2. ### User LogIn
```
{
    emailId: "",
    password: "",
}
```
3. ### Shortened URL 
```
{
    userId: "",
    urlCode: "",
    longUrl: "",
    shortUrl: "",
}
```
