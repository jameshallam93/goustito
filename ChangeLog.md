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
* Docker/docker-compose

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
 
 ### 12/06
 
 I have now built a rudimentary backend for the app and have weakly linked the front and back together. A lot more work needs to be done, but the login form now successfully connects to the mongoose database via the backend, and can handle user logins with existing user credentials (for test purposes, I have created an entry with details "testuser" + "password".
 
 I would like to get tests written for the existing controllers before adding any more, but the structure of the server is in place. The server is built in Typescript using express, password hashing is done using bcrypt, and I'm using mongoose and Atlas mongoDB for storing user data.
 
 I do not intend to make the server more complicated than it needs to be, but there are some middlewares I'd like to introduce, detailed in a ticket in the server repository.
 
 
 ### 13/06 
 
 I have noticed that I have stopped being as focussed when working and have lapsed out of good habits and have made a couple of messy commits. To rectify this, I will focus on ensuring that I am always working on one ticket and one only at a time, and that all tickets/documentation are filled in completely.
 
 Further, Edamam have just released a 2nd version of their API, which seems to focus on efficiency and reducing bandwidth. They continue to offer support for version 1, and presumably will carry on doing so for some time, but I could imagine that they will phase out V1 at some stage - it is worth exploring whether it is worth the effort now to switch over, and whether this will affect site functionality.
 
 ## 14/06
 
 I now have a semi-functional app, with signup, login, and recipe saving/deleting in place. The next major step is to neaten up the user vault so that recipes are displayed nicely, instead of just showing the URL.
 
 Token authentication is now in place for saving and deleting posts, and I will shortly be adding session persistence.
 
 I'm slowly moving more store logic into redux sagas, but still need to create a saga for logins and signups.
 
 
 ### 19/06
 
 Over the last few days, I have been focussed on a few different areas:
 
 * Testing: I have created unit tests for all non-component modules and achieved decent coverage in these modules. Component modules will also need testing but has been delayed as most of the business logic from components has been extracted out into functions and sagas already.
 * Dockerising: I have dockerised both the front and back end, and created a docker-compose.yml file. Next step is to create a dedicated repo for both front and back end to faciliate easy cloning and use of this app.
 * The user vault is now operational, with all saved user recipes being initialised on sign in and rendered on this page.
 * Session persistence is now in place, although I need to check why the token-expiry is not being removed from localstorage on session expiry.

I have not yet had time to implement the social food feed feature, and will consider this once I have gotten the existing code into a maintainable and tested state.

 
### 22/06

Unfortunately my grandfather passed away this weekend, which has severely limited the time I had available to spend polishing and testing. As a result, this project is not in the state I had hoped it would be in by this stage. I intend to submit this at the end of play today to keep within the two week deadline, and will spend the afternoon refactoring and adding tests where I can.
