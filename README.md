# Online car rental project using ReactJS
## Brief description of the project
The project is a React application. 
I used bootstrap and css modules for styling. 
For testing, I used JEST and the React Testing Library. 
For routing, I used the react-routing-dom library.
Most of the components are functional components. I used class components to catch errors.
The site uses firebase real time datebase, it is NO SQL database. Newly added cars and registered users are placed there.
## How to run a project
Download the project using git clone or zip
In the terminal, navigate to the project root directory
type npm install
type npm start

## Home
This is the home page. It shows available cars. At the top there is a header with a search engine that allows you to sort cars by brand. In addition, there is a button next to it that allows you to change the theme. Below is the navigation that allows you to go to the registration and login page.
![](./images/strona%20glowna.png)

## Registration
Registration form with email and password validation. Allows you to register a new user.
![](./images/formularz%20rejestracji.png)

## Login
Login form with email and password validation. The account must be in the firebase database. The token is stored in local storage thanks to which we are still logged in even after refreshing the page.
![](./images/formularz%20logowania.png)

## Change of account details
After logging in, a link to my profile pages appears in the navigation bar. Here you can change your account details, change your e-mail address or password.
![](./images/moj%20profil%20zmiana%20danych.png)

## Adding a new car
Next to the change of account data, there is a tab, after clicking on it, we will be redirected to the page with the form for adding a new car to the database.
![](./images/formularz%20dodania%20nowego%20samochodu.png)
## The resource does not exist
If we try to download a resource that does not exist, i.e. enter a link that the application is unable to handle, a 404 page will be displayed.
![](./images/moj%20profil%20zmiana%20danych.png)

