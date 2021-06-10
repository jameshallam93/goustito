## Goustito - the mini recipe bank

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

## Limitations update

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
