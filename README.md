# Gym Pursuit

![weight-logo](/public/assets/images/weight-logo.png)

### By Garrett Moore, Tori White, Joe Calabrese, and Anthony Riccio

## Deployed Here: https://gympursuit.herokuapp.com/

# Inspiration
Going to the gym involves a considerable amount of time, dedication, and know-how. Many people may be discouraged from going to the gym simply because they don't know how to work out and personal trainers may be too expensive.

In order to remove these barriers and encourage more people to use the gym, we created a web application where the inexperienced gym goers can connect with more experienced gym goers and schedule a time to workout together at their preferred gym locations.

# Application
Gym Pursuit is a full-stack site that connects beginner gym goers with more experienced gym goers in their area and at a gym of their choice. This gives beginners a chance to learn from more experienced individuals without having to pay for expensive training.

# Built With

Gym Pursuit is built using JavaScript, node.js, Express to query and route data, jQuery, BootStrap, CSS, and HTML. Gym Pursuit uses the Google Maps API to enable users to search for gyms in their location. The application is currently deployed to Heroku and is backed by a MySQL Database with a Sequelize ORM.

Node Packages Used: express, body-parser, sequelize, mysql2, and method-override

# Getting Started

## Prerequisites
1. Create a GitHub repo for this assignment and clone it to your computer.
2. Heroku Account
    1. Create a Heroku account for deployment here https://www.heroku.com/ .
3. Install MySQL
    1. For installation assistance visit https://dev.mysql.com/downloads/installer/ .
4. Install MySQL Workbench
    1. https://dev.mysql.com/downloads/workbench/ .
5. Obtain Google Maps API Key
    1. Sign up to receive your Google Maps API Key here: https://developers.google.com/maps/documentation/javascript/get-api-key .

## Installing
1. Open up the project and run npm install.
2. The following npm packages should now be installed:
    1. express
    2. sequelize
    3. mysql2
    4. method-override
    5. body-parser
3. Add the Google Maps API Key in all HTML Files where applicable.

![api-key](/public/assets/images/api-key.png)


## Deployment
1. First, open your terminal and navigate to your project folder
2. Connect your repo to Heroku by running 'heroku create' in the command prompt. Enter your Heroku credentials to login and create the app from the command prompt.
3. In order to deploy the project to Heroku, you need to set up a JawsDB MySQL provision. JawsDB MySQL is a remote MySQL database that Heroku supports natively.
    1. Find	your Heroku app’s name in the dashboard. Click on it.
    2. Look for the Add-Ons section in your app's dashboard and type JawsDB in the input field. This will bring up the JawsDB MySQL add-on.

    ![jaws-example](/public/assets/images/jaws-example.png)

    3. Click on JawsDB MySQL and that should bring up a modal asking you to provision.

    ![jaws-provision](/public/assets/images/jaws-provision.png)

    4. Check the free option and then click the "Provision" button.
2. You'll need to find the URI string that connects Sequelize to JawsDB MySQL. In your Heroku app, click JawsDB MySQL to bring up the settings to your remote database to get the URI connection string.

    ![credentials](/public/assets/images/credentials.png)

4. In the 'config' folder, open the config.json file. Add the following information as it appears here:

    ![db-password](/public/assets/images/db-password.png)

3. Now we have to manually create the tables in our JawsDB instance so we can properly connect to it. JawsDB includes certain fields that me must employ in our project. Otherwise we won't be able to use the remote database.
    1. Open the MySQL Workbench GUI
    2. Create a connection to the database.
    3. Enter your credentials. For the Host input field, grab the host value from your JawsDB settings page:

    ![enter-info](/public/assets/images/enter-info.png)

    4. Use the page's username and password for your connection as well.
    5. Create your tables as you normally would using prior schema.
    6. Establish the connection.
    
4. Run 'heroku open' to test that everything is working properly.

# Using Gym Pursuit

## Step 1 - New User
1. Click "New User" to begin or "Login" if you are a returning user.
2. Choose whether or not you want to sign up as a Rookie or an Expert.
3. Fill out the form with your information.
4. Enter in a gym and location into the Google Maps AutoComplete Search to establish which gym you will be using.

![google-maps](/public/assets/images/google-maps.png)

5. After completeing a search using Google Maps, copy the Gym ID and paste it into the from under 'Gym ID'.

![gym-id](/public/assets/images/gym-id.png)

6. Submit the form.

## Step 2 - User Page
1. After submitting the form, the user will be directed to their user page.
2. Here, a user can submit a form to post a workout appointment that another user can accept, see their own scheduled appointments, or select from a generated list of other user's appointments.

## License
MIT License

Copyright (c) [2017] [Garrett Moore]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## End
Thank you for using Gym Pursuit! Please contact me directly if you have any questions or suggestions.

https://github.com/garrettmmoore
