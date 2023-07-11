# Workshop Steps
This guide outlines all the steps required to complete the workshop.

## Outline <!-- omit in toc -->
* [A. Get started - clone the repo \& install dependencies](#a-get-started---clone-the-repo--install-dependencies)
* [B. Get your free Kintone database](#b-get-your-free-kintone-database)
* [C. Create a `.env` file](#c-create-a-env-file)
* [D. Create a Kintone web database app](#d-create-a-kintone-web-database-app)
  * [Input Fields](#input-fields)
  * [Steps to create the Kintone App](#steps-to-create-the-kintone-app)
* [E. Generate an API token for the Kintone app](#e-generate-an-api-token-for-the-kintone-app)
* [H. Edit server.js](#h-edit-serverjs)
  * [What do you mean, CORS?](#what-do-you-mean-cors)
  * [Overview](#overview)
  * [Let's get Coding](#lets-get-coding)
* [Check your work](#check-your-work)
* [Still got a problem?](#still-got-a-problem)

## A. Get started - clone the repo & install dependencies

First, clone the [kintone-workshops/React-x-REST-API-Workshop](https://github.com/kintone-workshops/React-x-REST-API-Workshop) repo!  🚀  
Then go inside the folders & install the dependencies!

```shell
cd Downloads

git clone https://github.com/kintone-workshops/React-x-REST-API-Workshop

cd React-x-REST-API-Workshop

npm install

cd ./backend

npm install
```

## B. Get your free Kintone database

1. Go to [kintone.dev/new/](http://kintone.dev/new/) and fill out the form.  
    * ⚡ Only use lowercase, numbers, & hyphens in your subdomain
    * ⚠ Do not use uppercase or special characters
    * 🤖 Example subdomain: `example`
    * ✅ Use Chrome or Firefox
    * ❌ Do not use Safari
2. Look for "**Welcome to Kintone! One More Step for Developer License**" email in your inbox and click the **Activate Now** button.
    * Sent from `developer@kintone.com`
    * If you don't see it, check your spam folder
3. Set the **Initial Password**
4. Log into your Kintone Subdomain
    * URL: {your subdomain}.kintone.com (e.g. `example.kintone.com`)
    * Login Name: Your email address
    * Password: The password you set in Step 3
    * ⚡ If you forget your password, you can reset it by clicking the **Having Trouble Logging In?** link on the login screen.

|                                                                                                            |                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| ![Step 1: Fill out the Kintone Developer license sign-up form](././img/common_signup/SignUp-1.png)         | ![Step 2: Email address will be the login name & the subdomain will be your unique link](././img/common_signup/SignUp-2.png) |
| ![Step 3: Check for a "Welcome to Kintone! One More Step To..." email](././img/common_signup/SignUp-3.png) | ![Step 4: Log into Kintone](././img/common_signup/SignUp-4.png)                                                              |

## C. Create a `.env` file

Duplicate the [.env.example](./../.env.example) file and save as `.env` file.  
This is where we will be saving the login credentials and API Keys.

Here is what your `.env` might look like:

```txt
SUBDOMAIN = "example"
APPID = "1"
APITOKEN = "1J22qNAR54I4eiMcd0JmfDAavJNfNJDVaqt34X9A"
```

So far, you can fill out the following variables:
* `SUBDOMAIN`

### ⚠️ WARNING ⚠️ <!-- omit in toc -->

⚠️ DO NOT DELETE THE [.env.example](./../.env.example) FILE!  
[.env.example](./../.env.example) is used by env-cmd to verify that the `.env` file is correctly configured.

## D. Create a Kintone web database app

Let's create a Kintone App to store Kintone User's Country, State, and City.  

Here are the required fields & their configurations for our workshop:

### Input Fields

| Field Type    | Field Name  | Field Code |
| ------------- | ----------- | ---------- |
| Text Field #1 | **Country** | `country`  |
| Text Field #2 | **State**   | `state`    |
| Text Field #3 | **City**    | `city`     |

### Steps to create the Kintone App

To create the Kintone App, click the **➕** button on the upper right side of the Kintone Portal.
![Screenshot: The "➕" button](img/common_kintone/CreateApp-1.png)

Click the **Create App from Scratch** button.
![Screenshot: The create app screen](img/common_kintone/CreateApp-2.png)

Name your App. We chose **I Use Kintone!**
![Screenshot: The create app screen](img/Kintone-App-Name.png)

Configure your App to have three Text Fields, with field codes for `country`, `state`, and `city`.
![Screenshot of the completed Kintone App](img/Kintone-Field-Codes.gif)

Then, click the **Save** and **Activate App** buttons! 💪

_Confused? 🤔 → Check out the [How to Create a Kintone Database App](https://youtu.be/pRtfn-8cf_I) video 📺_

## E. Generate an API token for the Kintone app

We need to generate an API Token for our Kintone App.

1. From the Kintone App, click the **App Settings** button ⚙️ on the upper right side.
    * ![Screenshot: The "App Settings" button](https://get.kintone.help/k/img/settings_new_icon.png)
1. Select the **App Settings** tab
1. Under **Customization and Integration**, click the **API Token** button.
1. Click **Generate**. ![Screenshot: The "Generate" button](img/common_kintone/KintoneApp_API_1.png)
1. Check the `Add records` and `Edit records` boxes.  
    * ![Screenshot: The "Add records" and "Edit records" boxes](img/common_kintone/KintoneApp_API_2.png)
1. Copy the API Token and paste it to the `APITOKEN` variable in your `.env` file.
1. Click the **Save** button on the bottom right side of the screen.
1. Click the **Update App** button on the upper right side of the screen.

![KintoneApp_URL.png](img/common_kintone/KintoneApp_URL.png)

### Update the `.env` file with the App ID as well! <!-- omit in toc -->
Input the App ID into the `APPID` variable in your `.env` file.

If this is NOT your first Kintone App, then you need to update the `"app"` variable with your App ID!

The App ID number can be easily found in the Kintone App's URL!

Go to the Kintone App and grab the URL.  
* Example: `https://devevents.kintone.com/k/52/`

Kintone App's URL follows this template:  
* `https://<SUBDOMAIN>.kintone.com/k/<App ID>/show#record=<RECORD ID>`

So then the `https://devevents.kintone.com/k/52/` URL tells us that this App's ID is `52`

---

## H. Edit server.js

For this workshop, we will only be coding in [./src/backend/server.js](../src/backend/server.js).
This tutorial is focused only on connecting a React frontend to a Kintone Web Database. As such, we won't be covering the front end components (located at [./src/App.js](../src/App.js)).

As is common for Web Development, API calls from the frontend directly to your Kintone Database are not allowed, due to CORS security risks.

### What do you mean, CORS?

Since our frontend resides on localhost:3000 and any API calls to our Kintone Database would be directed at your Kintone subdomain, a backend is needed to act as a proxy.
![CORS.png](img/CORS.png)

By configuring CORS settings on our Express Server backend, we can make REST API requests to our Kintone Web Database.

### Overview

In short, our React Frontend, located on `localhost:3000` will make a fetch request of either `GET` or `POST` to our Express Server at `localhost:5000/getData` or `localhost:5000/postData`. Then, acting as our proxy, our backend will then make a fetch request to `https://example.kintone.com/k/v1/record.json?app=1`, to either GET or POST our data. The data will be returned our backend as JSON, which we will then pass back to the frontend to be displayed.

### server.js setup

Navigate to [./src/backend/server.js](../src/backend/server.js).

At the top of the file, we have our dependency imports and class instantiation:

``` javascript
const express = require('express');
const cors = require('cors');
const PORT = 5000;
const app = express();
```

Next, we have our authentication setup via our `.env` file:

``` javascript
require('dotenv').config({path: '../.env'});
const subdomain = process.env.SUBDOMAIN;
const appID = process.env.APPID;
const apiToken = process.env.APITOKEN;
```

And lastly, we have some CORS configuration:
```javascript
app.use(cors());
const corsOptions = {
  origin: 'http://localhost:3000'
};
```

and some pre-configured REST API endpoints:
```javascript
const multipleRecordsEndpoint = `https://${subdomain}.kintone.com/k/v1/records.json?app=${appID}`
const singleRecordEndpoint = `https://${subdomain}.kintone.com/k/v1/record.json?app=${appID}`;
```
We got this information from our [Documentation Site](www.kintone.dev), specifically from our [REST API Records](https://kintone.dev/en/docs/kintone/rest-api/records/) documentation.



---

## I. Start the servers

Open two terminal windows

From the project root directory, run:
`npm run start`

From the backend directory, run:
`npm run start`

Navigate to `localhost:3000` in your browser, enter your Country, State, and City, and click `submit`!
If your entry appears in your Kintone Database, then congratulations, you did it!

## Check your work

Is your code not working?

Compare your [./src/backend/server.js](../src/backend/server.js) with the [Solution.md](./Solution.md) to see if it is all written correctly.

## Still got a problem?

Check out README's [Debugging](TODO: Update Link) section!

And finally, post your Kintone customization questions over at our community forum:  
[forum.kintone.dev](https://forum.kintone.dev/)

Good luck coding! 💪
