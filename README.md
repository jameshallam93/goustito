## Goustito - the mini recipe bank

Having realised that this repo has been cloned a number of times since starting it, I have decided to make it private for fear of copyright issues arising.
It is not my intention to release this app, and it is entirely made for demo purposes. Once it is finished I may rename it, switch the style up and release it as a portfolio project.


## Requirements

* An API key and an API ID for the recipe search API at [Edamam](https://www.edamam.com/) saved as environment variables:
* `REACT_APP_API_ID`; and
* `REACT_APP_EDAMAM_API_KEY`

## Set up

* Clone repository, run `npm install`
* Run `npm run`
* Site can be accessed at `localhost:3000/`

## Change Log:

### 09/06
My aim with this app is to create a recipe search using the Edamam api. Ideally recipes will be searched either by recipe name, or by ingredient (the free api allows up to 5 ingredients in one search). I would like to display the following elements:

* Recipe name
* Ingredients
* Image
* Calories
* URL to recipe
* MAYBE diet tags (low fat, nut free etc)

#### User profile

Once the initial app is up and running, I would like to create a basic user login system, most likely using MongoDB and implementing password hashing. Users would have the option of saving recipes to their profile, and creating a mini personalised virtual cookbook.

#### Limitations

I predict that the free API will introduce a number of limitations, as there are often paywalls between users and the best api features (for example, max number of ingredients in a search). I will need to monitor the api functionality to ensure that I am not trying something that is prohibitted by the interface.

#### Tech

I would like to include the following tech:

* React
* Typescript
* Jest/Enzyme
* Redux/Sagas
* SCSS/SASS
* Nodejs
* Bcrypt
* MongoDB/mongoose

### 10/06

#### Limitations update

I have found a couple of glaring limitations in the free api, namely:

* You are limited to 100 search results (the "from" selector in the api is capped at 100)
* You cannot search by ingredient

This changes the functionality of the site slightly from what I originally intended. I plan to research other recipe APIs to see if they overcome these difficulties, but if not I can live with the reduced functionality

#### Extra tech

Since last update, I have also found it necessary to use:

* React-dom-router for handling site navigation
* eslint

#### Next steps

The next big obstacle is creating the back-end to allow for user logins, and saving recipes to a user bank. I will most likely create this in a separate repo and link it at the top of this readme


### 11/06

The front-end has come together very nicely so far. I have recently added:

* Username and password live validation (list of requirements that turn green when they are met, disabled submit button until all met)
* Redux sagas, for handling the api requests - this has also allowed me to add an `isLoading` data field to `RecipeState`, and a loading component to the home page
* Responsive media queries to the home page - providing I don't make any major structural changes, the home page can be considered responsive for all major media types.

I have also been on a big refactor this morning, and started writing unit tests for a lot of trickier modules. I'm continuing on with my aim to avoid using useState in components wherever possible, preferring custom hooks or redux store wherever practical.

I intend to complete two more tickets today, globalising repeat components (button etc.) and adding a Notification component. After that I will probably break for the day, and come back tomorrow ready to start building the back-end.
